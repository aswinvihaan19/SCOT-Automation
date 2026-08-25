//USEUNIT commonfunctions
Given("the applications are launched and the Lane is opened", function (){
//  TestedApps.RunAll();
//  Delay(180000,"Waiting 3 minutes for lane closed to appear")
Delay(2000,"waiting for colleague menu");
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click();
     // Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click(35, 30);
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
 scene.num1.Click(46, 42);
 scene.num2.Click(31, 40);
 scene.enter.Click(53, 16);
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num1").Click();
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2").Click();
//  Delay(8000,"waiting to press enter")
 // let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
//   scene.enter.Click(53, 16);
//  Delay(2000,"Showing colleague menu")
//  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
//  scene.num9.Click(51, 18);
//  let goodLookingToggleButton = scene.num1;
//  goodLookingToggleButton.Click(96, 20);
//  let goodLookingToggleButton2 = scene.num2;
//  goodLookingToggleButton2.Click(62, 26);
//  let goodLookingToggleButton3 = scene.num0;
//  goodLookingToggleButton3.Click(69, 19);
//  goodLookingToggleButton3.Click(69, 19);
//  goodLookingToggleButton3.Click(69, 19);
//  goodLookingToggleButton3.Click(69, 19);
//  goodLookingToggleButton3.Click(69, 19);
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter2.Click(115, 31);
//  goodLookingToggleButton3 = scene.enter2;
  Delay(2000,"Showing Password Screen")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  goodLookingToggleButton = scene.num1;
  goodLookingToggleButton.Click(58, 23);
  goodLookingToggleButton2 = scene.num2;
  goodLookingToggleButton2.Click(52, 29);
  goodLookingToggleButton.Click(74, 21);
  goodLookingToggleButton2.Click(52, 26);
  goodLookingToggleButton.Click(56, 25);
  goodLookingToggleButton2.Click(57, 18);
  scene.enter2.Click(122, 39);
  Delay(2000,"Showing Admin menu");
//  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
//  scene.backMenu.Click(28, 39, skAlt);
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav02.Click(140, 25);
  scene.func01.Click(130, 24);
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.pairedLogoffButtonAttendantMenu.Click(34, 29);
  Delay(2000,"wait for the start screen")
});
  


Given("the transaction is started", function (){   
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.start.Click();
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").Click();
});

When("an item is added via the keypad", function (){
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.barcodeEntry.Click(83, 35, skAlt);
//  scene.num6.Click(43, 26, skAlt);
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num12.Click(54, 25);
//  scene.num8.Click(71, 24, skAlt);
//  scene.enter3.Click(146, 62, skAlt); 
   enterbarcode();

//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6").Click();
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num1").Click();
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8").Click();
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click();
   
});
  


When("customer navigates to bag selection page", function (){

  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.payNow.Click();
//  scene.btn1.Click(46, 61);
 Delay(3000,"waiting for the payment screen")
});

When("card payment is selected", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.pay2.Click(70, 61);
  Delay(4000,"transaction is getting finished")
});

Then("the order is placed and receipt is printed", function (){
  
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.btn1.Click();
  
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn0").Click();
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.btn0.Click(286, 45, skAlt);
  Delay(5000,"receipt is getting printed")
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen
//  Log.Message("start screen is visible")  
});

Then("the order is placed using coupon by value and receipt is printed", function (){
  //Unable to Click print receipt due UI issue
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn0").Click();
  Delay(6000,"Transaction getting completed")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("backMenu").Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();
  
});

When("gift card payment is selected", function (){
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.pay6.Click(72, 44); 

});


When("payment is made via coupon by value", function (){
  
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
  scene.func03.Click(130, 30);
  scene.num14.Click(62, 25);
  let goodLookingToggleButton = scene.num0;
  goodLookingToggleButton.Click(59, 24);
  goodLookingToggleButton.Click(59, 24);
  scene.enter5.Click(230, 28);  
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
});

When("colleague logs in via payment page", function (){
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
  
});


