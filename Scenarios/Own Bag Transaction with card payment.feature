
Feature: Own Bag transaction with card payment

  Scenario: Customer has own bag
  
    Given Customer has his own bag 
    When an item is added via the keypad
    And customer navigates to payment page
    And card payment is selected
    Then the order is placed and receipt is printed