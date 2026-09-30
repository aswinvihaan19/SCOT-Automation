// Payment Screen Page Object
// Main payment selection and processing screen

class PaymentScreenPage {
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

  inputViaKeypad(inputString, keypadMap) {
    for (let i = 0; i < inputString.length; i++) {
      const character = inputString[i];
      if (keypadMap[character]) {
        this.clickElement(keypadMap[character]);
        this.delay(200);
      } else {
        Log.Warning("Character \"" + character + "\" not found in keypad map");
      }
    }
  }

  logStep(stepName, status = "PASS") {
    Log.Message("[" + status + "] " + stepName);
  }

  // ============================================
  // UI ELEMENT GETTERS - PAYMENT METHODS
  // ============================================

  // Payment method buttons
  get cardPaymentButton() {
    return this.scene.pay2;
  }

  get giftCardPaymentButton() {
    return this.scene.pay6;
  }

  get couponePaymentButton() {
    return this.scene.JavaFXObject("coupon");
  }

  // Keypad for gift card entry
  getGiftCardKeypadButton(digit) {
    const keypadMap = {
      '0': ImageRepository.GiftCardKeypadImages.Keypad0,
      '1': ImageRepository.GiftCardKeypadImages.Keypad1,
      '2': this.scene.JavaFXObject("num2"),
      '3': this.scene.JavaFXObject("num3"),
      '4': this.scene.JavaFXObject("num4"),
      '5': this.scene.num12,
      '6': this.scene.JavaFXObject("num6"),
      '7': this.scene.JavaFXObject("num7"),
      '8': this.scene.JavaFXObject("num8"),
      '9': ImageRepository.GiftCardKeypadImages.Keypad9
    };
    return keypadMap[digit];
  }

