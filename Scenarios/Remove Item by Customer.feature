@18.2Regression
Feature: Remove Item by Customer

  Scenario: Remove an item below 5£ from the transaction
    Given the transaction is started 
    When multiple items are added via the keypad with barcode "200,200"
   And customer removes one of the items from the transaction
   And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed