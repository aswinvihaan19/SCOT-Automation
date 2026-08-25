@R20.1
Feature: Validate Scan and shop QR Code

  Scenario: Validate the SAS QR code 
    Given Customer press on the scan and shop
    When QR code prompt screen is displayed 
    Then customer press on Go back