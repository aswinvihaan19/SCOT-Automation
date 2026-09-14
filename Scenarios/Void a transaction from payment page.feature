@R21regression
Feature: Void a transaction from payment page

  Scenario Outline: voiding a transaction from payment page 
    Given the transaction is started 
     When an item is added via the keypad with barcode "200"
    And customer selects "No Bag" Bag options
    And colleague logs in via payment page
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided
    
    Examples:
   |Void Transaction Options|
   |Changed their mind/Price Enquiry|
   |Functionality not available in SCOTs|
   |Payment Failed|
   |Walk off (items left behind)|
   |Walk off (Stock Loss)|