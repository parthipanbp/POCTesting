Feature: Patient Management System functionalities 
Scenario: TC_1_Validating Home page 
Given Launch ge hospital mgs 
When home should be appiear 
Then I should see Add Patient Button in home page
When I should see Patient List Button in home page
Then I should see Help Button in home page
      
When I should click "Add Patient" Button in home page
Then I should see "Patient Form" is displayed 
Then I should see "Patient Email" is displayed 

Then I close the application 
  
 
Scenario: GET BY ID
Given Launch ge hospital mgs 
When home should be appiear 
Then I should see Add Patient Button in home page
When I should see Patient List Button in home page
Then I should see Help Button in home page
When I should click "Patient List" Button in home page
Then I should see "Patient List" is displayed 

When I should click patinet number "34" in patient list
#
Then I close the application 
#
#    When user wants to get patient by id  58
#    Then the following patient is returned
#      | pid|pname|pemail|page|psno|
#      | 58 | false |anish@gmail.com    | Male    | Anish  | 9823456123 | 2010-11-30 |
#      
 