When("an item with intervention is added via the keypad", function (){
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.barcodeEntry.Click(83, 35, skAlt);
  Delay(2000,"wait")
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2").Click();
//  Delay(2000,"wait")
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num0").Click();
//  Delay(2000,"wait")
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num0").Click();
//  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6").Click();
  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3").Click();
  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num0").Click();
  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2").Click();
  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3").Click();
  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8").Click();
  Delay(2000,"wait")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14.Click();
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num12.Click();
 Delay(4000,"wait for item to get added");
});
  

  
  
  
  
  


When("customer navigates to bag selection page after clearing intervention", function (){
  let scene = Aliases.tpiscan2.stageDnEasyExpressNcNcDnEasyProN.scene;
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("payNow").Click();
  Delay(8000,"waitinggg")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click(39, 41);
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
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
  
  Delay(4000, "wait for approval")    
  
  scene.requestBtn01.Click(116, 30);  
  
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  //scene.num8.Click(63, 51, skAlt);
});
  



When("payment completed for Age item via coupon by value", function (){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
  scene.func03.Click(130, 30);
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14.Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6").Click();
  let goodLookingToggleButton = scene.num0;
  goodLookingToggleButton.Click(59, 24);
  goodLookingToggleButton.Click(59, 24);
  scene.enter5.Click(230, 28);
});

When("colleague voids the transaction in payment page", function (){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func02").Click();
  ImageRepository.VoidTransactionStocklossImage.VoidTransactionStocklossImage.Click();

  
  //Aliases.tpiscan2.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn02.Click(120, 32);
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("requestBtn02").Click(120, 32);
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  //scene.pairedLogoffButtonAttendantMenu.Click(36, 34, skAlt);
});
  

Then("Transaction should be voided", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen
  Log.Message("start screen is visible")
  
});

When("colleague layaways a transaction from payment page", function (){
   Delay(2000,"Showing Admin menu");
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.nav01.Click(); 
//  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
//  scene.nav01.Click(118, 32);
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func09").Click();
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  
});

Then("Transaction should be layawayed", function (){
   Delay(2000,"Waiting for layaway to be completed");
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen
  Log.Message("start screen is visible")
});

When("customer navigates to bag selection page and selects a bag", function (){
   let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.payNow.Click(260, 37);
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn2").Click();
  Delay(5000,"waiting for the payment screen")
});

Given("Customer has his own bag", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("askForBag").Click();
   Delay(8000,"waiting for customer to confirm")
   //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.VisibleOnScreen;
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();
 // Aliases.tpiscan2.stageDnEasyExpressNcNcDnEasyProN.scene.enter.Click(117, 44);
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.Click();
  
  
  
});

When("customer navigates to payment page", function (){
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.payNow.Click(260, 37);
  //**Remove below line**
 scene.btn1.Click(46, 61);
  Delay(5000,"waiting for the payment screen") 
  //**Remove above line**
});


Given("Customer press on the scan and shop", function (){
  Delay(2000,"Showing the scan and shop screen");
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.recall.Click();
  //let scene = Aliases.tpiscan2.stageDnEasyExpressNcNcDnEasyProN.scene;
  //scene.recall.Click(138, 55, skAlt);
 });

When("QR code prompt screen is displayed", function (){
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.VisibleOnScreen;
  
});

Then("customer press on Go back", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.btn0.Click();
  //scene.btn0.Click(252, 44, skAlt);
 //throw new NotImplementedError();
 
 //function to automate send keys function
 });

 
  
  
 
When("an item is added via the keypad using iteration", function (){
let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.barcodeEntry.Click(83, 35, skAlt);  
enterbarcode();
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click();
   Delay(2000,"waiting for the item to be added")
});




Given("customer clicks on Help button", () => {
  
  
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("help").Click();
});

When("colleague logs in", function (){
  Delay(2000,"waiting for colleague menu");
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click();
      let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
 scene.num1.Click(46, 42);
 scene.num2.Click(31, 40);
 scene.enter.Click(53, 16);
 Delay(2000,"Showing Password Screen")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  goodLookingToggleButton = scene.num1;
  goodLookingToggleButton.Click(58, 23);
  goodLookingToggleButton2 = scene.num2;
  goodLookingToggleButton2.Click(52, 29);
  goodLookingToggleButton.Click(74, 21);
  goodLookingToggleButton2.Click(52, 26);
  goodLookingToggleButton.Click(56, 25);
  goodLookingToggleButton2.Click(57, 18);
  scene.enter2.Click(122, 39);
  
});

Then("Colleague confirms on the request", function (){
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.pairedLogoffButtonAttendantMenu.Click();
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen
  Log.Message("start screen is visible")


});

Given("customer clicks on change language option", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("chooseLanguage").Click();

});

When("the languages are displayed", function (){
  
 let EnglishLanguage = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("lang_btn_01");
 let WelshLanguage = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("lang_btn_02");
 if (EnglishLanguage.Exists && WelshLanguage.Exists) {
   Log.Message("Both english and Welsh options are available");
   } else {
     if(!EnglishLanguage.Exists)
     Log.Warning("English Language is missing");
     if(!WelshLanguage.Exists)
     Log.Warning("Welsh Language is missing");
   }
});

Then("change the language to welsh and come back to english", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("lang_btn_02").Click();
//  let startButton = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.start;
//  var recognizedText = TextRecognition.Recognize(startButton).FullText;
//  Log.Message("Recognized text: "+recognizedText);
  
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("chooseLanguage").Click();
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("lang_btn_01").Click();
});

When("the item is added via the picklist", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("cICBtn0").Click();
  
  let scene = Aliases.tpiscan2.stageDnEasyExpressNcNcDnEasyProN.scene;
  let goodLookingToggleButton = scene.scrolledItems.iICBtn_1_1_item;
  goodLookingToggleButton.Click(93, 123);
  goodLookingToggleButton.Click(135, 163);
  scene.num12.Click(74, 32);
  scene.num1.Click(148, 54);
    
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("scrolledItems").JavaFXObject("iICBtn_1_1_item").Click();
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("scrolledItems").JavaFXObject("iICBtn_1_1_item").Click();
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14.Click();
//  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num12.Click();
});
  
Then("colleague prints last transaction receipt", function (){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func10").Click();
  Delay(5000,"receipt is getting printed")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("backMenu").Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();  
});

When("another item is added via the keypad", function (){
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.barcodeEntry.Click(83, 35, skAlt);
   enterbarcode();
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click();
   Delay(2000,"waiting for the items to get added")

});

When("Colleague Voids the item via void entry option", function (){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.func01.Click();
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter2.Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("backMenu").Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();  

});

When("customer removes one of the items from the transaction", function (){

Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("voidSelectedEntry").Click();

Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("yes").Click();

Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();


});


When("Colleague does a qty sale", function (){
Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);  
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func06").Click();
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num5").Click();
//Confirm button
var QtyConfirmbutton=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter5;
if (QtyConfirmbutton.Enabled){
  Log.Error("Qty Confirm button is enabled, but expected to be disabled");
} else {
  Log.Message("Qty Confirm button is disabled as expected")
}
//Delete button
ImageRepository.QtyConfirmbuttonImage.QtyConfirmButtonImage.Click();
//Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("delete").Click();
//Num 6 button
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6").Click();
Delay(2000,"wait for QtyConfirmbutton to be enabled")
if (QtyConfirmbutton.Enabled){
  Log.Message("Qty Confirm button is enabled as expected");
} else {
  Log.Error("Qty Confirm button is Disabled but expected to be Enabled");
}

//QtyConfirmButton
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter5.Click();
//Back and close stepsRequired
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("backMenu").Click();
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();
  
});

When("corrects the price of the item", function (){
  
Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32); 
  
  //Select Price Correction Option
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func05").Click();
 //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();  
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("requestBtn02").Click();






});

When("colleague selects the {arg} option for price correction", function (optionName){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32); 
  
  //Select Price Correction Option
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func05").Click();
  
  clickPriceCorrectionOption(optionName);
  
  //Entering value
   if (optionName !== "Cancel") {
       scene.num14.Click(62, 25);
  let goodLookingToggleButton = scene.num0;
  goodLookingToggleButton.Click(59, 24);
  goodLookingToggleButton.Click(59, 24);
  ImageRepository.PriceCorrectionMenuoptionsImage.PriceCorrectionEnterButtonImage.Click();
  Delay(8000,"Wait for price correction to finish")
   }
  
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);

  
});

When("colleague voids the transaction Choosing {arg} option", function (voidOption){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func02").Click();
 if(ImageRepository.VoidTransactionOptionsImage.GoBackOptionImage.Exists){
   Log.Message("Go Back option is available on screen");
 }
 ClickVoidTransactionOption(voidOption);
 
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
});

When("colleague tries to reprint last transaction receipt", function (){
  Delay(2000,"Showing Admin menu");
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.nav01.Click(118, 32);
  var printLastReceiptButton = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("func10");
  
  if(printLastReceiptButton.disabled){
    Log.Message("Print Last receipt is disabled during the transaction")
    }
    else {
    Log.Error("Print last receipt is enabled which is not expected during transaction");
  }
  
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("backMenu").Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click(); 
  
});

When("customer selects {arg} Bag options", function (bagOptions){
  
  //Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("specialBtn6").Click();
  
  ClickNoOfBagOptions(bagOptions);

  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.payNow.Click();
  
  var goBackButton=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3;
  if(goBackButton.Exists && goBackButton.Enabled ){
    Log.Message("Go Back button is available and enabled")
  } else{
    Log.Error("Go Back Button is not available and not enabled")
  }
  
 
  
});

When("inactivity timeout error occurs and we select {arg}", function (inactivityOption){
  Delay(60000,"Waiting for the inactivity timeout error to pop up")
  InactivityTimeoutOptions(inactivityOption);
});

When("confirms the inactivity timeout error", function (){
  //inactivity Confirm button after colleague logs in
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
});

When("colleague rejects the age restricted item intervention with {arg} option", function (ageRejectionOption){
  //Click finish and pay button
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.payNow.Click(260, 37);
  
  //Colleague logs in
  Delay(2000,"waiting for colleague menu");
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.loginButton.Click();
 scene.num1.Click(46, 42);
 scene.num2.Click(31, 40);
 scene.enter.Click(53, 16);
 Delay(2000,"Showing Password Screen")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  goodLookingToggleButton = scene.num1;
  goodLookingToggleButton.Click(58, 23);
  goodLookingToggleButton2 = scene.num2;
  goodLookingToggleButton2.Click(52, 29);
  goodLookingToggleButton.Click(74, 21);
  goodLookingToggleButton2.Click(52, 26);
  goodLookingToggleButton.Click(56, 25);
  goodLookingToggleButton2.Click(57, 18);
  scene.enter2.Click(122, 39);
  
  ageInterventionRejection(ageRejectionOption);
  
  //Confirm button after selecting rejection optionfor age restricted item intervention
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("voidAllItems").Click();
   
});

When("gift card number {arg} is entered", function (giftCardNumber){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click();
   
  enterGiftCardUsingKeypad(giftCardNumber);

//paywithgiftcard button
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click();

Delay(8000,"Wait for the gift card to be recognized")

});

Then("the order is paid with gift card", function (){
  Delay(2000,"Receipt is being printed")
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen
  Log.Message("start screen is visible")
});

Given("the SCOT is in Welcome Screen", function (){
  
var app = TestedApps;
app.activate();
  Delay(3000,"Waiting for start screen to appear");
  
  if(ImageRepository.StartScreenImage.StartScreenImage.Exists())
  {
    Log.Message("start screen is visible")
  }
  else{
    Log.Error("start screen is not visible")
  }
//  if(Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen)
//  {
//  Log.Message("start screen is visible")
//  }
//  else{
//    Log.Error("SCOT is not in start screen")
//  }
});

When("colleague closes the lane", function (){
  
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.nav02.Click();
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.func01.Click();
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  if(ImageRepository.LaneClosedScreen.LaneClosedScreenImage.Exists()){
    Log.Message("Lane is Closed successfully")
    }
    else {
      Log.Error("Unable to close lane")
    }
  
});

When("colleague opens the lane", function (){
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.nav02.Click();
  ImageRepository.ColleagueMenuLaneOptions.OpenLaneButton.Click();
  Delay(2000,"Waiting for the lane to open")
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.backMenu.Click(28, 39, skAlt);
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
});

Then("the SCOT should be in welcome screen", function (){
  if(Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("start").VisibleOnScreen)
  {
  Log.Message("start screen is visible")
  }
  else{
    Log.Error("SCOT is not in start screen")
  }
});

When("Colleague just confirms the request", function (){
   Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
});

When("an item is added via the keypad {arg} times", function (times) {
    const numberOfTimes = parseInt(times,10);
    for (let i = 0; i < numberOfTimes; i+=1 ) {
    let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
    scene.barcodeEntry.Click(83, 35, skAlt);
    enterbarcode();
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click();
   }
});

When("an item is added via the Picklist {arg} Times", function (param1){  

Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("itemCatalogChoice1").Click();
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("cICBtn0").Click();
//Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("scrolledItems").JavaFXObject("iICBtn_1_1_item").Click()
Aliases.tpiscan2.stageDnEasyExpressNcNcDnEasyProN.scene.scrolledItems.iICBtn_1_1_item.Click(87, 92);
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14.Click();
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter").Click()
  


});

When("an item is added via the keypad with barcode {arg}", function (barcode){
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
 scene.barcodeEntry.Click(83, 35, skAlt);
 enterbarcode(barcode);
 scene.JavaFXObject("enter").Click();
});

When("colleague validates the sales message", function (){
colleagueLogin();
if(
ImageRepository.BlockingAlertMessagesImages.SalesMessageImage.Exists())
{
  Log.Message("Sales Message has been triggered")
  } else
  {
    Log.Message("Sales message is not triggered,Promotion not working")
  }
 
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
  
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  
});


When("an item with barcode {arg} is added via the keypad {arg} times", function (barcode,times){
  for (let i = 0; i < times; i++) {
       let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
       scene.barcodeEntry.Click(83, 35, skAlt);
       enterbarcode(barcode);
       scene.JavaFXObject("enter").Click();
   }
});

When("colleague validates the Qty restriction message", function (){
  if(ImageRepository.BlockingAlertMessagesImages.QtyRestrictionMessageImage.Exists())
  {
    Log.Message("Qty restriction message triggered")
  }else
  {
    Log.Message("Qty restriction message not triggered,Promotion unavailable")
  }
  
  colleagueLogin();
  //Click on confirm button after colleague reads the message
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
  
  //Age Intervention Approve button
 ImageRepository.ageInterventionRejectionImages.ApproveImage.Click();
  
  
  //Close the colleague menu
  scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.pairedLogoffButtonAttendantMenu.Click(49, 37, skAlt);
  
});

When("the item not found blocking alert is triggered", function (){

//Enter barcode button: 
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click();

//Try Again: Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.btn0

enterbarcode("0550");
let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
 scene.JavaFXObject("enter").Click();
colleagueLogin();
if(ImageRepository.BlockingAlertMessagesImages.ItemNotFoundMessageImage.Exists())
{
  Log.Message("Item Not found image validated")
} else
{
Log.Message("Incorrect intervention")
}

ImageRepository.ColleagueMenuImages.BackbuttonImage.Click();


});

When("colleague validates the Red alert message", function (){
  colleagueLogin();
if(
ImageRepository.BlockingAlertMessagesImages.RedAlertMessage.Exists())
{
  Log.Message("Food Red alert Message has been triggered")
  } else
  {
    Log.Message("Food red alert message is not triggered,Red alert not working")
  }
 
  Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
  
});


When("no activity is performed till time out", function (){
  Delay(65000,"Waiting or time out to happen");
});

When("the colleague clears the intervention by selecting restricted supplier", function (){
  colleagueLogin();
  if(ImageRepository.BlockingAlertMessagesImages.BulkRtmInterventionImage.Exists()) 
{
Log.Message("Bulk RTM restriction intervention triggered")
}else 
{
  Log.Message("Incorrect intervention triggered")
}

//selecting restricted supplier
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();

if(ImageRepository.BlockingAlertMessagesImages.BulkRtmRestrictionNotForSaleImage.Exists())
{
  Log.Message("Bulk RTM restriction not for sale message displayed")
} else
{
  Log.Message("Incorrect message displayed")
}

//Click on Confirm button
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();


});

When("the colleague clears the intervention by selecting un-restricted supplier", function (){
  colleagueLogin();
  if(ImageRepository.BlockingAlertMessagesImages.BulkRtmInterventionImage.Exists()) 
{
Log.Message("Bulk RTM restriction intervention triggered")
}else 
{
  Log.Message("Incorrect intervention triggered")
}

//selecting un-restricted supplier
ImageRepository.BlockingAlertMessagesImages.UnRestrictedSupplierImage.Click();


if(ImageRepository.BlockingAlertMessagesImages.BulkRtmRestrictionNotForSaleImage.Exists())
{
  Log.Message("Bulk RTM restriction not for sale message displayed")
} else
{
  Log.Message("Incorrect message displayed")
}

//Click on Confirm button
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.requestBtn01.Click();
  

});

When("Colleague clears the intervention by selecting {arg} with price corrction {arg}", function (Action, price){
   
  if(Action === "Accept")
  {
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("positive").Click();
  }
  else if(Action === "Reject")
  {
    //reject Button
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.enter3.Click()
    colleagueLogin();
    enterPrice(price)
    ImageRepository.PriceCorrectionMenuOptionsImage.PriceCorrectionEnterButtonImage.Click();
    Delay(2000,"Wait for price correction");
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();
  
  }
  
 
  
});

When("Colleague clears the intervention by entering the appropriate price {arg} for the item", function (price){
  colleagueLogin();
  enterPrice(price);
  ImageRepository.PriceCorrectionMenuOptionsImage.PriceCorrectionEnterButtonImage.Click();
    Delay(2000,"Wait for price correction");
    Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();
  
});

When("Colleague clears the intervention by cancelling the prompt for price", function (){
   colleagueLogin();
   ImageRepository.ColleagueMenuImages.BackbuttonImage.Click();
});

When("multiple items are added via the keypad with barcode {arg}", function (multiBarcode){
   
 enterMultiBarcode(multiBarcode);
});

When("the print gift receipt button is enabled", function (){
   
 let giftReceiptButton=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.specialBtn2
 
 aqObject.CheckProperty(giftReceiptButton,"Enabled",cmpEqual,true)
 
});

When("the print gift receipt button is disabled", function (){
   
 let giftReceiptButton=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.specialBtn2
 
 aqObject.CheckProperty(giftReceiptButton,"Enabled",cmpEqual,false)
 
});

When("the colleague clears the intervention by selecting un-restricted supplier for product restricted item", function (){
  colleagueLogin();
  if(ImageRepository.BlockingAlertMessagesImages.productRestrictionAlertMessageImage.Exists()) 
{
Log.Message("Product restriction intervention triggered")
}else 
{
  Log.Message("Incorrect intervention triggered")
}

//selecting un-restricted supplier
ImageRepository.BlockingAlertMessagesImages.productRestrictionUnRestrictedSupplierButtonImage.Click();

Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("pairedLogoffButtonAttendantMenu").Click();

});





When("customer selected print gift receipt button", function (){
 let printGiftReceipt=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.specialBtn2
 
 printGiftReceipt.Click();
});

When("customer selected cancel option in the giftreceipt screen", function (){
  let cancelInPrintGiftReceipt=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("cancel")
cancelInPrintGiftReceipt.Click();
});

When("scanning screen displayed", function (){
   let printGiftReceipt=Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.specialBtn2
   aqObject.CheckProperty(printGiftReceipt,"Enabled",cmpEqual,true)
});
