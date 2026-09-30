# Quick Reference Guide - Page Object Model

## 🎯 Quick Navigation

| Screen | Class | Purpose | Key Methods |
|--------|-------|---------|-------------|
| **Welcome** | `WelcomeScreenPage` | Start transactions, login, language | `startTransaction()`, `colleagueLogin()`, `changeLanguage()` |
| **Scanning** | `ScanningScreenPage` | Add items, enter prices | `addItemViaBarcode()`, `enterPrice()`, `proceedToPayment()` |
| **Bags** | `BagSelectionScreenPage` | Select bag count (0-5) | `selectBagOption()`, `selectOwnBag()` |
| **Payment** | `PaymentScreenPage` | Select payment, coupon, admin | `selectCardPayment()`, `performCouponPayment()` |

---

## 📝 Common Usage Patterns

### Single Item Transaction
```javascript
// Welcome → Scanning → Bags → Payment → Complete
const welcome = new WelcomeScreenPage();
welcome.startTransaction();

const scanning = new ScanningScreenPage();
scanning.addItemViaBarcode("200");

const bags = new BagSelectionScreenPage();
bags.selectBagOption("No Bag");
bags.proceedToPayment();

const payment = new PaymentScreenPage();
payment.selectCardPayment();
```

### Multiple Items
```javascript
const scanning = new ScanningScreenPage();
scanning.addMultipleItems("200,300,400");  // Comma-separated barcodes
```

### Gift Card Payment
```javascript
const payment = new PaymentScreenPage();
payment.selectGiftCardPayment();
payment.enterGiftCardNumber("0502739263377403024999001781040");
```

### Colleague Operations
```javascript
const payment = new PaymentScreenPage();
payment.colleagueLoginFromPaymentScreen();
payment.performCouponByValuePayment();
```

---

## 🔑 Key Methods by Screen

### WelcomeScreenPage
```javascript
startTransaction()                    // Begin transaction
clickHelp()                          // Access colleague menu
colleagueLogin()                     // Login colleague
changeLanguage()                     // Open language selection
toggleLanguage()                     // Switch between English/Welsh
openLane() / closeLane()             // Manage lane status
```

### ScanningScreenPage
```javascript
addItemViaBarcode("200")             // Single item scan
addMultipleItems("200,300")          // Multiple items (comma-separated)
addItemViaPicklist()                 // Select from product list
removeItemAsCustomer()               // Remove item from transaction
enterPrice("10.50")                  // Manual price entry
proceedToPayment()                   // Go to payment screen
proceedToBagSelection()              // Go to bag screen
```

### BagSelectionScreenPage
```javascript
selectBagOption("One Bag")           // Select bag count (0-5)
selectOwnBag()                       // Use customer's own bag
proceedToPayment()                   // Continue to payment
verifyAllBagOptionsAvailable()       // Validate all options exist
```

### PaymentScreenPage
```javascript
selectCardPayment()                  // Process card payment
selectGiftCardPayment()              // Process gift card
enterGiftCardNumber("...")           // Enter 16-digit card number
selectCouponPayment()                // Use coupon
enterCouponValue("234")              // Enter coupon amount
colleagueLoginFromPaymentScreen()    // Login at payment screen
performCouponByValuePayment()        // Coupon via admin menu
reprintLastReceipt()                 // Reprint previous receipt
completeTransaction()                // Finish payment
startNewTransaction()                // Return to welcome screen
```

---

## 🛠️ Keypad Handling

### Barcode Entry (Scanning Screen)
```javascript
const scanning = new ScanningScreenPage();
scanning.addItemViaBarcode("200");  // Automatically handles keypad
```

### Price Entry (Scanning Screen)
```javascript
const scanning = new ScanningScreenPage();
scanning.enterPrice("10.50");       // Automatically handles keypad
```

### Gift Card Entry (Payment Screen)
```javascript
const payment = new PaymentScreenPage();
payment.selectGiftCardPayment();
payment.enterGiftCardNumber("0502739263377403024999001781040");
```

### Coupon Entry (Payment Screen)
```javascript
const payment = new PaymentScreenPage();
payment.enterCouponValue("234");
```

---

## ✅ Common Assertions

### Screen Visibility
```javascript
// Welcome Screen
const welcome = new WelcomeScreenPage();
if (welcome.isWelcomeScreenVisible()) {
  Log.Message("Welcome screen is displayed");
}

// Payment Screen
const payment = new PaymentScreenPage();
if (payment.isPaymentScreenVisible()) {
  Log.Message("Payment screen is displayed");
}

// Bag Selection Screen
const bags = new BagSelectionScreenPage();
if (bags.isBagSelectionScreenVisible()) {
  Log.Message("Bag selection screen is displayed");
}
```

### Element Availability
```javascript
const bags = new BagSelectionScreenPage();
if (bags.verifyAllBagOptionsAvailable()) {
  Log.Message("All bag options are available");
}

const welcome = new WelcomeScreenPage();
if (welcome.verifyLanguagesAvailable()) {
  Log.Message("Both languages are available");
}
```

### Button States
```javascript
const payment = new PaymentScreenPage();
if (payment.isPrintLastReceiptEnabled()) {
  Log.Message("Print receipt button is enabled");
} else {
  Log.Message("Print receipt button is disabled (as expected during transaction)");
}
```

---

## 📊 Element Counts by Screen

| Screen | Total Elements |
|--------|-----------------|
| Welcome | 15+ |
| Scanning | 20+ |
| Bags | 8 |
| Payment | 25+ |
| **Total** | **68+** |

---

## 🔗 Integration with BDD Steps

### Example: Refactored Step Definition

**Before:**
```javascript
When("an item is added via the keypad with barcode {arg}", function(barcode) {
  let scene = Aliases.tpiscan.stageDnEasyExpressNcNcDnEasyProN.scene;
  scene.barcodeEntry.Click(83, 35, skAlt);
  enterbarcode(barcode);  // External function
  scene.JavaFXObject("enter").Click();
  Delay(2000, "waiting for the item to be added");
});
```

**After:**
```javascript
//USEUNIT ScanningScreenPage

When("an item is added via the keypad with barcode {arg}", function(barcode) {
  const scanningScreen = new ScanningScreenPage();
  scanningScreen.addItemViaBarcode(barcode);
});
```

---

## 🚨 Error Handling

All page objects include error checking:

```javascript
const payment = new PaymentScreenPage();

// selectCardPayment() returns true/false
if (payment.selectCardPayment()) {
  Log.Message("Card payment selected successfully");
} else {
  Log.Error("Failed to select card payment");
}
```

---

## 📚 File References

### Main Documentation
- `README.md` - Comprehensive guide (11.6 KB)
- `IMPLEMENTATION_SUMMARY.md` - Project overview (11.9 KB)
- `QUICK_REFERENCE.md` - This file

### Page Objects (57.8 KB total)
- `BasePage.js` - Base class (2.3 KB)
- `WelcomeScreenPage.js` - Welcome screen (6.2 KB)
- `ScanningScreenPage.js` - Scanning screen (9.2 KB)
- `BagSelectionScreenPage.js` - Bag selection (5.7 KB)
- `PaymentScreenPage.js` - Payment screen (10.7 KB)

---

## ⏭️ Next: Two Remaining Screens

### Coming Soon: InterventionScreenPage.js
For handling:
- Age restrictions (No ID, Under Age, Intoxicated)
- Product restrictions (Supplier selection)
- Alert messages and approvals

### Coming Soon: AdminMenuPage.js
For colleague operations:
- Price correction (7 options)
- Void transaction (6 reasons)
- Quantity sale
- Layaway transactions
- Receipt reprinting

---

## 💡 Pro Tips

### 1. Always Initialize Page Objects
```javascript
const scanningScreen = new ScanningScreenPage();
// Now use methods
scanningScreen.addItemViaBarcode("200");
```

### 2. Chain Multiple Actions on Same Page
```javascript
const scanning = new ScanningScreenPage();
scanning.addItemViaBarcode("200");
scanning.delay(1000);
scanning.addItemViaBarcode("300");
scanning.proceedToPayment();
```

### 3. Use Logging for Debugging
All methods call `this.logStep()`:
```
[PASS] Adding item with barcode: 200
[PASS] Barcode 200 entered successfully
[PASS] Proceeding to payment
[PASS] Loading payment screen
```

### 4. Check Return Values
```javascript
const bags = new BagSelectionScreenPage();
if (!bags.selectBagOption("One Bag")) {
  Log.Error("Failed to select bag option");
  return false;
}
```

---

## 🎓 Learning Path

1. **Start**: Read `README.md` in this folder
2. **Understand**: Review `BasePage.js` to understand inheritance
3. **Explore**: Each page object (Welcome → Scanning → Bags → Payment)
4. **Practice**: Refactor one test using page objects
5. **Expand**: Create InterventionScreenPage.js
6. **Master**: Create AdminMenuPage.js

---

## 📞 Quick Help

| Need | Solution |
|------|----------|
| Add an item | `new ScanningScreenPage().addItemViaBarcode()` |
| Select bags | `new BagSelectionScreenPage().selectBagOption()` |
| Process payment | `new PaymentScreenPage().selectCardPayment()` |
| Login colleague | `new WelcomeScreenPage().colleagueLogin()` |
| Enter keypad value | Use `inputViaKeypad()` from BasePage |
| Check element state | Use `elementExists()`, `elementIsEnabled()` |
| Get element | Use getter methods (e.g., `this.startButton`) |

---

**Last Updated**: 2026-09-24
**Status**: ✅ Ready to Use
**Location**: `C:\AshAutomation\SCOT-Automation-main\SCOT-Automation-main\Script\Pages\`
