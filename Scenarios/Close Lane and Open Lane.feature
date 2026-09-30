@runtimecheck
Feature: Close Lane and Open Lane

  Scenario: Colleague Closed the lane and opens it again
   Given customer clicks on Help button
    When colleague logs in
    And Colleague just confirms the request
    And colleague closes the lane
    And colleague logs in
    And colleague opens the lane
    Then the SCOT should be in welcome screen