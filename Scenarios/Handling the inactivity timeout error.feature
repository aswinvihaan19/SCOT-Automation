@runtimecheck
Feature: Handling the inactivity timeout error

  Scenario: Handling inactivity time out error by selecting Yes
    Given the transaction is started 
    When an item is added via the keypad with barcode "200"
    And inactivity timeout error occurs and we select "Yes"
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    
    
    
     Scenario: Handling inactivity time out error by selecting No
    Given the transaction is started 
     When an item is added via the keypad with barcode "200"
    And inactivity timeout error occurs and we select "No"
    And colleague logs in
    And confirms the inactivity timeout error
    And colleague voids the transaction Choosing "Walk off (items left behind)" option
    Then Transaction should be voided