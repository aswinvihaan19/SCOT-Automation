@R21st
Feature: Quantity Restriction for multiple items

  Scenario: Quantity Restriction message should be validated for multiple items
     Given the transaction is started 
    When multiple items are added via the keypad with barcode "00269629,00985529,29123247"
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