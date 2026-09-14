
@R21st
Feature: Price Required Alert

  Scenario: Price required alert validations
    Given the transaction is started 
    When an item is added via the keypad with barcode "00222266"
    And Colleague clears the intervention by entering the appropriate price ".1" for the item
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    
    
     Scenario: Price required alert is cancelled
    Given the transaction is started 
    When an item is added via the keypad with barcode "00222266"
    And Colleague clears the intervention by cancelling the prompt for price
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided