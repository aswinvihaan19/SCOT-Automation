@R20.1
Feature: Price correction of an item

  Scenario Outline: Colleague does a price correction for an item
     Given the transaction is started 
    When an item is added via the keypad with barcode "200"
    And colleague logs in
    And colleague selects the "<Price Correction Options>" option for price correction 
    And customer selects "No Bag" Bag options
    And card payment is selected
    Then the order is placed and receipt is printed
    
    Examples:
    |Price Correction Options|
    |Ticketing Error|
    |Outlet reduction|
    |Manager's Reduction|
   # | Soiled and Damaged|
    | Customer Reservation|
    | Food Discount|
    | ISA Order|
    |Cancel|
    
   
    
    
    
    
    