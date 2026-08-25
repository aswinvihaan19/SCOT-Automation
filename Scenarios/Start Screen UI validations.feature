@R20.1
Feature: Start Screen UI validations
  
  Scenario: Validate the use of help button
    Given customer clicks on Help button
    When colleague logs in
    Then Colleague confirms on the request
    
   
  #Scenario: Validate the language option availability
   #Given customer clicks on change language option
#When the languages are displayed 
   # Then change the language to welsh and come back to english
    