@R20.1
Feature: Layaway a transaction from payment page

  Scenario: Laying away a transaction from payment page 
    Given the transaction is started 
     When an item is added via the keypad with barcode "200"
    And customer selects "No Bag" Bag options
    And colleague logs in via payment page
    And colleague layaways a transaction from payment page
    Then Transaction should be layawayed