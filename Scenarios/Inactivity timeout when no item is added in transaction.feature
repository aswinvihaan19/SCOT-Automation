@R20.1
Feature: Inactivity timeout when no item is added in transaction

  Scenario: A description of your business scenario
    Given the transaction is started
    When no activity is performed till time out
    Then Transaction should be voided