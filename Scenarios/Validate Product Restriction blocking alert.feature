@R20.1
Feature: Validate Product Restriction blocking alert

  Scenario: Selecting un-restricted supplier for product restriction item
    Given the transaction is started 
    When an item is added via the keypad with barcode "00598538"
    And the colleague clears the intervention by selecting un-restricted supplier for product restricted item
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed