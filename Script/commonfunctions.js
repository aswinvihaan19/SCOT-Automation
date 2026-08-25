// function enterbarcode()
// {
//   var inputstring = '200';
//   
// var keymapping_enterbarcode= {
// '0':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num0"),
// '1':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num1"),
// '2':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2"),
// '3': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3"),
// '4':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4"),
// '5': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num5"),
// '6':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6"),
// '7':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7"),
// '8':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8"),
// '9':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num9")
// };
// //iterate through keys
// for (var i=0; i<inputstring.length; i++)
// {
// var character =inputstring[i];
// if (keymapping_enterbarcode[character])
// {
//   //clicking corrrsponding button to the current character
//   keymapping_enterbarcode[character].click();
// }
// }
// }

 function entercouponbyvalue()
 {
   var inputstring = '234';
   
 var keymapping_entercouponbyvalue= {
 '0':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num0,
 '1':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14,
 '2':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2"),
 '3': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3"),
 '4':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4"),
 '5': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num5"),
 '6':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6"),
 '7':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7"),
 '8':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8"),
 '9':Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num9")
 };
 //iterate through keys
 for (var i=0; i<inputstring.length; i++)
 {
 var character =inputstring[i];
 if (keymapping_enterbarcode[character])
 {
   //clicking corrrsponding button to the current character
   keymapping_enterbarcode[character].click();
 }
 }
 }

 
 //price correction keypad:
 
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2")
 
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num9
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num0
 Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("enter")
 
 
  

 
 function clickPriceCorrectionOption(optionName) {
   var scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
   var button;
   // Map option names to their Aliases
   var optionMap = {
       "Ticketing Error": scene.requestBtn01,
       "Outlet reduction": ImageRepository.PriceCorrectionMenuOptionsImage.OutletReductionOptionImage,
       "Manager's Reduction": ImageRepository.PriceCorrectionMenuOptionsImage.ManagersReductionOptionImage,
       "Soiled and Damaged": ImageRepository.PriceCorrectionMenuOptionsImage.SoiledAndDamagedOptionImage,
       "Customer Reservation": ImageRepository.PriceCorrectionMenuOptionsImage.CustomerReservationOptionImage,
       "Food Discount": ImageRepository.PriceCorrectionMenuOptionsImage.FoodDiscountOptionImage,
       "ISA Order": ImageRepository.PriceCorrectionMenuOptionsImage.ISAorderOptionImage,
       "Cancel": ImageRepository.PriceCorrectionMenuOptionsImage.PriceCorrectionCancelOptionImage
   };
   button = optionMap[optionName];
   if (button != null) {
       button.Click();
       Log.Message("Clicked on option: " + optionName);
   } else {
       Log.Error("Option not found: " + optionName);
   }
}
 
 
 
 
 
 function ClickVoidTransactionOption(voidOption) {
   
 
 var button;
 var voidOptionMap = {
   "Go back" : ImageRepository.VoidTransactionOptionsImage.GoBackOptionImage,
   "Changed their mind/Price Enquiry" : ImageRepository.VoidTransactionOptionsImage.ChangedTheirMindOptionImage,
   "Functionality not available in SCOTs" : ImageRepository.VoidTransactionOptionsImage.FunctionalityNotAvailableOptionImage,
   "Payment Failed" : ImageRepository.VoidTransactionOptionsImage.PaymentrFailedOptionImage,
   "Walk off (items left behind)" : ImageRepository.VoidTransactionOptionsImage.WalkOffItemsLeftBehindOptionImage,
   "Walk off (Stock Loss)" : ImageRepository.VoidTransactionOptionsImage.WalkOffStockLossOptionImage
 };
 button = voidOptionMap[voidOption];
   if (button != null) {
       button.Click();
       Log.Message("Clicked on option: " + voidOption);
   } else {
       Log.Error("Option not found: " + voidOption);
   }
 }
 
 function ClickNoOfBagOptions(bagOptions){
   
 var button;
 var bagOptionMap = {
   
    "No Bag": Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.btn1,
    "One Bag": Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn2") ,
    "Two Bags":Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn3") ,
    "Three Bags": Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn4"),
    "Four Bags":Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn5"),
    "Five Bags":Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("btn6")
 
 };
 
 button = bagOptionMap[bagOptions];
   if (button != null) {
       button.Click();
       Log.Message("Clicked on option: " + bagOptions);
   } else {
       Log.Error("Option not found: " + bagOptions);
   }
 
 }

 function InactivityTimeoutOptions(inactivityOption){
   
 var button;
 var inactivityOptionMap = {
   
    "Yes": Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("everythingIsFine"),
    "No": Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("forceInactivity")
 };
 
 button = inactivityOptionMap[inactivityOption];
   if (button != null) {
       button.Click();
       Log.Message("Clicked on option: " + inactivityOption);
   } else {
       Log.Error("Option not found: " + inactivityOption);
   }
 
 }
 
 
 function ageInterventionRejection(ageRejectionOption){
   
 var button;
 var ageRejectionOptionMap = {
   
    "Do not approve,No ID": ImageRepository.ageInterventionRejectionImages.NoIDRejectionImage,
    "Do not approve,Under Age": ImageRepository.ageInterventionRejectionImages.UnderAgeRejectionImage,
    "Do not approve,Intoxicated" : ImageRepository.ageInterventionRejectionImages.IntoxicatedRejectionImage
 };
 
 button = ageRejectionOptionMap[ageRejectionOption];
   if (button != null) {
       button.Click();
       Log.Message("Clicked on option: " + ageRejectionOption);
   } else {
       Log.Error("Option not found: " + ageRejectionOption);
   }
 
 }
 
 function enterGiftCardUsingKeypad(giftCardNumber) {
 var keypad = {
   "0": function () { ImageRepository.GiftCardKeypadImages.Keypad0.Click(); },
   "1": function () { ImageRepository.GiftCardKeypadImages.Keypad1.Click(); },
   "2": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2").Click(); },
   "3": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3").Click(); },
   "4": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4").Click(); },
   "5": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num12.Click(); },
   "6": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6").Click(); },
   "7": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7").Click(); },
   "8": function () { Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8").Click(); },
   "9": function () { ImageRepository.GiftCardKeypadImages.Keypad9.Click(); }

//   0-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num0
//   1-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14
//   2-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2")
//   3-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3")
//   4-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4")
//   5-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num12
//   6-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6")
//   7-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7")
//   8-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8")
//   9-Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num9
   
   
   
   
   
    
 };
 for (var i = 0; i < giftCardNumber.length; i++) {
   var digit = giftCardNumber.charAt(i);
   keypad[digit]();   // ? looks and feels like "digit ? click"
   Delay(200);
 }
}

function enterbarcode(barcode)
{
 var keymapping_enterbarcode = {
   '0': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num0"),
   '1': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num1"),
   '2': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2"),
   '3': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3"),
   '4': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4"),
   '5': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num5"),
   '6': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6"),
   '7': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7"),
   '8': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8"),
   '9': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num9")
 };
 for (var i = 0; i < barcode.length; i++) {
   var character = barcode[i];
   if (keymapping_enterbarcode[character]) {
     keymapping_enterbarcode[character].Click();
   }
 }
}

function colleagueLogin() {
  
 Delay(2000,"waiting for colleague login");
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
};

function enterPrice(price)
{
 var keymapping_enterPrice = {
   '0': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num0,
   '1': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num14,
   '2': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2"),
   '3': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3"),
   '4': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4"),
   '5': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num5"),
   '6': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6"),
   '7': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7"),
   '8': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8"),
   '9': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.num9
 };
 for (var i = 0; i < price.length; i++) {
   var character = price[i];
   if (keymapping_enterPrice[character]) {
     keymapping_enterPrice[character].Click();
   }
 }
}


function enterMultiBarcode(multiBarcode)
{
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  var barcodeList = multiBarcode.split(",");
  for (var j=0; j<barcodeList.length; j++)
  { 
  
 scene.barcodeEntry.Click(83, 35, skAlt);
  var multiBarcodeSplit = barcodeList[j].trim();
 var keymapping_enterMultiBarcode = {
   '0': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num0"),
   '1': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num1"),
   '2': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num2"),
   '3': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num3"),
   '4': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num4"),
   '5': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num5"),
   '6': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num6"),
   '7': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num7"),
   '8': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num8"),
   '9': Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.JavaFXObject("num9")
 };
 for (var i = 0; i < multiBarcodeSplit.length; i++) {
   var character = multiBarcodeSplit[i];
   if (keymapping_enterMultiBarcode[character]) {
     keymapping_enterMultiBarcode[character].Click();
   }
   
 }
 //let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
 scene.JavaFXObject("enter").Click();
 Delay(1000);
}
}