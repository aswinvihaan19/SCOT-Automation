@runtimecheck
Feature: Adding a bag to the transaction and pay wit card

  Scenario: adding a Bag
    Given the transaction is started 
    When an item is added via the keypad with barcode "200"
    And customer selects "One Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed