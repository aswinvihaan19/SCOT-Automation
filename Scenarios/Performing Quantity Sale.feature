@R20.1
Feature: Performing Quantity Sale

  Scenario: A colleague performs a quantity sale greater than 5
    Given the transaction is started
    When colleague logs in
    And Colleague does a qty sale
     When an item is added via the keypad with barcode "200"
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed