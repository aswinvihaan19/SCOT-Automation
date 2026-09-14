@R21st
Feature: Bulk RTM Restricted supplier

  Scenario: Selecting Restricted supplier for bulk RTM product
    Given the transaction is started 
    When an item is added via the keypad with barcode "06134938"
    And the colleague clears the intervention by selecting restricted supplier
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided