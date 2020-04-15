@Meritnation @student
Feature: AUT: Meritnation
  As a user I want to see my profile details and update them.

  @tc_01_login
  Scenario Outline: To sign in the existing user
    Given I need to launch the browser
    And I am on the homepage
    And I click on the login link
    When I enter the valid "<username>" and "<password>"
    Then I click on the login button

    Examples: 
      | username                             | password     |
      | meritnation.test@gmail.com           | password1234 |
      | adnanmohd11@gmail.com                | Adnan260896  |
      | meritnationteacher.teacher@gmail.com | Teacher@5    |
      | meritnation@gmail.com                | password     |
      | meritnation@gmail.com                | password12   |

  @tc_02_editprofile
  Scenario Outline: To change password of the user account and update account details
    Given I log in with credentials "<username>" and "<password>"
    And I click on profile icon
    And click on My Account
    When I  navigate to profile page
    And I click on Edit profile
    Then I change password with newPassword
    And I click save button

    Examples: 
      | username                   | password     |
      | meritnation.test@gmail.com | password1234 |

  @tc_03_editprofile
  Scenario Outline: To change password of the user account and update account details
    Given I log in with credentials "<username>" and "<password>"
    And I click on profile icon
    And click on My Account
    When I  navigate to profile page
    And I click on Edit profile
    Then I update account details with emailId and grade
    And I click save button

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  @tc_03_editprofile
  Scenario Outline: To update Personal details of the user
    Given I log in with credentials "<username>" and "<password>"
    When I navigate to profile page
    Then I update my personal details with DOB and State
    And I click save button

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  @tc_04_editprofile
  Scenario Outline: To update school details of the user
    Given I log in with credentials "<username>" and "<password>"
    When I navigate to profile page
    Then I update my School details with SchoolName
    And I click save button

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  @tc_05_editprofile
  Scenario Outline: To update parent's details of the user
    Given I log in with credentials "<username>" and "<password>"
    When I navigate to profile page
    Then I update parent details with parentName , parentEmailId and MobileNo.
    And I click save button

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  @tc_06_logout
  Scenario Outline: To Logout
    Given I log in with credentials "<username>" and "<password>"
    When I click on profile icon
    Then I click on logout button
    And I am logged out

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  #As a user I want to be able to  explore my feed and add to post to my feed
  @tc_02_FeedPage
  Scenario Outline: To explore Feed page of the user
    Given I log into the website with credentials "<username>" and "<password>"
    When I click on Feed from homepage title bar
    And I navigate to Feed Page
    And I navigate to my post
    Then I enter the post details in edit box as Note
    And I click Post button
    And My post appears in MyPost

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  #	As a user i want to search a test course through test generator
  #using search filter and add the test course to cart
  @tc_02_FindTest
  Scenario Outline: To find the test course and add to cart
    Given I need to launch the browser and log in with credentials "<username>" and "<password>"
    And I click on purchase
    When I Scroll down to test generator
    And select one topic to create test
    Then I click on generate test button
    And I add first Test Course to cart

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 |

  #As a user i want to play a tutorial video
  @tc_02_PlayVideo
  Scenario Outline: To play tutorial video
    Given I log into website with credentials "<username>" and "<password>"
    When I play a tutorial video on topic
    And I take Screenshot
    Then I click on close button
    And I am navigated to homepage

    Examples: 
      | username                   | password    |
      | meritnation.test@gmail.com | password123 | 

  @Login
  Scenario Outline: Title of your scenario outline
    Given Login to the application.
    And I click the login button
    When I enter the valid "<email>" and "<password>" to signin
    Then I click login button

    Examples: 
      | email                 |  | password    |
      | adnanmohd11@gmail.com |  | Adnan260896 |

  @Myprofilepage
  Scenario: To enter name in Myprofilepage and select ADD FRIEND
    Given I am logged in to the website
    And I click ME link in homepage
    And I click MYPROFILE link
    And Myprofilepage is displayed
    When I enter the SRAAWYA in Myprofilepage
    And I select the SRAAWYA from various name
    Then I press enter to see SRAAWYA profile
   
   @Myprofilepage
  Scenario: To enter name in Myprofilepage and select ADD FRIEND
    Given I am logged in to the website
    And I click ME link in homepage
    And I click MYPROFILE link
    And Myprofilepage is displayed
    When I enter the name in Myprofilepage
    And I select the SRAAWYA from various name
    Then I press enter to see SRAAWYA profile  

  @editparentdetails
  Scenario: To edit parent details
    Given I click on ADD YOUR ADDRESS link
    And I click on parent's details
    When I enter name, Email and MobileNo
    And I click save
    Then parent details have been uploaded successfully

  @Callme
  Scenario: To call customer care support
    Given I click on CALL ME link in homepage
    When I enter Mobileno
    And I click on CALL NOW
    Then call is placed to the customer care


  #teacher account
  @tc_01_login
  Scenario Outline: Login to the application.
    Given I am on the Homa Page
    And I click the login button in the homepage
    When I enter valid "<email>" and "<password>"
    Then I click login button in the loginpage

    Examples: 
      | email                                | password  |
      | meritnationteacher.teacher@gmail.com | Teacher@5 |

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

  @Science-practical
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
