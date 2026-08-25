@R20.1
Feature: Validate Qty Restriction Message

  Scenario: Quantity Restriction message should be validated
     Given the transaction is started 
    When an item with barcode "00674300" is added via the keypad "4" times
    And colleague validates the Qty restriction message
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    #No Bag
    #One Bag
    #Two Bags
    #Three Bags
    #Four Bags
    #Five Bags