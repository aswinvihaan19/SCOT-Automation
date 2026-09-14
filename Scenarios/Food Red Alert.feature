@R21st
Feature: Food Red Alert

  Scenario: validate Blocking alert for Food Red alert message
    Given the transaction is started 
    When an item is added via the keypad with barcode "00333344"
    And colleague validates the Red alert message
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided