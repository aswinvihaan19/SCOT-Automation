@runtimecheck
Feature: E2E SCOT order journey

  Scenario: Place an order from DN Card only SCOT
   # Given the applications are launched and the Lane is opened 
    Given the transaction is started 
   When an item with barcode "200" is added via the keypad "10" times
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    #No Bag
    #One Bag
    #Two Bags
    #Three Bags
    #Four Bags
    #Five Bags