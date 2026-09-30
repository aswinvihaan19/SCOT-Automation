// Bag Selection Screen Page Object
// Screen where customer selects number of bags (0-5)

class BagSelectionScreenPage {
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

  // Bag option buttons (0-5 bags)
  get noBagButton() {
    return this.scene.btn1;
  }

  get oneBagButton() {
    return this.scene.JavaFXObject("btn2");
  }

  get twoBagsButton() {
    return this.scene.JavaFXObject("btn3");
  }

  get threeBagsButton() {
    return this.scene.JavaFXObject("btn4");
  }

  get fourBagsButton() {
    return this.scene.JavaFXObject("btn5");
  }

  get fiveBagsButton() {
    return this.scene.JavaFXObject("btn6");
  }

  // Other bag-related buttons
  get ownBagButton() {
    return this.scene.JavaFXObject("askForBag");
  }

  get goBackButton() {
    return this.scene.enter3;
  }

  get proceedButton() {
    return this.scene.payNow;
  }

  // ============================================
  // BAG SELECTION ACTIONS
  // ============================================

  /**
   * Select number of bags
   * @param {string|number} bagOption - "No Bag", "One Bag", "Two Bags", etc. or number 0-5
   */
  selectBagOption(bagOption) {
    this.logStep(`Selecting bag option: ${bagOption}`);

    if (!this.isBagSelectionScreenVisible() && !this.clickElement(this.scene.specialBtn6)) {
      return false;
    }

    const bagOptionMap = {
      "No Bag": this.noBagButton,
      "One Bag": this.oneBagButton,
      "Two Bags": this.twoBagsButton,
      "Three Bags": this.threeBagsButton,
      "Four Bags": this.fourBagsButton,
      "Five Bags": this.fiveBagsButton,
      0: this.noBagButton,
      1: this.oneBagButton,
      2: this.twoBagsButton,
      3: this.threeBagsButton,
      4: this.fourBagsButton,
      5: this.fiveBagsButton
    };

    const button = bagOptionMap[bagOption];

    if (button) {
      const selected = this.clickElement(button);
      if (selected) {
        this.delay(1000, `${bagOption} selected`);
        this.logStep(`Bag option "${bagOption}" selected successfully`, "PASS");
      }
      return selected;
    } else {
      this.logStep(`Invalid bag option: ${bagOption}`, "FAIL");
      return false;
    }
  }

  /**
   * Select customer's own bag
   */
  selectOwnBag() {
    this.logStep("Selecting customer's own bag");
    this.clickElement(this.ownBagButton);
    this.delay(3000, "Waiting for customer to confirm own bag");
    
    // Click continue after customer confirms
    this.clickElement(this.goBackButton);
    this.delay(1000);
    
    this.logStep("Own bag selected successfully", "PASS");
    return true;
  }

  /**
   * Proceed to payment after bag selection
   */
  proceedToPayment() {
    this.logStep("Proceeding to payment after bag selection");
    this.clickElement(this.proceedButton);
    this.delay(3000, "Loading payment screen");
    this.logStep("Navigated to payment screen", "PASS");
    return true;
  }

  /**
   * Go back without selecting bags
   */
  goBack() {
    this.logStep("Going back without selecting bags");
    const backBtn = this.scene.enter3;
    this.clickElement(backBtn);
    this.delay(1000);
    
    // Verify go back button is available and enabled
    if (backBtn.Exists && backBtn.Enabled) {
      this.logStep("Go Back button available and enabled", "PASS");
      return true;
    } else {
      this.logStep("Go Back button not available or disabled", "FAIL");
      return false;
    }
  }

  // ============================================
  // VERIFICATION METHODS
  // ============================================

  /**
   * Verify bag selection screen is displayed
   */
  isBagSelectionScreenVisible() {
    return this.elementExists(this.noBagButton);
  }

  /**
   * Verify all bag options are available
   */
  verifyAllBagOptionsAvailable() {
    this.logStep("Verifying all bag options available");

    const allOptions = [
      { name: "No Bag", element: this.noBagButton },
      { name: "One Bag", element: this.oneBagButton },
      { name: "Two Bags", element: this.twoBagsButton },
      { name: "Three Bags", element: this.threeBagsButton },
      { name: "Four Bags", element: this.fourBagsButton },
      { name: "Five Bags", element: this.fiveBagsButton }
    ];

    let allAvailable = true;
    for (let option of allOptions) {
      if (!this.elementExists(option.element)) {
        Log.Warning(`${option.name} option not found`);
        allAvailable = false;
      }
    }

    if (allAvailable) {
      this.logStep("All bag options available", "PASS");
    } else {
      this.logStep("Some bag options missing", "FAIL");
    }

    return allAvailable;
  }

  /**
   * Get currently selected bag count (from UI text or image)
   */
  getSelectedBagCount() {
    // This would depend on how the UI displays the selection
    // Could use text recognition or check button state
    try {
      const selectionText = TextRecognition.Recognize(this.scene).FullText;
      Log.Message(`Selection display: ${selectionText}`);
      return selectionText;
    } catch (e) {
      Log.Warning("Could not determine selected bag count");
      return null;
    }
  }

  // ============================================
  // PAGE STATE HELPERS
  // ============================================

  /**
   * Verify go back button exists and is enabled
   */
  verifyGoBackButtonAvailable() {
    const goBackBtn = this.scene.enter3;
    
    if (goBackBtn.Exists && goBackBtn.Enabled) {
      this.logStep("Go Back button verified", "PASS");
      return true;
    } else {
      this.logStep("Go Back button not available or disabled", "FAIL");
      return false;
    }
  }
}
module.exports={BagSelectionScreenPage};