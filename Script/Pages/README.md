# Page Object Model (POM) - SCOT Automation Framework

## Overview

This directory contains the Page Object Model implementation for the SCOT (Self-Checkout) automation framework. The POM pattern provides a reusable, maintainable abstraction of the application's UI pages/screens.

## Project Structure

```
Pages/
├── BasePage.js                  # Base class for all page objects
├── WelcomeScreenPage.js         # Welcome/Start screen
├── ScanningScreenPage.js        # Item scanning/addition screen
├── BagSelectionScreenPage.js    # Bag selection screen
├── PaymentScreenPage.js         # Payment selection and processing
├── InterventionScreenPage.js    # Intervention alerts (TODO)
├── AdminMenuPage.js             # Colleague admin menu (TODO)
└── README.md                    # This file
```

## Page Classes

### 1. BasePage.js
**Base class for all page objects**

Contains common functionality shared across all pages:

#### Methods
- `delay(ms, message)` - Wait with optional logging
- `elementExists(element)` - Check if element exists
- `elementIsEnabled(element)` - Check if element is enabled
- `clickElement(element, x, y, modifiers)` - Click with optional coordinates
- `verifyElementText(element, expectedText)` - Verify element text via OCR
- `inputViaKeypad(inputString, keypadMap)` - Generic keypad input
- `logStep(stepName, status)` - Structured logging

#### Usage
```javascript
class CustomPage extends BasePage {
  constructor() {
    super(); // Initializes this.scene
  }
}
```

---

### 2. WelcomeScreenPage.js
**Welcome/Start screen - Main entry point**

Entry screen where users start transactions or access colleague menu.

#### Key Elements
- **startButton** - Begin transaction
- **helpButton** - Access colleague menu
- **loginButton** - Colleague login
- **languageButton** - Language selection
- **recallButton** - Scan and shop feature

#### Main Methods
- `startTransaction()` - Start new transaction
- `clickHelp()` - Open colleague menu
- `colleagueLogin()` - Login with hardcoded credentials (ID:12)
- `changeLanguage()` - Open language selection
- `toggleLanguage()` - Switch between English/Welsh
- `openScanAndShop()` - Access recall feature
- `openLane()` - Open closed lane
- `closeLane()` - Close lane
- `logoutFromAdmin()` - Return to welcome screen

#### Usage Example
```javascript
const welcomeScreen = new WelcomeScreenPage();
welcomeScreen.startTransaction();
welcomeScreen.delay(2000);
```

---

### 3. ScanningScreenPage.js
**Item scanning/addition screen**

Main transaction screen where items are scanned, removed, or prices entered.

#### Key Elements
- **barcodeEntryField** - Barcode input area
- **payNowButton** - Proceed to payment
- **bagSelectionButton** - Open bag options
- **continueButton** - Confirm/continue action
- **keypad (0-9)** - Numeric entry
- **picklistButtons** - Product selection
- **itemDisplayArea** - Item list

#### Main Methods
- `addItemViaBarcode(barcode)` - Scan single item
- `addMultipleItems(multiBarcode)` - Scan multiple items (comma-separated)
- `addItemViaPicklist()` - Select from product list
- `removeItemAsCustomer()` - Remove item from transaction
- `enterPrice(price)` - Manual price entry
- `proceedToPayment()` - Go to payment screen
- `proceedToBagSelection()` - Go to bag screen
- `getItemCount()` - Get current item count
- `getTransactionTotal()` - Get total amount

#### Usage Example
```javascript
const scanningScreen = new ScanningScreenPage();
scanningScreen.addItemViaBarcode("200");
scanningScreen.proceedToPayment();
```

---

### 4. BagSelectionScreenPage.js
**Bag selection screen**

Screen where customers select number of bags (0-5) or use own bag.

#### Key Elements
- **noBagButton** to **fiveBagsButton** - Bag count options (0-5)
- **ownBagButton** - Customer's own bag
- **proceedButton** - Continue to payment

#### Main Methods
- `selectBagOption(bagOption)` - Select number of bags
  - Accepts: "No Bag", "One Bag", ..., "Five Bags" or 0-5
- `selectOwnBag()` - Use customer's own bag
- `proceedToPayment()` - Continue to payment
- `verifyAllBagOptionsAvailable()` - Validate all options exist
- `verifyGoBackButtonAvailable()` - Check back button state
- `getSelectedBagCount()` - Get selected amount

#### Usage Example
```javascript
const bagScreen = new BagSelectionScreenPage();
bagScreen.selectBagOption("Two Bags");
bagScreen.proceedToPayment();
```

---

### 5. PaymentScreenPage.js
**Payment selection and processing screen**

Main payment screen with payment method selection and admin functions.

#### Key Elements
- **cardPaymentButton** - Card payment option
- **giftCardPaymentButton** - Gift card payment
- **couponPaymentButton** - Coupon/discount payment
- **loginButton** - Colleague login
- **adminNav01, adminNav02** - Admin menu navigation
- **func01-func10** - Admin function buttons

#### Main Methods

**Payment Methods:**
- `selectCardPayment()` - Process card payment
- `selectGiftCardPayment()` - Process gift card
- `enterGiftCardNumber(giftCardNumber)` - Enter 16-digit card number
- `selectCouponPayment()` - Use coupon
- `enterCouponValue(couponValue)` - Enter coupon amount

**Colleague Operations:**
- `colleagueLoginFromPaymentScreen()` - Login at payment screen
- `performCouponByValuePayment()` - Process coupon via admin
- `performCouponPaymentForAgeItem()` - Coupon for age-restricted items
- `reprintLastReceipt()` - Reprint previous receipt
- `isPrintLastReceiptEnabled()` - Check print button state

**Navigation:**
- `completeTransaction()` - Finish payment
- `startNewTransaction()` - Return to start screen
- `goBack()` - Return to previous screen

#### Usage Example
```javascript
const paymentScreen = new PaymentScreenPage();
paymentScreen.selectCardPayment();
paymentScreen.completeTransaction();
```

---

## Pattern: Page Object Model

### Benefits
1. **Maintainability** - UI changes only require updates in page objects
2. **Reusability** - Common elements and actions in one place
3. **Readability** - Clear, descriptive method names
4. **Scalability** - Easy to add new pages
5. **Separation of Concerns** - Tests focus on behavior, not implementation

### Structure
```javascript
class PageName extends BasePage {
  constructor() {
    super();
  }

  // UI Elements
  get elementName() {
    return this.scene.element;
  }

  // Actions
  actionName() {
    this.logStep("Action description");
    // Implementation
    return true/false;
  }

  // Verifications
  verifyState() {
    // Assertion logic
  }
}
```

---

## Integration with Step Definitions

### Before (Direct UI Access)
```javascript
When("an item is added via the keypad with barcode {arg}", function(barcode) {
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.barcodeEntry.Click(83, 35, skAlt);
  enterbarcode(barcode);
  scene.JavaFXObject("enter").Click();
  Delay(2000);
});
```

### After (Page Object Model)
```javascript
//USEUNIT ScanningScreenPage

When("an item is added via the keypad with barcode {arg}", function(barcode) {
  Pages.scanning.addItemViaBarcode(barcode);
});
```

The page-object files must be added as script units in `Script.tcScript` under the
`Pages` folder. Reference each unit from `StepDefinitions.js` with a `//USEUNIT`
directive; TestComplete script units do not use Node.js `require`/`module.exports`.

---

## Planned Sub-Screens (TODO)

### 6. InterventionScreenPage.js
**Age verification, product restrictions, alerts**

Elements:
- Age rejection options (No ID, Under Age, Intoxicated)
- Approval buttons
- Alert messages
- Supplier selection for restricted items

Methods:
- `handleAgeIntervention(option)` - Reject age-restricted item
- `selectSupplier(supplierType)` - Choose supplier for restrictions
- `confirmIntervention()` - Approve intervention
- `dismissAlert()` - Close alert

### 7. AdminMenuPage.js
**Colleague admin operations**

