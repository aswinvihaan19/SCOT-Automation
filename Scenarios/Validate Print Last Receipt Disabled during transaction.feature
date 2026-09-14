@runtimecheck
Feature: Validate Print Last Receipt Disabled during transaction

  Scenario: Print Last receipt option should be disabled during transaction
    Given the transaction is started 
    When an item is added via the keypad with barcode "200"
    And colleague logs in
    And colleague tries to reprint last transaction receipt
     And customer selects "No Bag" Bag options
    And card payment is selected
    And colleague logs in via payment page
    Then colleague prints last transaction receipt