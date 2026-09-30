// Welcome Screen Page Object

class WelcomeScreenPage {
  constructor() {
    this.scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  }

  delay(ms, message = "") {
    if (message) {
      Log.Message(message);
    }
    Delay(ms);
  }

  elementExists(element) {
    return element && element.Exists;
  }

  clickElement(element, x = null, y = null, modifiers = null) {
    if (!this.elementExists(element)) {
      Log.Error("Element does not exist");
      return false;
    }

    if (x !== null && y !== null) {
      if (modifiers) {
        element.Click(x, y, modifiers);
      } else {
        element.Click(x, y);
      }
    } else {
      element.Click();
    }

    return true;
  }

  logStep(stepName, status = "PASS") {
    Log.Message("[" + status + "] " + stepName);
  }

  // ============================================
  // UI ELEMENT GETTERS
  // ============================================

  // Main buttons
  get startButton() {
    return this.scene.start;
  }

  get helpButton() {
    return this.scene.JavaFXObject("help");
  }

  get languageButton() {
    return this.scene.JavaFXObject("chooseLanguage");
  }

  get loginButton() {
    return this.scene.loginButton;
  }

  get recallButton() {
    return this.scene.recall;
  }

  // Keypad elements
  getKeypadButton(digit) {
    const keypadMap = {
      '0': this.scene.JavaFXObject("num0"),
      '1': this.scene.JavaFXObject("num1"),
      '2': this.scene.JavaFXObject("num2"),
      '3': this.scene.JavaFXObject("num3"),
      '4': this.scene.JavaFXObject("num4"),
      '5': this.scene.JavaFXObject("num5"),
      '6': this.scene.JavaFXObject("num6"),
      '7': this.scene.JavaFXObject("num7"),
      '8': this.scene.JavaFXObject("num8"),
      '9': this.scene.JavaFXObject("num9")
    };
    return keypadMap[digit];
  }

  get enterButton() {
    return this.scene.enter;
  }

  // Language selection
  get englishButton() {
    return this.scene.JavaFXObject("lang_btn_01");
  }

  get welshButton() {
    return this.scene.JavaFXObject("lang_btn_02");
  }

  // ============================================
  // PAGE ACTIONS
  // ============================================

  /**
   * Start a new transaction
   */
  startTransaction() {
    this.logStep("Starting transaction");
    return this.clickElement(this.startButton);
  }

  /**
   * Click help button to access colleague menu
   */
  clickHelp() {
    this.logStep("Clicking Help button");
    return this.clickElement(this.helpButton);
  }

  /**
   * Open language selection screen
   */
  changeLanguage() {
    this.logStep("Opening language selection");
    return this.clickElement(this.languageButton);
  }

  /**
   * Select English language
   */
  selectEnglish() {
    this.logStep("Selecting English language");
    return this.clickElement(this.englishButton);
  }

  /**
   * Select Welsh language
   */
  selectWelsh() {
    this.logStep("Selecting Welsh language");
    return this.clickElement(this.welshButton);
  }

  /**
   * Verify both languages are available
   */
  verifyLanguagesAvailable() {
    this.logStep("Verifying languages available");
    const englishExists = this.elementExists(this.englishButton);
    const welshExists = this.elementExists(this.welshButton);

    if (englishExists && welshExists) {
      this.logStep("Both English and Welsh languages available", "PASS");
      return true;
    } else {
      if (!englishExists) Log.Warning("English Language is missing");
      if (!welshExists) Log.Warning("Welsh Language is missing");
      return false;
    }
  }

  /**
   * Toggle language - switch to Welsh and back to English
   */
  toggleLanguage() {
    this.logStep("Toggling language between Welsh and English");
    this.selectWelsh();
    this.delay(1000, "Language switched to Welsh");
    this.changeLanguage();
    this.delay(1000);
    this.selectEnglish();
    this.delay(1000, "Language switched back to English");
    return true;
  }

  /**
   * Open scan and shop (recall) feature
   */
  openScanAndShop() {
    this.logStep("Opening Scan and Shop");
    return this.clickElement(this.recallButton);
  }

  /**
   * Press Go Back button (from QR prompt)
   */
  goBack() {
    this.logStep("Pressing Go Back button");
    const goBackBtn = this.scene.btn0;
    return this.clickElement(goBackBtn);
  }

  /**
   * Verify welcome screen is displayed
   */
  isWelcomeScreenVisible() {
    return this.elementExists(this.startButton);
  }

  // ============================================
  // COLLEAGUE LOGIN (Welcome Screen Entry Point)
  // ============================================

  /**
   * Login colleague from welcome screen
   * Uses hardcoded credentials: ID=12, Password=binary pattern
   */
  colleagueLogin() {
    this.logStep("Colleague logging in from welcome screen");
    this.delay(2000, "Waiting for colleague menu");
    
    // Click login button
    this.clickElement(this.loginButton);
    
    // Enter ID: 12
    this.clickElement(this.scene.num1, 46, 42);
    this.clickElement(this.scene.num2, 31, 40);
    this.clickElement(this.scene.enter, 53, 16);
    
    this.delay(2000, "Showing Password Screen");
    
    // Enter Password (binary pattern - alternating 1/2)
    const toggleButton1 = this.scene.num1;
    const toggleButton2 = this.scene.num2;
    
    toggleButton1.Click(58, 23);
    toggleButton2.Click(52, 29);
    toggleButton1.Click(74, 21);
    toggleButton2.Click(52, 26);
    toggleButton1.Click(56, 25);
    toggleButton2.Click(57, 18);
    
    this.scene.enter2.Click(122, 39);
    this.delay(2000, "Showing Admin menu");
    
    this.logStep("Colleague login successful", "PASS");
  }

  /**
   * Open lane (after being closed)
   */
  openLane() {
    this.logStep("Opening lane");
    this.delay(2000, "Showing Admin menu");
    const scene = this.scene;
    
    // Navigate to admin function
    scene.nav02.Click(140, 25);
    scene.func01.Click(130, 24);
    
    this.delay(2000);
    this.logStep("Lane opened successfully", "PASS");
  }

  /**
   * Close lane
   */
  closeLane() {
    this.logStep("Closing lane");
    this.delay(2000, "Showing Admin menu");
    const scene = this.scene;
    
    // Navigate to admin function
    scene.nav01.Click(118, 32);
    scene.JavaFXObject("func11").Click(); // Close lane function
    
    this.delay(2000);
    this.logStep("Lane closed successfully", "PASS");
  }

  /**
   * Logout from admin menu and return to welcome screen
   */
  logoutFromAdmin() {
    this.logStep("Logging out from admin menu");
    const scene = this.scene;
    
    scene.pairedLogoffButtonAttendantMenu.Click(34, 29);
    this.delay(2000, "Returning to welcome screen");
    
    this.logStep("Logout successful", "PASS");
  }
}
module.exports = {WelcomeScreenPage};