Elements:
- Navigation buttons (nav01, nav02, nav03)
- Function buttons (func01-func10)
- Admin keypad
- Back/Logoff buttons

Methods:
- `navigateToFunction(funcNumber)` - Open admin function
- `performPriceCorrection(option, value)` - Price adjustment
- `performVoidTransaction(reason)` - Void transaction
- `performQuantitySale(quantity)` - Bulk quantity
- `performLayaway()` - Suspend transaction
- `closeMenu()` - Exit admin menu

---

## Best Practices

### 1. Element Getters
Always use getter methods for elements:
```javascript
get startButton() {
  return this.scene.start;
}

// Use:
this.clickElement(this.startButton);
```

### 2. Meaningful Method Names
Use descriptive action names:
```javascript
// Good
selectCardPayment()
enterGiftCardNumber()
proceedToPayment()

// Avoid
clickButton()
enterText()
go()
```

### 3. Reusable Keypad Maps
Use getter methods for keypad maps:
```javascript
getKeypadButtonMap() {
  return {
    '0': this.scene.JavaFXObject("num0"),
    '1': this.scene.JavaFXObject("num1"),
    // ...
  };
}
```

### 4. Logging
Log all significant actions:
```javascript
this.logStep("Starting transaction");
// Do action
this.logStep("Transaction started successfully", "PASS");
```

### 5. Error Handling
Validate before actions:
```javascript
clickElement(element) {
  if (!this.elementExists(element)) {
    Log.Error("Element does not exist");
    return false;
  }
  // Click action
}
```

---

## Migration Guide (Refactoring Old Tests)

### Step 1: Create Page Object
```javascript
class CustomPage extends BasePage {
  // Implement elements and methods
}
```

### Step 2: Update Step Definitions
Replace direct UI access with page object calls:
```javascript
// Old
Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene.start.Click();

// New
const welcomeScreen = new WelcomeScreenPage();
welcomeScreen.startTransaction();
```

### Step 3: Test and Verify
Run tests to ensure behavior is unchanged.

---

## File Size Reference

| File | Size | Elements | Methods |
|------|------|----------|---------|
| BasePage.js | ~2.3 KB | 0 | 8 |
| WelcomeScreenPage.js | ~6.3 KB | 15+ | 12+ |
| ScanningScreenPage.js | ~9.4 KB | 20+ | 15+ |
| BagSelectionScreenPage.js | ~5.8 KB | 8 | 12+ |
| PaymentScreenPage.js | ~11 KB | 25+ | 20+ |

---

## Next Steps

1. **Complete InterventionScreenPage.js** - Handle all intervention scenarios
2. **Complete AdminMenuPage.js** - Cover all colleague operations
3. **Refactor StepDefinitions.js** - Replace direct UI access with page objects
4. **Add error screenshots** - Capture failures for debugging
5. **Add waits/explicit synchronization** - Improve reliability
6. **Create Page Factory** - Centralized page initialization

---

## Example: Complete Test Flow Using POM

```javascript
When("a customer completes a card payment transaction", function() {
  // Page 1: Welcome Screen
  const welcomeScreen = new WelcomeScreenPage();
  welcomeScreen.startTransaction();
  
  // Page 2: Scanning Screen
  const scanningScreen = new ScanningScreenPage();
  scanningScreen.addItemViaBarcode("200");
  scanningScreen.proceedToBagSelection();
  
  // Page 3: Bag Selection
  const bagScreen = new BagSelectionScreenPage();
  bagScreen.selectBagOption("One Bag");
  bagScreen.proceedToPayment();
  
  // Page 4: Payment Screen
  const paymentScreen = new PaymentScreenPage();
  paymentScreen.selectCardPayment();
  paymentScreen.completeTransaction();
  paymentScreen.startNewTransaction();
  
  // Back at welcome screen
  const finalScreen = new WelcomeScreenPage();
  expect(finalScreen.isWelcomeScreenVisible()).toBe(true);
});
```

---

## Support & Questions

For issues or improvements:
1. Review existing page object methods
2. Follow established naming patterns
3. Add logging for debugging
4. Update this README with changes
