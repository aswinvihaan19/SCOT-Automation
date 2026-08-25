@R20.1
Feature: Validate Sales message

  Scenario: Validate if sales message is getting triggered
   Given the transaction is started 
    When an item is added via the keypad with barcode "00555562"
    And colleague validates the sales message
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    #No Bag
    #One Bag
    #Two Bags
    #Three Bags
    #Four Bags
    #Five Bags