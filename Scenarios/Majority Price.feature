@R21st
Feature: Majority Price

  Scenario Outline: Majority price validations
    Given the transaction is started 
    When an item is added via the keypad with barcode "00111188"
    And Colleague clears the intervention by selecting "<Action>" with price corrction "<price>"
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    Examples:
    |Action|price|
    |Accept|     |
    |Reject|1.11 |     