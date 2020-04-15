package com.StepDefinition;

import java.io.IOException;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.excelutility.excelUtil;
import com.pages.Meritnation_EditProfile;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Meritnation_editprofileStep extends library {
	
	Meritnation_EditProfile profile;
	seleniumutil util;
	Logger log = Logger.getLogger("Logger");
	excelUtil ex = new excelUtil(); 
	
//@tc_01_login	
@Given("^I need to launch the browser$")
public void i_need_to_launch_the_browser() throws InterruptedException {
	
	launchapp();
	
	util = new seleniumutil(driver);
	util.close_popup();	
	
	log.info("user launches the browser");
}


@Given("^I am on the homepage$")
public void i_am_on_the_homepage() {
	log.info("User is on the homepage");
}

@Given("^I click on the login link$")
public void i_click_on_the_login_link() throws IOException {
	
	profile = new Meritnation_EditProfile(driver);
	profile.clickLoginLink();
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\ClickedLoginLink.png");
	log.info("user is on the login page");
}


@When("^I enter the valid \"([^\"]*)\" and \"([^\"]*)\"$")
public void i_enter_the_valid_and(String username, String password) 
{
	profile = new Meritnation_EditProfile(driver);
	profile.enterDetails(username, password);	

	log.info("user enters the valid username and password");
}


@Then("^I click on the login button$")
public void i_click_on_the_login_button0() throws IOException {
	
	profile = new Meritnation_EditProfile(driver);
	profile.clickLoginBtn();
	
	util.close_popup2();
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\StudentLoginSuccess.png");
	
	browser_close();
	
	log.info("user is logged in to the website and closes the browser");
	
}

//@tc_02_editprofile
@Given("^I log in with credentials \"([^\"]*)\" and \"([^\"]*)\"$")
public void i_log_in_with_credentials_and(String username, String password) {
	launchapp();
	util = new seleniumutil(driver);
	util.close_popup();
	
	profile = new Meritnation_EditProfile(driver);
	profile.clickLoginLink();
	profile.enterDetails(username, password);
	profile.clickLoginBtn();
	
	util.close_popup2();	
	log.info("user is logged in to the website ");
	
}
@Given("^I click on profile icon$")
public void i_click_on_profile_icon() {
	profile = new Meritnation_EditProfile(driver);
	profile.clickProfileIcon();
	
	log.info("user clicks on profile icon");
}

@Given("^click on My Account$")
public void click_on_My_Account() {
	
	profile = new Meritnation_EditProfile(driver);
	profile.clickMyAccount();
	
	log.info("user clicks on my account");
}


@When("^I  navigate to profile page$")
public void i_navigate_to_profile_page1() throws IOException {
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\NavigateToProfilePage.png");
	log.info("user navigates to profile page");
}

@When("^I click on Edit profile$")
public void i_click_on_Edit_profile() {
	
	profile = new Meritnation_EditProfile(driver);
	profile.clickEditProfile();
	
	log.info("user clicks on edit profile");
}

@Then("^I change password with newPassword$")
public void i_change_password_with_newPassword() throws IOException {
	
	profile = new Meritnation_EditProfile(driver);
	
	String password = ex.excel_read(6, 1);
	String newPassword = ex.excel_read(6, 2);
	profile.changePassword(password, newPassword); 			//if password changed,update login in other testcases with new password

	util = new seleniumutil(driver);
	sleep(3000);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\UpdatePasswordSuccess.png");
	browser_close();
	
	log.info("user changes password and updates the account details ");
	
	
}


//@tc_03_editprofile
@Then("^I update account details with emailId and grade$")
public void i_update_account_details_with_emailId_and_grade() throws IOException {
	
	profile = new Meritnation_EditProfile(driver);

	String alter_emailid = ex.excel_read(8,1);
	String grade = ex.excel_read(8, 2);
	profile.updateAccountDetails(alter_emailid, grade);
	
	util = new seleniumutil(driver);
	sleep(3000);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\UpdateAccountDetailsSuccess.png");
	browser_close();
	
	log.info("User updates account details with school name and Grade");
	
}


@Then("^I click save button$")
public void i_click_save_button() {
	log.info("user clicks save button");
}


//@tc_03_editprofile
@When("^I navigate to profile page$")
public void i_navigate_to_profile_page() {
	
	profile = new Meritnation_EditProfile(driver);
	profile.clickProfileIcon();
	profile.clickMyAccount();
	profile.clickEditProfile();
	
	log.info("user navigates to profile page");
}


@Then("^I update my personal details with DOB and State$")
public void i_update_my_personal_details_with_DOB_and_State() throws IOException {
	profile = new Meritnation_EditProfile(driver);
	
	String State = ex.excel_read(10,2);
	profile.updatePersonalDetails("22-05-1998",State);
	util = new seleniumutil(driver);
	sleep(3000);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\UpdatePersonalDetails.png");
	log.info("user updates personal details");	
}



//@tc_04_editprofile
@Then("^I update my School details with SchoolName$")
public void i_update_my_School_details_with_SchoolName() throws IOException {
	profile = new Meritnation_EditProfile(driver);
	String schoolName = ex.excel_read(12,1);
	profile.updateSchoolDetails(schoolName);
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\UpdateSchoolDetailsSuccess.png");
	
	browser_close();
	
	log.info("user updates school details");
}


//@tc_05_editprofile
@Then("^I update parent details with parentName , parentEmailId and MobileNo.$")
public void i_update_parent_details_with_parentName_parentEmailId_and_MobileNo() throws IOException {
	profile = new Meritnation_EditProfile(driver);
	String parentName = ex.excel_read(14,1);
	String parentEmailId = ex.excel_read(14,2);
	profile.updateParentDetails(parentName, parentEmailId, "9874632145");
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\UpdateParentDetailsSuccess.png");
	
	browser_close();
	
	log.info("user updates parent's details");

}

//@tc_06_logout
@Then("^I click on logout button$")
public void i_click_on_logout_button() {
	profile = new Meritnation_EditProfile(driver);
	profile.logout();
	
	log.info("user clicks on logout button");
}

@Then("^I am logged out$")
public void i_am_logged_out() throws IOException {
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\LogoutSuccess.png");
	
	browser_close();
	log.info("user is logged out of the account");
}


}