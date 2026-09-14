@runtimecheck
Feature: Bag Screen validations

  Scenario Outline: Validate different number of bag being added in transactions
    Given the transaction is started 
    When an item is added via the keypad with barcode "200"
    And customer selects "<Required Bags>" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    Examples:
    |Required Bags|
    |No Bag|
    |One Bag|
    |Two Bags|
    |Three Bags|
    |Four Bags|
    |Five Bags|