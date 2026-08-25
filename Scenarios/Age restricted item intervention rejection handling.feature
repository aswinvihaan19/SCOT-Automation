@R20.1
Feature: Age restricted item intervention rejection handling

  Scenario Outline: An age restricted item intervention is rejected by colleague
    Given the transaction is started
     When an item is added via the keypad with barcode "630238"
    And colleague rejects the age restricted item intervention with "<Age Rejection Option>" option
    And colleague voids the transaction Choosing "Walk off (items left behind)" option
    Then Transaction should be voided
    
    Examples:
    |Age Rejection Option|
    |Do not approve,No ID|
    |Do not approve,Under Age|
    |Do not approve,Intoxicated|