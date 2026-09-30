// Scanning Screen Page Object
// Main screen where items are scanned/added to transaction

class ScanningScreenPage {
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
  // UI ELEMENT GETTERS
  // ============================================

  // Barcode entry field
  get barcodeEntryField() {
    return this.scene.barcodeEntry;
  }

  // Numeric keypad
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
    return this.scene.JavaFXObject("enter");
  }

  // Navigation buttons
  get payNowButton() {
    return this.scene.payNow;
  }

  get continueButton() {
    return this.scene.enter3;
  }

  get goBackButton() {
    return this.scene.btn0;
  }

  // Help and bag buttons
  get helpButton() {
    return this.scene.JavaFXObject("help");
  }

  get bagSelectionButton() {
    return this.scene.JavaFXObject("specialBtn6");
  }

  // Confirmation buttons
  get confirmButton() {
    return this.scene.JavaFXObject("yes");
  }

  get cancelButton() {
    return this.scene.JavaFXObject("no");
  }

  // Item display area
  get itemDisplayArea() {
    return this.scene.JavaFXObject("itemsList");
  }

  // Price entry keypad
  getPriceKeypadButton(digit) {
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

  // Picklist elements
  get picklistConfirmButton() {
    return this.scene.enter3;
  }

  getPicklistItem(index) {
    return this.scene.JavaFXObject("cICBtn" + index);
  }

  get scrolledItems() {
    return this.scene.scrolledItems;
  }

  // Delete/void buttons
  get deleteButton() {
    return this.scene.JavaFXObject("delete");
  }

  get voidButton() {
    return this.scene.JavaFXObject("voidSelectedEntry");
  }

  // Quantity display
  get quantityDisplay() {
    return this.scene.JavaFXObject("quantity");
  }

  // Transaction total
  get totalDisplay() {
    return this.scene.JavaFXObject("total");
  }

  // ============================================
  // PAGE ACTIONS - ITEM SCANNING
  // ============================================

  /**
   * Add item via barcode keypad
   * @param {string} barcode - Barcode number to enter
   */
  addItemViaBarcode(barcode) {
    this.logStep(`Adding item with barcode: ${barcode}`);
    
    // Click barcode entry field to focus
    this.clickElement(this.barcodeEntryField, 83, 35, skAlt);
    this.delay(500);
    
    // Enter barcode digit by digit
    this.inputViaKeypad(barcode, this.getKeypadButtonMap());
    
    // Press enter to confirm
    this.clickElement(this.enterButton);
    this.delay(2000, "Item added to transaction");
    
    this.logStep(`Barcode ${barcode} entered successfully`, "PASS");
    return true;
  }

  /**
   * Add multiple items via barcodes (comma-separated)
   * @param {string} multiBarcode - Comma-separated barcodes (e.g., "200,100,300")
   */
  addMultipleItems(multiBarcode) {
    this.logStep(`Adding multiple items: ${multiBarcode}`);
    
    const barcodeList = multiBarcode.split(",");
    
    for (let j = 0; j < barcodeList.length; j++) {
      const barcode = barcodeList[j].trim();
      this.clickElement(this.barcodeEntryField, 83, 35, skAlt);
      
      // Enter barcode
      this.inputViaKeypad(barcode, this.getKeypadButtonMap());
      
      // Press enter to confirm
      this.clickElement(this.enterButton);
      this.delay(1000, `Item ${j + 1} added`);
    }
    
    this.logStep(`Multiple items added successfully`, "PASS");
    return true;
  }

  /**
   * Add item via picklist (when barcode not available)
   * Navigates to product list and selects item
   */
  addItemViaPicklist() {
    this.logStep("Adding item via picklist");
    
    // Click to open picklist
    this.clickElement(this.continueButton);
    this.delay(500);
    
    // Click first icon button to see categories/products
    this.clickElement(this.getPicklistItem(0));
    this.delay(500);
    
    // Navigate through scrolled items
    const firstItem = this.scene.scrolledItems.iICBtn_1_1_item;
    
    if (this.elementExists(firstItem)) {
      // First click to select
      this.clickElement(firstItem, 93, 123);
      this.delay(500);
      
      // Second click to confirm selection
      this.clickElement(firstItem, 135, 163);
      this.delay(500);
      
      // Confirm quantity (default 1)
      this.clickElement(this.scene.num12, 74, 32);
      this.delay(500);
      
      // Confirm item
      this.clickElement(this.scene.num1, 148, 54);
      this.delay(1000, "Item from picklist added");
      
      this.logStep("Item added via picklist successfully", "PASS");
      return true;
    } else {
      this.logStep("Picklist item not found", "FAIL");
      return false;
    }
  }

  /**
   * Remove item by customer (use void button)
   */
  removeItemAsCustomer() {
    this.logStep("Customer removing item from transaction");
    
    // Import image-based button
    ImageRepository.CustomerVoidEntryButton.CustomerVoidItemButtonImage.Click();
    this.delay(500);
    
    // Confirm removal
    this.clickElement(this.confirmButton);
    this.delay(500);
    
    // Continue
    this.clickElement(this.continueButton);
    this.delay(1000, "Item removed from transaction");
    
    this.logStep("Item removed successfully", "PASS");
    return true;
  }

  // ============================================
  // PAGE ACTIONS - PRICE ENTRY
  // ============================================

  /**
   * Enter price manually (for items without barcode)
   * @param {string} price - Price to enter (e.g., "10.50")
   */
  enterPrice(price) {
    this.logStep(`Entering price: £${price}`);
    
    this.inputViaKeypad(price, this.getPriceKeypadButtonMap());
    this.delay(500);
    
    this.logStep(`Price £${price} entered successfully`, "PASS");
    return true;
  }

  // ============================================
  // PAGE ACTIONS - NAVIGATION
  // ============================================

  /**
   * Proceed to payment screen
   */
  proceedToPayment() {
    this.logStep("Proceeding to payment");
    this.clickElement(this.payNowButton);
    this.delay(3000, "Loading payment screen");
    return true;
  }

  /**
   * Proceed to bag selection
   */
  proceedToBagSelection() {
    this.logStep("Proceeding to bag selection");
    this.clickElement(this.bagSelectionButton);
    this.delay(2000, "Loading bag selection screen");
    return true;
  }

  /**
   * Go back to previous screen
   */
  goBack() {
    this.logStep("Going back to previous screen");
    return this.clickElement(this.goBackButton);
  }

  /**
   * Click continue
   */
  clickContinue() {
    this.logStep("Clicking continue");
    return this.clickElement(this.continueButton);
  }

  // ============================================
  // HELPER METHODS
  // ============================================

  /**
   * Get keypad button map for barcode entry
   */
  getKeypadButtonMap() {
    return {
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
  }

  /**
   * Get keypad button map for price entry
   */
  getPriceKeypadButtonMap() {
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
      '9': this.scene.num9,
      '.': this.scene.JavaFXObject("decimal")
    };
  }

  /**
   * Verify item count on screen
   */
  getItemCount() {
    return this.scene.JavaFXObject("itemCount").Text;
  }

  /**
   * Verify transaction total
   */
  getTransactionTotal() {
    return this.scene.JavaFXObject("total").Text;
  }
}
module.exports={ScanningScreenPage};