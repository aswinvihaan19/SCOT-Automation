@runtimecheck
Feature: Remove item by void entry

  Scenario: Remove an item from void entry option in colleague menu
   Given the transaction is started 
   When an item with barcode "200" is added via the keypad "4" times
    And colleague logs in
   And Colleague Voids the item via void entry option
  And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed