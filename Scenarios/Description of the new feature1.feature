Feature: E2E SCOT order journey

  Scenario: Place an order from DN Card only SCOT
   # Given the applications are launched and the Lane is opened 
    Given the transaction is started 
    When an item is added via the picklist
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed