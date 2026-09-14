@runtimecheck
Feature: giftreceiptUI

  Scenario: Check whether gift receipt button is disabled for food Products
    Given the transaction is started
    When an item is added via the keypad with barcode "00002929"
    And the print gift receipt button is disabled
    And colleague logs in
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided
    
   @raj
   Scenario: Check whether gift receipt button is enabled for C&H Products
    Given the transaction is started
    When an item is added via the keypad with barcode "01234589"
    And the print gift receipt button is enabled
    And colleague logs in
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided
    
    @raj2
   Scenario: Check whether customer seelcts cancel option in the gift receipt screen
    Given the transaction is started
    When an item is added via the keypad with barcode "01234589"
    And the print gift receipt button is enabled
    When customer selected print gift receipt button
    And customer selected cancel option in the giftreceipt screen
    And scanning screen displayed 
    And colleague logs in
    And colleague voids the transaction Choosing "Changed their mind/Price Enquiry" option
    Then Transaction should be voided