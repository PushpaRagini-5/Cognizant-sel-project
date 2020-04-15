$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Poornachandrika Divi/eclipse-workspace/MERITNATION-PROJECT/src/test/resources/features/Meritnation.feature");
formatter.feature({
  "line": 2,
  "name": "Meritnation application",
  "description": "As a teacher I want to login to the meritnation application\r\nand I want to select a subject\r\nSo that I can see the NCERT solutions.",
  "id": "meritnation-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login to the application.",
  "description": "",
  "id": "meritnation-application;login-to-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Homa Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the valid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "meritnation-application;login-to-the-application.;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 15,
      "id": "meritnation-application;login-to-the-application.;;1"
    },
    {
      "cells": [
        "meritnationteacher.teacher@gmail.com",
        "Teacher@5"
      ],
      "line": 16,
      "id": "meritnation-application;login-to-the-application.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login to the application.",
  "description": "",
  "id": "meritnation-application;login-to-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Homa Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the valid \"meritnationteacher.teacher@gmail.com\" and \"Teacher@5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.launch_app()"
});
formatter.result({
  "duration": 45562582100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.to_login()"
});
formatter.result({
  "duration": 7337206800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meritnationteacher.teacher@gmail.com",
      "offset": 19
    },
    {
      "val": "Teacher@5",
      "offset": 62
    }
  ],
  "location": "Meritnation_test.enter_email_and_pwd(String,String)"
});
formatter.result({
  "duration": 425276100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_login_button()"
});
formatter.result({
  "duration": 4485686800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "selecting a subject to view the NCERT solution",
  "description": "",
  "id": "meritnation-application;selecting-a-subject-to-view-the-ncert-solution",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@tc_02_view_NCERT_solution"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I logged in to the application \u0026 I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click the subject",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I navigate to study page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the topic",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the view NCERT solution",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I take screenshot of the solution",
  "keyword": "And "
});
formatter.match({
  "location": "Meritnation_test.navigate_to_Homepage()"
});
formatter.result({
  "duration": 160572050900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_subject()"
});
formatter.result({
  "duration": 7535623400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.navigate_to_Studypage()"
});
formatter.result({
  "duration": 50384900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_topic()"
});
formatter.result({
  "duration": 2718920200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.view_ncert_solution()"
});
formatter.result({
  "duration": 1826405900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.take_screenshot()"
});
formatter.result({
  "duration": 5339517000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#I want to select IIT-JEE \u0026 NEET from the Entrance Exams"
    },
    {
      "line": 30,
      "value": "#and I can select revision notes \u0026 best books"
    },
    {
      "line": 31,
      "value": "#So that I can download \u0026 take screenshot respectively"
    }
  ],
  "line": 34,
  "name": "select IIT-JEE to download revision notes",
  "description": "",
  "id": "meritnation-application;select-iit-jee-to-download-revision-notes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@download_RevisionNotes"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click the IIT-JEE from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click the motion topic",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click the view revision notes button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click the download button",
  "keyword": "And "
});
formatter.match({
  "location": "Meritnation_test.HomePage()"
});
formatter.result({
  "duration": 18614982200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.IIT_JEE()"
});
formatter.result({
  "duration": 40416088400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_motion_topic()"
});
formatter.result({
  "duration": 4921490200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_revisionNotes()"
});
formatter.result({
  "duration": 4242799100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.download_revnotes()"
});
formatter.result({
  "duration": 1034161600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "select IITJEE to know the important books",
  "description": "",
  "id": "meritnation-application;select-iitjee-to-know-the-important-books",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Science-practicals"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Iam logged in to application \u0026 I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click the IITJEE from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click Science-practicals and take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.navigate_to_homepage()"
});
formatter.result({
  "duration": 73312893500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.IITJEE()"
});
formatter.result({
  "duration": 6574087000,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.science_practicals()"
});
formatter.result({
  "duration": 16364446200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 47,
      "value": "#I want to explore the take a break page"
    },
    {
      "line": 48,
      "value": "#and click the daily teaser"
    },
    {
      "line": 49,
      "value": "#So that I can see solution for yesterday\u0027s teaser"
    }
  ],
  "line": 52,
  "name": "take a break page",
  "description": "",
  "id": "meritnation-application;take-a-break-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@Take-a-break"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I am in the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I click on the take a break",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click on the daily teaser",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on the view solution for yesterday\u0027s teaser",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.In_hoempage()"
});
formatter.result({
  "duration": 47170802700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_on_tab()"
});
formatter.result({
  "duration": 5867703500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_on_dailyteaser()"
});
formatter.result({
  "duration": 161034500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_on_view_solution_of_yesterday_sol()"
});
formatter.result({
  "duration": 2585809200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#I want to explore the discover yourself"
    },
    {
      "line": 60,
      "value": "#and I click the career guidance and field options"
    },
    {
      "line": 61,
      "value": "#So that I can take the screenshots"
    }
  ],
  "line": 64,
  "name": "explore discover your self",
  "description": "",
  "id": "meritnation-application;explore-discover-your-self",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@Discover-your-self"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I need to be in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I click career guidance option from Discover your self",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I click on the medical field",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I take the screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "Meritnation_test.in_homepage()"
});
formatter.result({
  "duration": 19208612300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.career_guidance()"
});
formatter.result({
  "duration": 36807079700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.medical_field()"
});
formatter.result({
  "duration": 133946400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.screenshot()"
});
formatter.result({
  "duration": 5225487000,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "take screenshots",
  "description": "",
  "id": "meritnation-application;take-screenshots",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@skill-builder"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I am on the career guidance page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I click on the skill builder",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I click on speaking in public and take a screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.on_careerguidance_page()"
});
formatter.result({
  "duration": 48568040400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.skill_builder()"
});
formatter.result({
  "duration": 11083075900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.speaking_in_public()"
});
formatter.result({
  "duration": 6455093501,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 77,
      "value": "#I want to add students to the existing batch in the profile page"
    },
    {
      "line": 78,
      "value": "#and i want to logout from the application"
    }
  ],
  "line": 81,
  "name": "adding students to existing batch and logout from the application",
  "description": "",
  "id": "meritnation-application;adding-students-to-existing-batch-and-logout-from-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@add-students\u0026logout"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I am on the home page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I add students to the existing batch",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "I logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.home_page_of_application()"
});
formatter.result({
  "duration": 47968758600,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.add_students_to_existing_batch()"
});
formatter.result({
  "duration": 3672688400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.logout_from_the_application()"
});
formatter.result({
  "duration": 4389673600,
  "status": "passed"
});
});