
@R20.1
Feature: Bulk RTM Un-Restricted supplier

  Scenario: Selecting un-restricted supplier for bulk RTM product
    Given the transaction is started 
    When an item is added via the keypad with barcode "06134938"
    And the colleague clears the intervention by selecting un-restricted supplier
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided