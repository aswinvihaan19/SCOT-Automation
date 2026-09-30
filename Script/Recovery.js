//USEUNIT commonfunctions
var ConsecutiveFailures = 0;
var FAILURE_THRESHOLD = 2;
 
function BringAppToFront()
{
  try
  {
    var p = Sys.Process("tpiscan");
    if (p.Exists)
    {
      var w = p.Window(0);
      w.Restore();
      w.Maximize();
      w.SetFocus();
    }
  }
  catch (e) {}
}
 
 
function HandleFailure()
{
  ConsecutiveFailures++;
  Log.Warning("Failure #" + ConsecutiveFailures);
  if(ConsecutiveFailures < FAILURE_THRESHOLD)
  {
    if (SoftRecover())
    {ConsecutiveFailures = 0;
    Log.Warning("Soft recovery done, marking tes failed but continuing");
    Log.Error("Current step failed after recovery");
    return;
    }
  }
HardRecover();
ConsecutiveFailures = 0;
Log.Error("Hard recovery done , marking test failed but continuing")
return;
}
 
 
function SoftRecover()
{
  Log.Message("Trying soft recovery");
  if(!TryVoidTransaction())
  return false;
  return true;
  }
 
  
  function TryVoidTransaction()
  {
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click(39, 41);
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.num1.Click(46, 42);
  scene.num2.Click(31, 40);
  scene.enter.Click(53, 16);
  Delay(2000,"Showing Password Screen")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  let goodLookingToggleButton = scene.num1;
  goodLookingToggleButton.Click(50, 24);
  let goodLookingToggleButton2 = scene.num2;
  goodLookingToggleButton2.Click(57, 22);
  goodLookingToggleButton.Click(66, 22);
  goodLookingToggleButton2.Click(63, 23);
  goodLookingToggleButton.Click(55, 23);
  goodLookingToggleButton2.Click(66, 26);
  scene.enter2.Click(96, 38);
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func02").Click();
if(ImageRepository.VoidTransactionOptionsImage.GoBackOptionImage.Exists){
   Log.Message("Go Back option is available on screen");
}
ClickVoidTransactionOption("Changed their mind/Price Enquiry");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  Log.Message("transaction has been voided");
return WaitForStartScreen();
}
 
function HardRecover()
{
  Log.Warning("Soft Recovery failed,Moving to hard recovery")
  try {
  Sys.Process("tpiscan").Terminate();
  } catch (e){}
  Delay(3000);
  TestedApps.shell.Run();
  EnsureStartScreen();
  }

  function ColleagueLogin()
  {
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click(39, 41);
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.num1.Click(46, 42);
  scene.num2.Click(31, 40);
  scene.enter.Click(53, 16);
  Delay(2000,"Showing Password Screen")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  let goodLookingToggleButton = scene.num1;
  goodLookingToggleButton.Click(50, 24);
  let goodLookingToggleButton2 = scene.num2;
  goodLookingToggleButton2.Click(57, 22);
  goodLookingToggleButton.Click(66, 22);
  goodLookingToggleButton2.Click(63, 23);
  goodLookingToggleButton.Click(55, 23);
  goodLookingToggleButton2.Click(66, 26);
  scene.enter2.Click(96, 38);
  Delay(2000,"Showing Admin menu");
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.nav02.Click();
  ImageRepository.ColleagueMenuLaneOptions.OpenLaneButton.Click();
  Delay(2000,"Waiting for the lane to open")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  }
 
 
  function WaitForStartScreen()
  {
    return Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").WaitProperty("VisibleOnScreen",true,15000);
  }
  function WaitForLoginScreen(timeoutMs)
  {
  var start = aqDateTime.Now();
  while (aqDateTime.TimeInterval(aqDateTime.Now(),start) <timeoutMs)
  {
    try
    {
      if (Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Exists)
      return true
      }
      catch (e) {}
      Delay(2000);
  }
  return false;
  }
  function EnsureStartScreen()
  {
    BringAppToFront();
    if (WaitForStartScreen())
    return true;
    if (WaitForLoginScreen(180000))
    {
      ColleagueLogin();
      return WaitForStartScreen()
    }
    return false
  }
  function EnsureAppIsRunning()
  {
    if (!Sys.Process("tpiscan").Exists)
    {
    Log.Message("App not Running -> Starting via shell.bat");
    TestedApps.shell.Run();
    }
    Delay(2000);
  }

 
  function ResetFailures()
  {
    ConsecutiveFailures = 0;
  }
 
function EventHandler_OnLogError(Sender, LogParams)
{
  Recovery.HandleFailure();
  LogParams.Locked = true;
}
 
function EventHandler_OnStartTest(Sender)
{
  ResetFailures();
  EnsureAppIsRunning()
}