  // Coupon entry keypad (numeric)
  getCouponKeypadButton(digit) {
    const keypadMap = {
      '0': this.scene.num0,
      '1': this.scene.num14,
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

  get couponEnterButton() {
    return this.scene.enter5;
  }

  // ============================================
  // UI ELEMENT GETTERS - ADMIN MENU ACCESS
  // ============================================

  get loginButton() {
    return this.scene.loginButton;
  }

  get adminNav01Button() {
    return this.scene.nav01;
  }

  get adminNav02Button() {
    return this.scene.nav02;
  }

  // Admin functions
  getAdminFunction(funcNumber) {
    return this.scene.JavaFXObject(`func${funcNumber.toString().padStart(2, '0')}`);
  }

  // Navigation in admin menu
  get backMenuButton() {
    return this.scene.backMenu;
  }

  get logoffButton() {
    return this.scene.pairedLogoffButtonAttendantMenu;
  }

  // Keypad for admin entries
  getAdminKeypadButton(digit) {
    const keypadMap = {
      '0': this.scene.num0,
      '1': this.scene.num14,
      '2': this.scene.JavaFXObject("num2"),
      '3': this.scene.JavaFXObject("num3"),
      '4': this.scene.JavaFXObject("num4"),
      '5': this.scene.JavaFXObject("num5"),
      '6': this.scene.JavaFXObject("num6"),
      '7': this.scene.JavaFXObject("num7"),
      '8': this.scene.JavaFXObject("num8"),
      '9': this.scene.num9
    };
    return keypadMap[digit];
  }

  get enterButton() {
    //return this.scene.enter;
    return this.scene.JavaFXObject("enter")
  }

  get enter2Button() {
    return this.scene.enter2;
  }

  get requestBtn01() {
    return this.scene.requestBtn01;
  }

  get requestBtn02() {
    return this.scene.requestBtn02;
  }

  // ============================================
  // PAYMENT ACTIONS
  // ============================================

  /**
   * Select card payment
   */
  selectCardPayment() {
    this.logStep("Selecting card payment");
    this.clickElement(this.cardPaymentButton, 70, 61);
    this.delay(4000, "Processing card payment");
    this.logStep("Card payment selected", "PASS");
    return true;
  }

  /**
   * Select gift card payment
   */
  selectGiftCardPayment() {
    this.logStep("Selecting gift card payment");
    this.clickElement(this.giftCardPaymentButton, 72, 44);
    this.delay(2000, "Gift card payment method selected");
    return true;
  }

  /**
   * Enter gift card number
   * @param {string} giftCardNumber - 16-digit gift card number
   */
  enterGiftCardNumber(giftCardNumber) {
    this.logStep(`Entering gift card number: ${giftCardNumber.substring(0, 4)}****`);
    this.clickElement(this.enterButton);
    this.delay(500);

    const keypadMap = this.getGiftCardKeypadButtonMap();

    for (let i = 0; i < giftCardNumber.length; i++) {
      const digit = giftCardNumber.charAt(i);
      if (keypadMap[digit]) {
        this.clickElement(keypadMap[digit]);
        this.delay(200);
      } else {
        Log.Warning(`Invalid digit in gift card: ${digit}`);
      }
    }

    this.clickElement(this.enterButton);
    this.delay(8000, "Waiting for the gift card to be recognized");
    this.logStep("Gift card number entered successfully", "PASS");
    return true;
  }

  /**
   * Select coupon payment
   */
  selectCouponPayment() {
    this.logStep("Selecting coupon payment");
    this.clickElement(this.couponePaymentButton);
    this.delay(2000, "Coupon payment method selected");
    return true;
  }

  /**
   * Enter coupon value
   * @param {string} couponValue - Coupon amount (e.g., "234")
   */
  enterCouponValue(couponValue) {
    this.logStep(`Entering coupon value: £${couponValue}`);

    this.inputViaKeypad(couponValue, this.getCouponKeypadButtonMap());
    this.clickElement(this.couponEnterButton, 230, 28);
    this.delay(1000, "Coupon value entered");

    this.logStep("Coupon value entered successfully", "PASS");
    return true;
  }

  // ============================================
  // COLLEAGUE LOGIN AT PAYMENT SCREEN
  // ============================================

  /**
   * Colleague login from payment screen
   */
  colleagueLoginFromPaymentScreen() {
    this.logStep("Colleague logging in from payment screen");

    this.clickElement(this.loginButton, 39, 41);
    this.delay(1000);

    // Enter ID: 12
    const scene = this.scene;
    scene.num1.Click(46, 42);
    scene.num2.Click(31, 40);
    scene.enter.Click(53, 16);

    this.delay(2000, "Showing Password Screen");

    // Enter Password (binary pattern)
    const toggleButton1 = scene.num1;
    const toggleButton2 = scene.num2;

    toggleButton1.Click(50, 24);
    toggleButton2.Click(57, 22);
    toggleButton1.Click(66, 22);
    toggleButton2.Click(63, 23);
    toggleButton1.Click(55, 23);
    toggleButton2.Click(66, 26);

    scene.enter2.Click(96, 38);
    this.delay(2000, "Colleague logged in successfully");

    this.logStep("Colleague login from payment screen successful", "PASS");
    return true;
  }

  // ============================================
  // ADMIN MENU ACTIONS
  // ============================================

  /**
   * Perform coupon by value payment via admin menu
   */
  performCouponByValuePayment() {
    this.logStep("Performing coupon by value payment via admin menu");
    this.delay(2000, "Showing Admin menu");

    const scene = this.scene;
    scene.nav01.Click(118, 32);
    scene.func03.Click(130, 30); // Coupon function
    scene.num14.Click(62, 25);

    let goodLookingToggleButton = scene.num0;
    goodLookingToggleButton.Click(59, 24);
    goodLookingToggleButton.Click(59, 24);

    scene.enter5.Click(230, 28);
    this.delay(2000, "Coupon payment processed");

    this.clickElement(this.requestBtn01);
    this.delay(1000);

    this.logStep("Coupon by value payment completed", "PASS");
    return true;
  }

  /**
   * Perform coupon by value payment for age-restricted item
   */
  performCouponPaymentForAgeItem() {
    this.logStep("Performing coupon payment for age-restricted item");
    this.delay(2000, "Showing Admin menu");

    const scene = this.scene;
    scene.nav01.Click(118, 32);
    scene.func03.Click(130, 30);
    scene.JavaFXObject("num6").Click();
    
    let goodLookingToggleButton = scene.num0;
    goodLookingToggleButton.Click(59, 24);
    goodLookingToggleButton.Click(59, 24);

    scene.enter5.Click(230, 28);
    this.delay(2000);

    this.logStep("Coupon payment for age item completed", "PASS");
    return true;
  }

  /**
   * Reprint last receipt
   */
  reprintLastReceipt() {
    this.logStep("Reprinting last receipt");
    this.delay(2000, "Showing Admin menu");

    const scene = this.scene;
    scene.nav01.Click(118, 32);
    scene.JavaFXObject("func10").Click();

    this.delay(5000, "Receipt is getting printed");

    this.clickElement(this.backMenuButton, 28, 39, skAlt);
    this.clickElement(this.logoffButton, 49, 37, skAlt);

    this.logStep("Receipt reprinted successfully", "PASS");
    return true;
  }

  /**
   * Check if print last receipt button is enabled
   */
  isPrintLastReceiptEnabled() {
    const printButton = this.scene.JavaFXObject("func10");
    return this.elementIsEnabled(printButton);
  }

  // ============================================
  // COMPLETION ACTIONS
  // ============================================

  /**
   * Confirm payment and complete transaction
   */
  completeTransaction() {
    this.logStep("Completing transaction");
    this.delay(4000, "Transaction processing");
    return true;
  }

  /**
   * Go to receipt screen / start new transaction
   */
  startNewTransaction() {
    this.logStep("Starting new transaction");
    const scene = this.scene;
    scene.btn0.Click();
    this.delay(2000, "Returning to welcome screen");
    return true;
  }

  /**
   * Navigate back from payment
   */
  goBack() {
    this.logStep("Going back from payment screen");
    this.clickElement(this.backMenuButton, 28, 39, skAlt);
    this.delay(1000);
    return true;
  }

  // ============================================
  // HELPER METHODS
  // ============================================

  /**
   * Get gift card keypad map
   */
  getGiftCardKeypadButtonMap() {
    return {
      '0': ImageRepository.GiftCardKeypadImages.Keypad0,
      '1': ImageRepository.GiftCardKeypadImages.Keypad1,
      '2': this.scene.JavaFXObject("num2"),
      '3': this.scene.JavaFXObject("num3"),
      '4': this.scene.JavaFXObject("num4"),
      '5': this.scene.num12,
      '6': this.scene.JavaFXObject("num6"),
      '7': this.scene.JavaFXObject("num7"),
      '8': this.scene.JavaFXObject("num8"),
      '9': ImageRepository.GiftCardKeypadImages.Keypad9
    };
  }

  /**
   * Get coupon keypad map
   */
  getCouponKeypadButtonMap() {
    return {
      '0': this.scene.num0,
      '1': this.scene.num14,
      '2': this.scene.JavaFXObject("num2"),
      '3': this.scene.JavaFXObject("num3"),
      '4': this.scene.JavaFXObject("num4"),
      '5': this.scene.JavaFXObject("num5"),
      '6': this.scene.JavaFXObject("num6"),
      '7': this.scene.JavaFXObject("num7"),
      '8': this.scene.JavaFXObject("num8"),
      '9': this.scene.JavaFXObject("num9")
    };
  }

  /**
   * Verify payment screen is displayed
   */
  isPaymentScreenVisible() {
    return this.elementExists(this.cardPaymentButton);
  }
}
module.exports={PaymentScreenPage};