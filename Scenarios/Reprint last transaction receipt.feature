@R20.1
Feature: Reprint last transaction receipt

  Scenario: Reprinting last transaction receipt from colleague menu
    Given the transaction is started
    When an item is added via the keypad with barcode "200"
    And customer selects "No Bag" Bag options
    And card payment is selected
    And colleague logs in via payment page
    Then colleague prints last transaction receipt