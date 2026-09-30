//USEUNIT commonfunctions
//IMPROVED RECOVERY SCRIPT WITH ROBUST ERROR HANDLING

// ============================================
// CONFIGURATION
// ============================================
var ConsecutiveFailures = 0;
var FAILURE_THRESHOLD = 2;
var HARD_RECOVERY_MAX_ATTEMPTS = 3;
var hardRecoveryAttempts = 0;

// Recovery status constants
var RECOVERY_STATUS = {
  SUCCESS: 0,
  FAILED: -1,
  PARTIAL: 1
};

// Timeout constants (in milliseconds)
var TIMEOUTS = {
  SHORT: 5000,      // 5 seconds
  NORMAL: 15000,    // 15 seconds
  LONG: 30000,      // 30 seconds
  APP_STARTUP: 60000 // 60 seconds
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Safe element click with validation
 */
function SafeClick(element, x, y, modifiers) {
  try {
    if (!element) {
      Log.Error("Element reference is null");
      return false;
    }
    
    if (!element.Exists) {
      Log.Error("Element does not exist");
      return false;
    }
    
    if (x !== undefined && y !== undefined) {
      if (modifiers) {
        element.Click(x, y, modifiers);
      } else {
        element.Click(x, y);
      }
    } else {
      element.Click();
    }
    
    Log.Message("Successfully clicked element");
    return true;
  } catch (e) {
    Log.Error("SafeClick failed: " + e.message);
    return false;
  }
}

/**
 * Wait for element to exist and be visible
 */
function WaitForElement(element, timeoutMs) {
  if (!element) {
    Log.Warning("Element reference is null");
    return false;
  }
  
  const start = aqDateTime.Now();
  while (aqDateTime.TimeInterval(aqDateTime.Now(), start) < timeoutMs) {
    try {
      if (element.Exists && element.VisibleOnScreen) {
        Log.Message("Element found and visible");
        return true;
      }
    } catch (e) {
      // Element may not be ready yet
    }
    Delay(500);
  }
  
  Log.Warning("Element wait timeout after " + timeoutMs + "ms");
  return false;
}

/**
 * Log recovery progress with consistent formatting
 */
function LogRecoveryStep(stepNumber, stepName, status) {
  const statusStr = status ? "✓" : "✗";
  Log.Message("[Recovery Step " + stepNumber + "] " + statusStr + " " + stepName);
}

/**
 * Get screenshot for debugging
 */
function CaptureRecoveryScreenshot(reason) {
  try {
    const timestamp = aqDateTime.Now().ToString("yyyy-MM-dd_HH-mm-ss");
    const filename = "Recovery_" + reason + "_" + timestamp + ".png";
    const fullPath = Project.Path + "\\Screenshots\\" + filename;
    
    // Create Screenshots folder if it doesn't exist
    try {
      // Attempt to capture and save
      Sys.Desktop.ActiveWindow().GetImage().SaveToFile(fullPath);
      Log.Message("Screenshot saved: " + filename);
    } catch (e) {
      Log.Warning("Could not save screenshot: " + e.message);
    }
  } catch (e) {
    // Silently fail if screenshot not possible
  }
}

// ============================================
// MAIN RECOVERY FUNCTIONS
// ============================================

/**
 * Bring application window to front
 */
function BringAppToFront() {
  try {
    var p = Sys.Process("tpiscan");
    if (p.Exists) {
      var w = p.Window(0);
      if (w.Exists) {
        w.Restore();
        w.Maximize();
        w.SetFocus();
        Log.Message("Application brought to front");
        return true;
      }
    }
    Log.Warning("Application window not found");
    return false;
  } catch (e) {
    Log.Error("BringAppToFront failed: " + e.message);
    return false;
  }
}

/**
 * Wait for start screen to be visible
 */
function WaitForStartScreen(timeoutMs) {
  if (!timeoutMs) {
    timeoutMs = TIMEOUTS.LONG;  // Default 30 seconds
  }
  
  try {
    const startBtn = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start");
    return WaitForElement(startBtn, timeoutMs);
  } catch (e) {
    Log.Error("WaitForStartScreen failed: " + e.message);
    return false;
  }
}

/**
 * Wait for login screen to be visible
 */
function WaitForLoginScreen(timeoutMs) {
  if (!timeoutMs) {
    timeoutMs = TIMEOUTS.NORMAL;  // Default 15 seconds
  }
  
  const start = aqDateTime.Now();
  while (aqDateTime.TimeInterval(aqDateTime.Now(), start) < timeoutMs) {
    try {
      const loginBtn = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton;
      if (loginBtn.Exists && loginBtn.VisibleOnScreen) {
        Log.Message("Login screen found");
        return true;
      }
    } catch (e) {
      // Element not ready yet
    }
    Delay(1000);
  }
  
  Log.Warning("Login screen wait timeout after " + timeoutMs + "ms");
  return false;
}

/**
 * Perform colleague login
 */
function ColleagueLogin() {
  try {
    LogRecoveryStep(1, "Colleague Login", true);
    
    const scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
    
    // Step 1: Click login button
    if (!SafeClick(scene.loginButton, 39, 41)) {
      LogRecoveryStep(1.1, "Click login button", false);
      return RECOVERY_STATUS.FAILED;
    }
    Delay(1000);
    
    // Step 2: Enter ID (12)
    if (!SafeClick(scene.num1, 46, 42)) {
      LogRecoveryStep(1.2, "Enter ID digit 1", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    if (!SafeClick(scene.num2, 31, 40)) {
      LogRecoveryStep(1.2, "Enter ID digit 2", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    if (!SafeClick(scene.enter, 53, 16)) {
      LogRecoveryStep(1.3, "Confirm ID", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    Delay(2000);  // Wait for password screen
    LogRecoveryStep(1.4, "Password screen", true);
    
    // Step 3: Enter password (binary pattern)
    const newScene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
    const toggleButton1 = newScene.num1;
    const toggleButton2 = newScene.num2;
    
    if (!toggleButton1.Exists || !toggleButton2.Exists) {
      LogRecoveryStep(1.5, "Password buttons found", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    toggleButton1.Click(58, 23);
    Delay(200);
    toggleButton2.Click(52, 29);
    Delay(200);
    toggleButton1.Click(74, 21);
    Delay(200);
    toggleButton2.Click(52, 26);
    Delay(200);
    toggleButton1.Click(56, 25);
    Delay(200);
    toggleButton2.Click(57, 18);
    Delay(500);
    
    // Step 4: Confirm password
    if (!SafeClick(newScene.enter2, 122, 39)) {
      LogRecoveryStep(1.6, "Confirm password", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    Delay(2000);  // Wait for admin menu
    LogRecoveryStep(1.7, "Admin menu loaded", true);
    
    return RECOVERY_STATUS.SUCCESS;
  } catch (e) {
    Log.Error("ColleagueLogin exception: " + e.message);
    return RECOVERY_STATUS.FAILED;
  }
}

/**
 * Try to void active transaction
 */
function TryVoidTransaction() {
  try {
    LogRecoveryStep(2, "Void Transaction", true);
    
    const scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
    
    // Step 1: Click login (if not already logged in)
    if (!SafeClick(scene.loginButton, 39, 41)) {
      LogRecoveryStep(2.1, "Click login button", false);
      return RECOVERY_STATUS.FAILED;
    }
    Delay(1000);
    
    // Step 2: Enter colleague credentials
    if (ColleagueLogin() !== RECOVERY_STATUS.SUCCESS) {
      LogRecoveryStep(2.2, "Colleague login", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    Delay(1000);
    const newScene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
    
    // Step 3: Navigate to void function
    if (!SafeClick(newScene.nav01, 118, 32)) {
      LogRecoveryStep(2.3, "Navigate admin menu", false);
      return RECOVERY_STATUS.FAILED;
    }
    Delay(1000);
    
    // Step 4: Click void transaction function
    const voidFunc = newScene.JavaFXObject("func02");
    if (!voidFunc.Exists) {
      LogRecoveryStep(2.4, "Void function found", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    if (!SafeClick(voidFunc)) {
      LogRecoveryStep(2.4, "Click void function", false);
      return RECOVERY_STATUS.FAILED;
    }
    Delay(1000);
    
    // Step 5: Select void reason
    try {
      if (ImageRepository.VoidTransactionOptionsImage.GoBackOptionImage.Exists) {
        Log.Message("Void options available");
      }
    } catch (e) {
      Log.Warning("Could not verify void options: " + e.message);
    }
    
    // Call void option function with error handling
    if (!ClickVoidTransactionOption("Changed their mind/Price Enquiry")) {
      LogRecoveryStep(2.5, "Select void reason", false);
      return RECOVERY_STATUS.FAILED;
    }
    
    Delay(1000);
    
    // Step 6: Exit admin menu
    if (!SafeClick(newScene.backMenu, 28, 39, skAlt)) {
      LogRecoveryStep(2.6, "Click back button", false);
      // Continue anyway - may still have logged out
    }
    
    if (!SafeClick(newScene.pairedLogoffButtonAttendantMenu, 49, 37, skAlt)) {
      LogRecoveryStep(2.7, "Click logoff button", false);
      // Continue anyway
    }
    
    Delay(2000);
    Log.Message("Transaction void command completed");
    
    // Step 7: Verify start screen appeared
    if (WaitForStartScreen(TIMEOUTS.LONG)) {
      LogRecoveryStep(2.8, "Start screen confirmed", true);
      return RECOVERY_STATUS.SUCCESS;
    } else {
      LogRecoveryStep(2.8, "Start screen confirmation", false);
      return RECOVERY_STATUS.PARTIAL;
    }
  } catch (e) {
    Log.Error("TryVoidTransaction exception: " + e.message);
    CaptureRecoveryScreenshot("VoidFailed");
    return RECOVERY_STATUS.FAILED;
  }
}

/**
 * Soft recovery - try to void transaction and return to start
 */
function SoftRecover() {
  Log.Message("=== SOFT RECOVERY INITIATED ===");
  
  const result = TryVoidTransaction();
  
  if (result === RECOVERY_STATUS.SUCCESS) {
    Log.Message("Soft recovery completed successfully");
    Log.Message("=== SOFT RECOVERY COMPLETE ===");
    return true;
  } else {
    Log.Warning("Soft recovery failed or partial");
    Log.Message("=== SOFT RECOVERY COMPLETE (FAILED) ===");
    return false;
  }
}

/**
 * Hard recovery - terminate and restart application
 */
function HardRecover() {
  Log.Message("=== HARD RECOVERY INITIATED ===");
  
  if (hardRecoveryAttempts >= HARD_RECOVERY_MAX_ATTEMPTS) {
    Log.Error("Maximum hard recovery attempts (" + HARD_RECOVERY_MAX_ATTEMPTS + ") exceeded");
    return false;
  }
  
  hardRecoveryAttempts++;
  Log.Message("Hard recovery attempt " + hardRecoveryAttempts + " of " + HARD_RECOVERY_MAX_ATTEMPTS);
  
  try {
    // Step 1: Terminate application
    LogRecoveryStep(3, "Terminate application", true);
    
    try {
      const tpiscanProcess = Sys.Process("tpiscan");
      if (tpiscanProcess.Exists) {
        Log.Message("Terminating tpiscan process");
        tpiscanProcess.Terminate();
        
        // Verify termination
        Delay(2000);
        if (tpiscanProcess.Exists) {
          Log.Warning("Process still exists after terminate");
          tpiscanProcess.Terminate(true);  // Force kill
          Delay(2000);
        }
        LogRecoveryStep(3.1, "Process terminated", true);
      } else {
        Log.Message("Process already terminated");
      }
    } catch (e) {
      Log.Error("Failed to terminate process: " + e.message);
      // Continue anyway
    }
    
    // Step 2: Wait for process to fully die
    Delay(3000);
    LogRecoveryStep(3.2, "Wait for cleanup", true);
    
    // Step 3: Restart application
    try {
      Log.Message("Starting application via TestedApps");
      if (TestedApps.shell.Exists) {
        TestedApps.shell.Run();
        LogRecoveryStep(3.3, "Application started", true);
      } else {
        Log.Error("TestedApps.shell not found");
        return false;
      }
    } catch (e) {
      Log.Error("Failed to start application: " + e.message);
      LogRecoveryStep(3.3, "Application start", false);
      return false;
    }
    
    // Step 4: Ensure start screen appears
    if (EnsureStartScreen()) {
      Log.Message("Application restarted and ready");
      Log.Message("=== HARD RECOVERY COMPLETE (SUCCESS) ===");
      return true;
    } else {
      Log.Error("Could not ensure start screen after restart");
      Log.Message("=== HARD RECOVERY COMPLETE (FAILED) ===");
      return false;
    }
  } catch (e) {
    Log.Error("HardRecover exception: " + e.message);
    CaptureRecoveryScreenshot("HardRecoveryFailed");
    Log.Message("=== HARD RECOVERY COMPLETE (EXCEPTION) ===");
    return false;
  }
}

/**
 * Main failure handler - escalates recovery strategy
 */
function HandleFailure() {
  ConsecutiveFailures++;
  Log.Message("========================================");
  Log.Message("FAILURE DETECTED - Consecutive: " + ConsecutiveFailures);
  Log.Message("========================================");
  
  if (ConsecutiveFailures < FAILURE_THRESHOLD) {
    Log.Message("Attempting soft recovery (attempt " + ConsecutiveFailures + ")");
    
    if (SoftRecover()) {
      ConsecutiveFailures = 0;
      Log.Message("Soft recovery successful - test will continue");
      Log.Error("Current step failed but recovery successful");
      return;
    }
  }
  
  Log.Message("Soft recovery failed - attempting hard recovery");
  
  if (HardRecover()) {
    ConsecutiveFailures = 0;
    Log.Message("Hard recovery successful - test will continue");
    Log.Error("Current step failed but hard recovery successful");
    return;
  }
  
  Log.Error("All recovery attempts failed - test cannot continue");
}

/**
 * Ensure application reaches start screen
 */
function EnsureStartScreen() {
  try {
    Log.Message("Ensuring application is at start screen");
    
    // Step 1: Bring app to front
    if (!BringAppToFront()) {
      Log.Warning("Could not bring app to front");
    }
    Delay(1000);
    
    // Step 2: Check if start screen already visible
    if (WaitForStartScreen(TIMEOUTS.SHORT)) {
      Log.Message("Start screen already visible");
      return true;
    }
    
    Log.Message("Start screen not visible, checking for login screen");
    
    // Step 3: Check if login screen visible
    if (WaitForLoginScreen(TIMEOUTS.NORMAL)) {
      Log.Message("Login screen found, performing colleague login");
      
      if (ColleagueLogin() === RECOVERY_STATUS.SUCCESS) {
        Log.Message("Colleague login completed");
        
        // After login, open lane
        try {
          const scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
          if (scene.nav02.Exists) {
            SafeClick(scene.nav02);
            Delay(1000);
            
            // Try to click open lane button
            try {
              if (ImageRepository.ColleagueMenuLaneOptions.OpenLaneButton.Exists) {
                ImageRepository.ColleagueMenuLaneOptions.OpenLaneButton.Click();
              }
            } catch (e) {
              Log.Warning("Could not open lane: " + e.message);
            }
          }
          
          // Logoff
          SafeClick(scene.backMenu, 28, 39, skAlt);
          Delay(500);
          SafeClick(scene.pairedLogoffButtonAttendantMenu, 49, 37, skAlt);
          Delay(2000);
        } catch (e) {
          Log.Warning("Error during lane opening: " + e.message);
        }
        
        // Wait for start screen after login
        if (WaitForStartScreen(TIMEOUTS.LONG)) {
          Log.Message("Start screen confirmed after login");
          return true;
        }
      } else {
        Log.Error("Colleague login failed");
      }
    }
    
    Log.Error("Could not reach start screen");
    return false;
  } catch (e) {
    Log.Error("EnsureStartScreen exception: " + e.message);
    return false;
  }
}

/**
 * Ensure application is running
 */
function EnsureAppIsRunning() {
  try {
    const tpiscanProcess = Sys.Process("tpiscan");
    
    if (tpiscanProcess.Exists) {
      Log.Message("Application is running");
      return true;
    }
    
    Log.Message("Application not running - starting via TestedApps");
    
    if (TestedApps.shell.Exists) {
      TestedApps.shell.Run();
      Delay(2000);
      return true;
    } else {
      Log.Error("TestedApps.shell not found");
      return false;
    }
  } catch (e) {
    Log.Error("EnsureAppIsRunning exception: " + e.message);
    return false;
  }
}

/**
 * Reset consecutive failure counter
 */
function ResetFailures() {
  ConsecutiveFailures = 0;
  hardRecoveryAttempts = 0;
  Log.Message("Failure counters reset");
}

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Called when test error is logged
 */
function EventHandler_OnLogError(Sender, LogParams) {
  Log.Message("OnLogError event triggered");
  HandleFailure();
  LogParams.Locked = true;  // Prevent further logging of this error
}

/**
 * Called when test starts
 */
function EventHandler_OnStartTest(Sender) {
  Log.Message("=== TEST STARTED ===");
  ResetFailures();
  EnsureAppIsRunning();
  Delay(2000);
  EnsureStartScreen();
}

/**
 * Called when test ends
 */
function EventHandler_OnStopTest(Sender, StopReason) {
  Log.Message("=== TEST ENDED ===");
  Log.Message("Stop Reason: " + StopReason);
  ResetFailures();
}

// ============================================
// HELPER FUNCTION (from commonfunctions)
// ============================================

/**
 * Click void transaction option
 * This should be imported from commonfunctions.js
 */
function ClickVoidTransactionOption(voidOption) {
  try {
    const button = null;
    const voidOptionMap = {
      "Go back": ImageRepository.VoidTransactionOptionsImage.GoBackOptionImage,
      "Changed their mind/Price Enquiry": ImageRepository.VoidTransactionOptionsImage.ChangedTheirMindOptionImage,
      "Functionality not available in SCOTs": ImageRepository.VoidTransactionOptionsImage.FunctionalityNotAvailableOptionImage,
      "Payment Failed": ImageRepository.VoidTransactionOptionsImage.PaymentrFailedOptionImage,
      "Walk off (items left behind)": ImageRepository.VoidTransactionOptionsImage.WalkOffItemsLeftBehindOptionImage,
      "Walk off (Stock Loss)": ImageRepository.VoidTransactionOptionsImage.WalkOffStockLossOptionImage
    };
    
    const button = voidOptionMap[voidOption];
    
    if (button && button.Exists) {
      button.Click();
      Log.Message("Clicked void option: " + voidOption);
      return true;
    } else {
      Log.Error("Void option not found: " + voidOption);
      return false;
    }
  } catch (e) {
    Log.Error("ClickVoidTransactionOption failed: " + e.message);
    return false;
  }
}
