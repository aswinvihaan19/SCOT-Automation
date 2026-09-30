
Feature: Adding an Item via picklist

  Scenario: Place an order from DN Card only SCOT
   # Given the applications are launched and the Lane is opened 
    Given the transaction is started 
    When an item is added via the Picklist "20" Times
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    #No Bag
    #One Bag
    #Two Bags
    #Three Bags
    #Four Bags
    #Five Bags