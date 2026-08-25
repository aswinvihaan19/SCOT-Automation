@R20.1
Feature: C&H Red Alert

 Scenario: validate Blocking alert for C&H Red alert message
    Given the transaction is started 
    When an item is added via the keypad with barcode "08630445"
    And colleague validates the Red alert message
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided