@Meritnation
Feature: Meritnation application
	As a teacher I want to login to the meritnation application
	and I want to select a subject
	So that I can see the NCERT solutions.

  @tc_01_login
  Scenario Outline: Login to the application.
    Given I am on the Homa Page
    And I click the login button
    When I enter the valid "<email>" and "<password>"
    Then I click login button
    
Examples:
|email|password |
|meritnationteacher.teacher@gmail.com|Teacher@5 |
    

  @tc_02_view_NCERT_solution
  Scenario: selecting a subject to view the NCERT solution
    Given I logged in to the application & I am on Home Page
    When I click the subject
    And I navigate to study page
    And I click the topic
    Then I click the view NCERT solution
    And I take screenshot of the solution


   #I want to select IIT-JEE & NEET from the Entrance Exams
   #and I can select revision notes & best books
   #So that I can download & take screenshot respectively

  @download_RevisionNotes
  Scenario: select IIT-JEE to download revision notes
    Given I am on the HomePage
    When I click the IIT-JEE from the dropdown
    And I click the motion topic
    Then I click the view revision notes button
    And I click the download button
    
   @Science-practicals
   Scenario: select IITJEE to know the important books
   Given Iam logged in to application & I am on the Home Page
   When I click the IITJEE from the dropdown
   Then I click Science-practicals and take screenshot

 #I want to explore the take a break page
#and click the daily teaser
#So that I can see solution for yesterday's teaser

  @Take-a-break
  Scenario: take a break page
    Given I am in the HomePage
    When I click on the take a break 
    And I click on the daily teaser
    Then I click on the view solution for yesterday's teaser


		#I want to explore the discover yourself
		#and I click the career guidance and field options
		#So that I can take the screenshots

  @Discover-your-self
  Scenario: explore discover your self 
    Given I need to be in Home Page
    When I click career guidance option from Discover your self
    Then I click on the medical field
    And I take the screenshot

  @skill-builder
  Scenario: take screenshots
    Given I am on the career guidance page
    When I click on the skill builder
    Then I click on speaking in public and take a screenshot


	 #I want to add students to the existing batch in the profile page
	 #and i want to logout from the application
    
   @add-students&logout
   Scenario: adding students to existing batch and logout from the application
    Given I am on the home page of the application
    When I add students to the existing batch
    Then I logout from the application