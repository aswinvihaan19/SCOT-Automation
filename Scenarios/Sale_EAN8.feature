@R20.1
  Feature: Transaction with EAN8 barcode

  Scenario Outline: Customer makes a transaction EAN8 barcode
    Given the transaction is started
     When an item is added via the keypad with barcode "00002929"
    And colleague logs in
    And colleague voids the transaction Choosing "<Void Transaction Options>" option
    Then Transaction should be voided
    
    Examples:
   |Void Transaction Options|
   |Changed their mind/Price Enquiry|