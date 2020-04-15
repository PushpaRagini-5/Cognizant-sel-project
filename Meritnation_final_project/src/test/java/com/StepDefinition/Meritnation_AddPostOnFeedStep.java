package com.StepDefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.excelutility.excelUtil;
import com.pages.MeritnationAddPostOnFeed;
import com.pages.Meritnation_EditProfile;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Meritnation_AddPostOnFeedStep extends library {

	seleniumutil util;	
	MeritnationAddPostOnFeed feed ; 
	Logger log = Logger.getLogger("Logger");	
	excelUtil ex = new excelUtil(); 
	
	//tc_02_FeedPage
	@Given("^I log into the website with credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_log_into_the_website_with_credentials_and(String username, String password) throws Throwable {
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		
		Meritnation_EditProfile profile = new Meritnation_EditProfile(driver);
		profile.clickLoginLink();
		profile.enterDetails(username, password);
		profile.clickLoginBtn();
		
		util.close_popup2();	
		log.info("user is logged in to the website ");
	}
	

	@When("^I click on Feed from homepage title bar$")
	public void i_click_on_Feed_from_homepage_title_bar() {
		
		feed = new MeritnationAddPostOnFeed(driver);
		feed.clickFeedPage();
		
		log.info("user clicks on feed from navigation bar");
	}

	@When("^I navigate to Feed Page$")
	public void i_navigate_to_Feed_Page() throws IOException {
		util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\FeedPage.PNG");
		
		log.info("user is navigated to feed page");
		
	}

	@When("^I navigate to my post$")
	public void i_navigate_to_my_post() {
		
		feed = new MeritnationAddPostOnFeed(driver);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		feed.clickMypost();
		log.info("user clicks on my post tab");
	}

	@Then("^I enter the post details in edit box as Note$")
	public void i_enter_the_post_details_in_edit_box_as_Note() throws IOException {
		feed = new MeritnationAddPostOnFeed(driver);
		String Notes = ex.excel_read(16,1);
		feed.writePostInEditbox("The post is made");
		
		log.info("user enters the post details");
		
	}


	@Then("^I click Post button$")
	public void i_click_Post_button() throws Throwable {
		feed = new MeritnationAddPostOnFeed(driver);
		feed.clickMypost();
		sleep(5000);
		
		log.info("user clicks on post button");
	}

	@Then("^My post appears in MyPost$")
	public void my_post_appears_in_MyPost() throws IOException {
		
		util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\PostSuccess.PNG");
		browser_close();
		
		log.info("user posts on the feed");
		
		
	}


	

}
