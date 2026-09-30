
Feature: Transaction paid using gift card

  Scenario: Customer makes a transaction with gift card
    Given the transaction is started
    When an item is added via the keypad with barcode "200"
    And customer selects "No Bag" Bag options
    And gift card payment is selected
    And gift card number "0502739263377403024999001781040" is entered
    Then the order is placed and receipt is printed
    #Then the order is paid with gift card