@R20.1
Feature: Void a transaction from Sales screen

  Scenario Outline: voiding a transaction from payment page 
    Given the transaction is started 
     When an item is added via the keypad with barcode "200"
    And colleague logs in
    And colleague voids the transaction Choosing "<Void Transaction Options>" option
    Then Transaction should be voided
    
    Examples:
   |Void Transaction Options|
   |Changed their mind/Price Enquiry|
   |Functionality not available in SCOTs|
   |Payment Failed|
   |Walk off (items left behind)|
   |Walk off (Stock Loss)|