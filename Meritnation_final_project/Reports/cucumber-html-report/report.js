$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SRAAWYA CH/git/Cognizant_Project/Meritnation/src/test/resources/Features/Meritnation.feature");
formatter.feature({
  "line": 2,
  "name": "AUT: Meritnation",
  "description": "As a user I want to see my profile details and update them.",
  "id": "aut:-meritnation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Meritnation"
    },
    {
      "line": 1,
      "name": "@student"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To sign in the existing user",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I need to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "aut:-meritnation;to-sign-in-the-existing-user;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password1234"
      ],
      "line": 15,
      "id": "aut:-meritnation;to-sign-in-the-existing-user;;2"
    },
    {
      "cells": [
        "adnanmohd11@gmail.com",
        "Adnan260896"
      ],
      "line": 16,
      "id": "aut:-meritnation;to-sign-in-the-existing-user;;3"
    },
    {
      "cells": [
        "meritnationteacher.teacher@gmail.com",
        "Teacher@5"
      ],
      "line": 17,
      "id": "aut:-meritnation;to-sign-in-the-existing-user;;4"
    },
    {
      "cells": [
        "meritnation@gmail.com",
        "password"
      ],
      "line": 18,
      "id": "aut:-meritnation;to-sign-in-the-existing-user;;5"
    },
    {
      "cells": [
        "meritnation@gmail.com",
        "password12"
      ],
      "line": 19,
      "id": "aut:-meritnation;to-sign-in-the-existing-user;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "To sign in the existing user",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I need to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the valid \"meritnation.test@gmail.com\" and \"password1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_need_to_launch_the_browser()"
});
formatter.result({
  "duration": 28995696900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 692099,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_link()"
});
formatter.result({
  "duration": 805808900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 19
    },
    {
      "val": "password1234",
      "offset": 52
    }
  ],
  "location": "Meritnation_editprofileStep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 313374800,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_button0()"
});
formatter.result({
  "duration": 22034425899,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To sign in the existing user",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I need to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the valid \"adnanmohd11@gmail.com\" and \"Adnan260896\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_need_to_launch_the_browser()"
});
formatter.result({
  "duration": 29001764001,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 74500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_link()"
});
formatter.result({
  "duration": 560188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adnanmohd11@gmail.com",
      "offset": 19
    },
    {
      "val": "Adnan260896",
      "offset": 47
    }
  ],
  "location": "Meritnation_editprofileStep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 275216300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_button0()"
});
formatter.result({
  "duration": 21740326499,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To sign in the existing user",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I need to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the valid \"meritnationteacher.teacher@gmail.com\" and \"Teacher@5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_need_to_launch_the_browser()"
});
formatter.result({
  "duration": 27238739900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 78501,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_link()"
});
formatter.result({
  "duration": 623593700,
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
  "location": "Meritnation_editprofileStep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 311849000,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_button0()"
});
formatter.result({
  "duration": 22023414500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To sign in the existing user",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I need to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the valid \"meritnation@gmail.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_need_to_launch_the_browser()"
});
formatter.result({
  "duration": 26663200899,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 68301,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_link()"
});
formatter.result({
  "duration": 569645301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation@gmail.com",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 47
    }
  ],
  "location": "Meritnation_editprofileStep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 249039100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_button0()"
});
formatter.result({
  "duration": 30168591000,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id container-notification-frame-5e78cbd57635bd53149c7eaf\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LFJQBRS\u0027, ip: \u0027192.168.0.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:885)\r\n\tat com.seleniumutil.seleniumutil.close_popup2(seleniumutil.java:46)\r\n\tat com.StepDefinition.Meritnation_editprofileStep.i_click_on_the_login_button0(Meritnation_editprofileStep.java:68)\r\n\tat ✽.Then I click on the login button(C:/Users/SRAAWYA CH/git/Cognizant_Project/Meritnation/src/test/resources/Features/Meritnation.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "To sign in the existing user",
  "description": "",
  "id": "aut:-meritnation;to-sign-in-the-existing-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I need to launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the valid \"meritnation@gmail.com\" and \"password12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_need_to_launch_the_browser()"
});
formatter.result({
  "duration": 28566394400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_link()"
});
formatter.result({
  "duration": 619245500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation@gmail.com",
      "offset": 19
    },
    {
      "val": "password12",
      "offset": 47
    }
  ],
  "location": "Meritnation_editprofileStep.i_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 347005500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_the_login_button0()"
});
formatter.result({
  "duration": 30164955500,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id container-notification-frame-5e78cbd57635bd53149c7eaf\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LFJQBRS\u0027, ip: \u0027192.168.0.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:885)\r\n\tat com.seleniumutil.seleniumutil.close_popup2(seleniumutil.java:46)\r\n\tat com.StepDefinition.Meritnation_editprofileStep.i_click_on_the_login_button0(Meritnation_editprofileStep.java:68)\r\n\tat ✽.Then I click on the login button(C:/Users/SRAAWYA CH/git/Cognizant_Project/Meritnation/src/test/resources/Features/Meritnation.feature:11)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "To change password of the user account and update account details",
  "description": "",
  "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@tc_02_editprofile"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on profile icon",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I  navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Edit profile",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I change password with newPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click save button",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password1234"
      ],
      "line": 33,
      "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "To change password of the user account and update account details",
  "description": "",
  "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@tc_02_editprofile"
    },
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I log in with credentials \"meritnation.test@gmail.com\" and \"password1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on profile icon",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I  navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Edit profile",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I change password with newPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 27
    },
    {
      "val": "password1234",
      "offset": 60
    }
  ],
  "location": "Meritnation_editprofileStep.i_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 42976061900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_profile_icon()"
});
formatter.result({
  "duration": 77327699,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.click_on_My_Account()"
});
formatter.result({
  "duration": 979240700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_navigate_to_profile_page1()"
});
formatter.result({
  "duration": 1319336701,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_Edit_profile()"
});
formatter.result({
  "duration": 82021099,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_change_password_with_newPassword()"
});
formatter.result({
  "duration": 12602745400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_save_button()"
});
formatter.result({
  "duration": 92501,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "To change password of the user account and update account details",
  "description": "",
  "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@tc_03_editprofile"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on profile icon",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I  navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click on Edit profile",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I update account details with emailId and grade",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click save button",
  "keyword": "And "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 46,
      "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 47,
      "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "To change password of the user account and update account details",
  "description": "",
  "id": "aut:-meritnation;to-change-password-of-the-user-account-and-update-account-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 35,
      "name": "@tc_03_editprofile"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I log in with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on profile icon",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I  navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click on Edit profile",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I update account details with emailId and grade",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 27
    },
    {
      "val": "password123",
      "offset": 60
    }
  ],
  "location": "Meritnation_editprofileStep.i_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 43230149700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_profile_icon()"
});
formatter.result({
  "duration": 99719100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.click_on_My_Account()"
});
formatter.result({
  "duration": 1485270699,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_navigate_to_profile_page1()"
});
formatter.result({
  "duration": 401349799,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_Edit_profile()"
});
formatter.result({
  "duration": 64269800,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_update_account_details_with_emailId_and_grade()"
});
formatter.result({
  "duration": 11059328100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_save_button()"
});
formatter.result({
  "duration": 84200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "To update Personal details of the user",
  "description": "",
  "id": "aut:-meritnation;to-update-personal-details-of-the-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@tc_03_editprofile"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I update my personal details with DOB and State",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I click save button",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-update-personal-details-of-the-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 57,
      "id": "aut:-meritnation;to-update-personal-details-of-the-user;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 58,
      "id": "aut:-meritnation;to-update-personal-details-of-the-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "To update Personal details of the user",
  "description": "",
  "id": "aut:-meritnation;to-update-personal-details-of-the-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 49,
      "name": "@tc_03_editprofile"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I log in with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I update my personal details with DOB and State",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I click save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 27
    },
    {
      "val": "password123",
      "offset": 60
    }
  ],
  "location": "Meritnation_editprofileStep.i_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 42377878600,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_navigate_to_profile_page()"
});
formatter.result({
  "duration": 1606612201,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_update_my_personal_details_with_DOB_and_State()"
});
formatter.result({
  "duration": 4782610600,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_save_button()"
});
formatter.result({
  "duration": 86701,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 61,
  "name": "To update school details of the user",
  "description": "",
  "id": "aut:-meritnation;to-update-school-details-of-the-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@tc_04_editprofile"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I update my School details with SchoolName",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I click save button",
  "keyword": "And "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-update-school-details-of-the-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 68,
      "id": "aut:-meritnation;to-update-school-details-of-the-user;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 69,
      "id": "aut:-meritnation;to-update-school-details-of-the-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "To update school details of the user",
  "description": "",
  "id": "aut:-meritnation;to-update-school-details-of-the-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    },
    {
      "line": 60,
      "name": "@tc_04_editprofile"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I log in with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I update my School details with SchoolName",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I click save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 27
    },
    {
      "val": "password123",
      "offset": 60
    }
  ],
  "location": "Meritnation_editprofileStep.i_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 42763740400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_navigate_to_profile_page()"
});
formatter.result({
  "duration": 1817251300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_update_my_School_details_with_SchoolName()"
});
formatter.result({
  "duration": 15960073700,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LFJQBRS\u0027, ip: \u0027192.168.0.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\SRAAWYA CH\\AppData...}, goog:chromeOptions: {debuggerAddress: localhost:55472}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e4e3dcddc8a64f1951b24fc8ecf69848\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Meritnation_EditProfile.updateSchoolDetails(Meritnation_EditProfile.java:98)\r\n\tat com.StepDefinition.Meritnation_editprofileStep.i_update_my_School_details_with_SchoolName(Meritnation_editprofileStep.java:206)\r\n\tat ✽.Then I update my School details with SchoolName(C:/Users/SRAAWYA CH/git/Cognizant_Project/Meritnation/src/test/resources/Features/Meritnation.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "To update parent\u0027s details of the user",
  "description": "",
  "id": "aut:-meritnation;to-update-parent\u0027s-details-of-the-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@tc_05_editprofile"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I update parent details with parentName , parentEmailId and MobileNo.",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I click save button",
  "keyword": "And "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-update-parent\u0027s-details-of-the-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 79,
      "id": "aut:-meritnation;to-update-parent\u0027s-details-of-the-user;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 80,
      "id": "aut:-meritnation;to-update-parent\u0027s-details-of-the-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "To update parent\u0027s details of the user",
  "description": "",
  "id": "aut:-meritnation;to-update-parent\u0027s-details-of-the-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    },
    {
      "line": 71,
      "name": "@tc_05_editprofile"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I log in with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I navigate to profile page",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I update parent details with parentName , parentEmailId and MobileNo.",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I click save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 27
    },
    {
      "val": "password123",
      "offset": 60
    }
  ],
  "location": "Meritnation_editprofileStep.i_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 42636841501,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_navigate_to_profile_page()"
});
formatter.result({
  "duration": 2278527000,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_update_parent_details_with_parentName_parentEmailId_and_MobileNo()"
});
formatter.result({
  "duration": 8972093799,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_save_button()"
});
formatter.result({
  "duration": 77701,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "To Logout",
  "description": "",
  "id": "aut:-meritnation;to-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@tc_06_logout"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I click on profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I click on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I am logged out",
  "keyword": "And "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-logout;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 90,
      "id": "aut:-meritnation;to-logout;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 91,
      "id": "aut:-meritnation;to-logout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 91,
  "name": "To Logout",
  "description": "",
  "id": "aut:-meritnation;to-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    },
    {
      "line": 82,
      "name": "@tc_06_logout"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I log in with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I click on profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I click on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I am logged out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 27
    },
    {
      "val": "password123",
      "offset": 60
    }
  ],
  "location": "Meritnation_editprofileStep.i_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 42504032199,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_profile_icon()"
});
formatter.result({
  "duration": 96049399,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_click_on_logout_button()"
});
formatter.result({
  "duration": 963057500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_editprofileStep.i_am_logged_out()"
});
formatter.result({
  "duration": 6605004000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 93,
      "value": "#As a user I want to be able to  explore my feed and add to post to my feed"
    }
  ],
  "line": 95,
  "name": "To explore Feed page of the user",
  "description": "",
  "id": "aut:-meritnation;to-explore-feed-page-of-the-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@tc_02_FeedPage"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "I log into the website with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I click on Feed from homepage title bar",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I navigate to Feed Page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I navigate to my post",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter the post details in edit box as Note",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "I click Post button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "My post appears in MyPost",
  "keyword": "And "
});
formatter.examples({
  "line": 104,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-explore-feed-page-of-the-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 105,
      "id": "aut:-meritnation;to-explore-feed-page-of-the-user;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 106,
      "id": "aut:-meritnation;to-explore-feed-page-of-the-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 106,
  "name": "To explore Feed page of the user",
  "description": "",
  "id": "aut:-meritnation;to-explore-feed-page-of-the-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 94,
      "name": "@tc_02_FeedPage"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "I log into the website with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I click on Feed from homepage title bar",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I navigate to Feed Page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I navigate to my post",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter the post details in edit box as Note",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "I click Post button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "My post appears in MyPost",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 41
    },
    {
      "val": "password123",
      "offset": 74
    }
  ],
  "location": "Meritnation_AddPostOnFeedStep.i_log_into_the_website_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 43036590900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_AddPostOnFeedStep.i_click_on_Feed_from_homepage_title_bar()"
});
formatter.result({
  "duration": 2762413999,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_AddPostOnFeedStep.i_navigate_to_Feed_Page()"
});
formatter.result({
  "duration": 1252325499,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_AddPostOnFeedStep.i_navigate_to_my_post()"
});
formatter.result({
  "duration": 167658300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_AddPostOnFeedStep.i_enter_the_post_details_in_edit_box_as_Note()"
});
formatter.result({
  "duration": 156115400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_AddPostOnFeedStep.i_click_Post_button()"
});
formatter.result({
  "duration": 5083145501,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_AddPostOnFeedStep.my_post_appears_in_MyPost()"
});
formatter.result({
  "duration": 6452431999,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 108,
      "value": "#\tAs a user i want to search a test course through test generator"
    },
    {
      "line": 109,
      "value": "#using search filter and add the test course to cart"
    }
  ],
  "line": 111,
  "name": "To find the test course and add to cart",
  "description": "",
  "id": "aut:-meritnation;to-find-the-test-course-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 110,
      "name": "@tc_02_FindTest"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "I need to launch the browser and log in with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "I click on purchase",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I Scroll down to test generator",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "select one topic to create test",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click on generate test button",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "I add first Test Course to cart",
  "keyword": "And "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-find-the-test-course-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 120,
      "id": "aut:-meritnation;to-find-the-test-course-and-add-to-cart;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 121,
      "id": "aut:-meritnation;to-find-the-test-course-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 121,
  "name": "To find the test course and add to cart",
  "description": "",
  "id": "aut:-meritnation;to-find-the-test-course-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 110,
      "name": "@tc_02_FindTest"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "I need to launch the browser and log in with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "I click on purchase",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I Scroll down to test generator",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "select one topic to create test",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click on generate test button",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "I add first Test Course to cart",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 58
    },
    {
      "val": "password123",
      "offset": 91
    }
  ],
  "location": "Meritnation_SearchTestAndAddToCartStep.i_need_to_launch_the_browser_and_log_in_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 43502191200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_SearchTestAndAddToCartStep.i_click_on_purchase()"
});
formatter.result({
  "duration": 1550106601,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_SearchTestAndAddToCartStep.i_Scroll_down_to_test_generator()"
});
formatter.result({
  "duration": 2662184901,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_SearchTestAndAddToCartStep.select_one_topic_to_create_test()"
});
formatter.result({
  "duration": 147124199,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_SearchTestAndAddToCartStep.i_click_on_generate_test_button()"
});
formatter.result({
  "duration": 260936500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_SearchTestAndAddToCartStep.i_add_first_Test_Course_to_cart()"
});
formatter.result({
  "duration": 12383214700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 123,
      "value": "#As a user i want to play a tutorial video"
    }
  ],
  "line": 125,
  "name": "To play tutorial video",
  "description": "",
  "id": "aut:-meritnation;to-play-tutorial-video",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@tc_02_PlayVideo"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I log into website with credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I play a tutorial video on topic",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I take Screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click on close button",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I am navigated to homepage",
  "keyword": "And "
});
formatter.examples({
  "line": 132,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;to-play-tutorial-video;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 133,
      "id": "aut:-meritnation;to-play-tutorial-video;;1"
    },
    {
      "cells": [
        "meritnation.test@gmail.com",
        "password123"
      ],
      "line": 134,
      "id": "aut:-meritnation;to-play-tutorial-video;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 134,
  "name": "To play tutorial video",
  "description": "",
  "id": "aut:-meritnation;to-play-tutorial-video;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 124,
      "name": "@tc_02_PlayVideo"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I log into website with credentials \"meritnation.test@gmail.com\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I play a tutorial video on topic",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I take Screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I click on close button",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I am navigated to homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "meritnation.test@gmail.com",
      "offset": 37
    },
    {
      "val": "password123",
      "offset": 70
    }
  ],
  "location": "Meritnation_PlayAVideoStep.i_log_into_website_with_credentials_and(String,String)"
});
formatter.result({
  "duration": 47289500100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_PlayAVideoStep.i_play_a_tutorial_video_on_topic()"
});
formatter.result({
  "duration": 5765057600,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_PlayAVideoStep.i_take_Screenshot()"
});
formatter.result({
  "duration": 1185228500,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_PlayAVideoStep.i_click_on_close_button()"
});
formatter.result({
  "duration": 105927400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_PlayAVideoStep.i_am_navigated_to_homepage()"
});
formatter.result({
  "duration": 6080180500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 137,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "aut:-meritnation;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 136,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "Login to the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I enter the valid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" to signin",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 143,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "email",
        "",
        "password"
      ],
      "line": 144,
      "id": "aut:-meritnation;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "adnanmohd11@gmail.com",
        "",
        "Adnan260896"
      ],
      "line": 145,
      "id": "aut:-meritnation;title-of-your-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 145,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "aut:-meritnation;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 136,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 138,
  "name": "Login to the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I enter the valid \"adnanmohd11@gmail.com\" and \"Adnan260896\" to signin",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginpagestep1.login_to_the_application()"
});
formatter.result({
  "duration": 29179990900,
  "status": "passed"
});
formatter.match({
  "location": "loginpagestep1.i_click_the_login_button()"
});
formatter.result({
  "duration": 136118800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adnanmohd11@gmail.com",
      "offset": 19
    },
    {
      "val": "Adnan260896",
      "offset": 47
    }
  ],
  "location": "loginpagestep1.i_enter_the_valid_and_to_signin(String,String)"
});
formatter.result({
  "duration": 284581399,
  "status": "passed"
});
formatter.match({
  "location": "loginpagestep1.i_click_login_button()"
});
formatter.result({
  "duration": 19998665799,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "To enter name in Myprofilepage and select ADD FRIEND",
  "description": "",
  "id": "aut:-meritnation;to-enter-name-in-myprofilepage-and-select-add-friend",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 147,
      "name": "@Myprofilepage"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "I am logged in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "I click ME link in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I click MYPROFILE link",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Myprofilepage is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I enter the SRAAWYA in Myprofilepage",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "I select the SRAAWYA from various name",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I press enter to see SRAAWYA profile",
  "keyword": "Then "
});
formatter.match({
  "location": "MyprofilepageStep.i_am_logged_in_to_the_website()"
});
formatter.result({
  "duration": 46483183300,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_click_ME_link_in_homepage()"
});
formatter.result({
  "duration": 85382300,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_click_MYPROFILE_link()"
});
formatter.result({
  "duration": 2393446200,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.myprofilepage_is_displayed()"
});
formatter.result({
  "duration": 559906899,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_enter_the_in_Myprofilepage()"
});
formatter.result({
  "duration": 763994600,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_select_the_SRAAWYA_from_various_name()"
});
formatter.result({
  "duration": 579375899,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_press_enter_to_see_SRAAWYA_profile()"
});
formatter.result({
  "duration": 6369458100,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "To enter name in Myprofilepage and select ADD FRIEND",
  "description": "",
  "id": "aut:-meritnation;to-enter-name-in-myprofilepage-and-select-add-friend",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 157,
      "name": "@Myprofilepage"
    }
  ]
});
formatter.step({
  "line": 159,
  "name": "I am logged in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "I click ME link in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "I click MYPROFILE link",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "Myprofilepage is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I enter the name in Myprofilepage",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "I select the SRAAWYA from various name",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "I press enter to see SRAAWYA profile",
  "keyword": "Then "
});
formatter.match({
  "location": "MyprofilepageStep.i_am_logged_in_to_the_website()"
});
formatter.result({
  "duration": 44588998901,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_click_ME_link_in_homepage()"
});
formatter.result({
  "duration": 98306600,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.i_click_MYPROFILE_link()"
});
formatter.result({
  "duration": 1552206800,
  "status": "passed"
});
formatter.match({
  "location": "MyprofilepageStep.myprofilepage_is_displayed()"
});
formatter.result({
  "duration": 1302348099,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MyprofilepageStep.i_select_the_SRAAWYA_from_various_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyprofilepageStep.i_press_enter_to_see_SRAAWYA_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 168,
  "name": "To edit parent details",
  "description": "",
  "id": "aut:-meritnation;to-edit-parent-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 167,
      "name": "@editparentdetails"
    }
  ]
});
formatter.step({
  "line": 169,
  "name": "I click on ADD YOUR ADDRESS link",
  "keyword": "Given "
});
formatter.step({
  "line": 170,
  "name": "I click on parent\u0027s details",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I enter name, Email and MobileNo",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "I click save",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "parent details have been uploaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "EditParentpagestep.i_click_on_ADD_YOUR_ADDRESS_link()"
});
formatter.result({
  "duration": 43198327400,
  "status": "passed"
});
formatter.match({
  "location": "EditParentpagestep.i_click_on_parent_s_details()"
});
formatter.result({
  "duration": 1324504701,
  "status": "passed"
});
formatter.match({
  "location": "EditParentpagestep.i_enter_name_Email_and_MobileNo()"
});
formatter.result({
  "duration": 1936894301,
  "status": "passed"
});
formatter.match({
  "location": "EditParentpagestep.i_click_save()"
});
formatter.result({
  "duration": 93880099,
  "status": "passed"
});
formatter.match({
  "location": "EditParentpagestep.parent_details_have_been_uploaded_successfully()"
});
formatter.result({
  "duration": 4693349300,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "To call customer care support",
  "description": "",
  "id": "aut:-meritnation;to-call-customer-care-support",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 175,
      "name": "@Callme"
    }
  ]
});
formatter.step({
  "line": 177,
  "name": "I click on CALL ME link in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 178,
  "name": "I enter Mobileno",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I click on CALL NOW",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "call is placed to the customer care",
  "keyword": "Then "
});
formatter.match({
  "location": "CallMepagestep.i_click_on_CALL_ME_link_in_homepage()"
});
formatter.result({
  "duration": 42284226200,
  "status": "passed"
});
formatter.match({
  "location": "CallMepagestep.i_enter_Mobileno()"
});
formatter.result({
  "duration": 778950200,
  "status": "passed"
});
formatter.match({
  "location": "CallMepagestep.i_click_on_CALL_NOW()"
});
formatter.result({
  "duration": 53710300,
  "status": "passed"
});
formatter.match({
  "location": "CallMepagestep.call_is_placed_to_the_customer_care()"
});
formatter.result({
  "duration": 4447126700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 183,
      "value": "#teacher account"
    }
  ],
  "line": 185,
  "name": "Login to the application.",
  "description": "",
  "id": "aut:-meritnation;login-to-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 184,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 186,
  "name": "I am on the Homa Page",
  "keyword": "Given "
});
formatter.step({
  "line": 187,
  "name": "I click the login button in the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I enter valid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "I click login button in the loginpage",
  "keyword": "Then "
});
formatter.examples({
  "line": 191,
  "name": "",
  "description": "",
  "id": "aut:-meritnation;login-to-the-application.;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 192,
      "id": "aut:-meritnation;login-to-the-application.;;1"
    },
    {
      "cells": [
        "meritnationteacher.teacher@gmail.com",
        "Teacher@5"
      ],
      "line": 193,
      "id": "aut:-meritnation;login-to-the-application.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 193,
  "name": "Login to the application.",
  "description": "",
  "id": "aut:-meritnation;login-to-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@student"
    },
    {
      "line": 184,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Meritnation"
    }
  ]
});
formatter.step({
  "line": 186,
  "name": "I am on the Homa Page",
  "keyword": "Given "
});
formatter.step({
  "line": 187,
  "name": "I click the login button in the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I enter valid \"meritnationteacher.teacher@gmail.com\" and \"Teacher@5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "I click login button in the loginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.launch_app()"
});
formatter.result({
  "duration": 28295243100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.to_login()"
});
formatter.result({
  "duration": 149677700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meritnationteacher.teacher@gmail.com",
      "offset": 15
    },
    {
      "val": "Teacher@5",
      "offset": 58
    }
  ],
  "location": "Meritnation_test.enter_email_and_pwd(String,String)"
});
formatter.result({
  "duration": 330653300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_login_button()"
});
formatter.result({
  "duration": 4625109800,
  "status": "passed"
});
formatter.scenario({
  "line": 196,
  "name": "selecting a subject to view the NCERT solution",
  "description": "",
  "id": "aut:-meritnation;selecting-a-subject-to-view-the-ncert-solution",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 195,
      "name": "@tc_02_view_NCERT_solution"
    }
  ]
});
formatter.step({
  "line": 197,
  "name": "I logged in to the application \u0026 I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 198,
  "name": "I click the subject",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "I navigate to study page",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I click the topic",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I click the view NCERT solution",
  "keyword": "Then "
});
formatter.step({
  "line": 202,
  "name": "I take screenshot of the solution",
  "keyword": "And "
});
formatter.match({
  "location": "Meritnation_test.navigate_to_Homepage()"
});
formatter.result({
  "duration": 42247884900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_subject()"
});
formatter.result({
  "duration": 2752692400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.navigate_to_Studypage()"
});
formatter.result({
  "duration": 33882900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_topic()"
});
formatter.result({
  "duration": 2479807000,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.view_ncert_solution()"
});
formatter.result({
  "duration": 195723700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.take_screenshot()"
});
formatter.result({
  "duration": 1870454700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 204,
      "value": "#I want to select IIT-JEE \u0026 NEET from the Entrance Exams"
    },
    {
      "line": 205,
      "value": "#and I can select revision notes \u0026 best books"
    },
    {
      "line": 206,
      "value": "#So that I can download \u0026 take screenshot respectively"
    }
  ],
  "line": 208,
  "name": "select IIT-JEE to download revision notes",
  "description": "",
  "id": "aut:-meritnation;select-iit-jee-to-download-revision-notes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 207,
      "name": "@download_RevisionNotes"
    }
  ]
});
formatter.step({
  "line": 209,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "I click the IIT-JEE from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "I click the motion topic",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I click the view revision notes button",
  "keyword": "Then "
});
formatter.step({
  "line": 213,
  "name": "I click the download button",
  "keyword": "And "
});
formatter.match({
  "location": "Meritnation_test.HomePage()"
});
formatter.result({
  "duration": 13025800100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.IIT_JEE()"
});
formatter.result({
  "duration": 33446201300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_motion_topic()"
});
formatter.result({
  "duration": 2931547300,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_revisionNotes()"
});
formatter.result({
  "duration": 185863100,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.download_revnotes()"
});
formatter.result({
  "duration": 2006103500,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "select IITJEE to know the important books",
  "description": "",
  "id": "aut:-meritnation;select-iitjee-to-know-the-important-books",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 215,
      "name": "@Science-practical"
    }
  ]
});
formatter.step({
  "line": 217,
  "name": "Iam logged in to application \u0026 I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 218,
  "name": "I click the IITJEE from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 219,
  "name": "I click Science-practicals and take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.navigate_to_homepage()"
});
formatter.result({
  "duration": 44830400200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.IITJEE()"
});
formatter.result({
  "duration": 2013669000,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.science_practicals()"
});
formatter.result({
  "duration": 9622440900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 221,
      "value": "#I want to explore the take a break page"
    },
    {
      "line": 222,
      "value": "#and click the daily teaser"
    },
    {
      "line": 223,
      "value": "#So that I can see solution for yesterday\u0027s teaser"
    }
  ],
  "line": 225,
  "name": "take a break page",
  "description": "",
  "id": "aut:-meritnation;take-a-break-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 224,
      "name": "@Take-a-break"
    }
  ]
});
formatter.step({
  "line": 226,
  "name": "I am in the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 227,
  "name": "I click on the take a break",
  "keyword": "When "
});
formatter.step({
  "line": 228,
  "name": "I click on the daily teaser",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "I click on the view solution for yesterday\u0027s teaser",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.In_hoempage()"
});
formatter.result({
  "duration": 43022764900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_on_tab()"
});
formatter.result({
  "duration": 2670047800,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_on_dailyteaser()"
});
formatter.result({
  "duration": 1405987400,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.click_on_view_solution_of_yesterday_sol()"
});
formatter.result({
  "duration": 4778298900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 231,
      "value": "#I want to explore the discover yourself"
    },
    {
      "line": 232,
      "value": "#and I click the career guidance and field options"
    },
    {
      "line": 233,
      "value": "#So that I can take the screenshots"
    }
  ],
  "line": 235,
  "name": "explore discover your self",
  "description": "",
  "id": "aut:-meritnation;explore-discover-your-self",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 234,
      "name": "@Discover-your-self"
    }
  ]
});
formatter.step({
  "line": 236,
  "name": "I need to be in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 237,
  "name": "I click career guidance option from Discover your self",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I click on the medical field",
  "keyword": "Then "
});
formatter.step({
  "line": 239,
  "name": "I take the screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "Meritnation_test.in_homepage()"
});
formatter.result({
  "duration": 11843088700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.career_guidance()"
});
formatter.result({
  "duration": 33349353900,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.medical_field()"
});
formatter.result({
  "duration": 1446479700,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.screenshot()"
});
formatter.result({
  "duration": 4557137600,
  "status": "passed"
});
formatter.scenario({
  "line": 242,
  "name": "take screenshots",
  "description": "",
  "id": "aut:-meritnation;take-screenshots",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 241,
      "name": "@skill-builder"
    }
  ]
});
formatter.step({
  "line": 243,
  "name": "I am on the career guidance page",
  "keyword": "Given "
});
formatter.step({
  "line": 244,
  "name": "I click on the skill builder",
  "keyword": "When "
});
formatter.step({
  "line": 245,
  "name": "I click on speaking in public and take a screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.on_careerguidance_page()"
});
formatter.result({
  "duration": 42685725200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.skill_builder()"
});
formatter.result({
  "duration": 3488104200,
  "status": "passed"
});
formatter.match({
  "location": "Meritnation_test.speaking_in_public()"
});
formatter.result({
  "duration": 5911118500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 247,
      "value": "#I want to add students to the existing batch in the profile page"
    },
    {
      "line": 248,
      "value": "#and i want to logout from the application"
    }
  ],
  "line": 250,
  "name": "adding students to existing batch and logout from the application",
  "description": "",
  "id": "aut:-meritnation;adding-students-to-existing-batch-and-logout-from-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 249,
      "name": "@add-students\u0026logout"
    }
  ]
});
formatter.step({
  "line": 251,
  "name": "I am on the home page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 252,
  "name": "I add students to the existing batch",
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "I logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Meritnation_test.home_page_of_application()"
});
formatter.result({
  "duration": 26337921200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to parse value of getElementRegion\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LFJQBRS\u0027, ip: \u0027192.168.0.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\SRAAWYA CH\\AppData...}, goog:chromeOptions: {debuggerAddress: localhost:56776}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 13e279cca01b25968e10699008a38b10\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.seleniumutil.seleniumutil.close_popup(seleniumutil.java:37)\r\n\tat com.StepDefinition.Meritnation_test.home_page_of_application(Meritnation_test.java:294)\r\n\tat ✽.Given I am on the home page of the application(C:/Users/SRAAWYA CH/git/Cognizant_Project/Meritnation/src/test/resources/Features/Meritnation.feature:251)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Meritnation_test.add_students_to_existing_batch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Meritnation_test.logout_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
});