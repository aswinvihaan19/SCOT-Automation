@R20.1
  Feature: Transaction paid using coupon by value

  Scenario: Customer makes a transaction with coupon by value
    Given the transaction is started
     When an item is added via the keypad with barcode "200"
    And customer selects "No Bag" Bag options
    And colleague logs in via payment page
    And payment is made via coupon by value
    Then the order is placed using coupon by value and receipt is printed