@runtimecheck
Feature: A transaction with Intervention in it and paid via coupon by value

  Scenario: Customer adds a quantity & age restricted item in the basket
    Given the transaction is started
    When an item is added via the keypad with barcode "630238"
    And customer navigates to bag selection page after clearing intervention
    And colleague logs in via payment page
    And payment completed for Age item via coupon by value
    Then the order is placed using coupon by value and receipt is printed