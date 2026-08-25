@R20.1
Feature: Item not found blocking alert

  Scenario: Validate item not found blcoking alert
   Given the transaction is started 
    When an item is added via the keypad with barcode "0550"
    And the item not found blocking alert is triggered
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided
    