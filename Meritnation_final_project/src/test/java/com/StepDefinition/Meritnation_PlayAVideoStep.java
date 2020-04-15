package com.StepDefinition;

import org.apache.log4j.Logger;

import com.baseclass.library;
import com.pages.MeritnationPlayAVideo;
import com.pages.Meritnation_EditProfile;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Meritnation_PlayAVideoStep extends library {

	MeritnationPlayAVideo test ; 
	seleniumutil util;
	Logger log = Logger.getLogger("Logger");
	


@Given("^I log into website with credentials \"([^\"]*)\" and \"([^\"]*)\"$")
public void i_log_into_website_with_credentials_and(String username, String password) {
launchapp();
	
	util = new seleniumutil(driver);
	util.close_popup();
	
	Meritnation_EditProfile profile = new Meritnation_EditProfile(driver);
	profile.clickLoginLink();
	profile.enterDetails(username, password);
	profile.clickLoginBtn();
	
	util.close_popup2();
	
	log.info("user is on homepage ");
	
	
}	

@When("^I play a tutorial video on topic$")
public void i_play_a_tutorial_video_on_topic() throws Throwable {
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\HomePage.png");
	
	test = new MeritnationPlayAVideo(driver);
	test.playVideo();
	sleep(5000);
	
	log.info("user plays a video ");
}

@When("^I take Screenshot$")
public void i_take_Screenshot() throws Throwable {
	
	util = new seleniumutil(driver);
	util.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\Tutorial.png");
	log.info("user takes screenshot of the video ");
}
   

@Then("^I click on close button$")
public void i_click_on_close_button() throws Throwable {
	
	test = new MeritnationPlayAVideo(driver);
	test.stopVideo();
	
	log.info("user closes the video ");
   
}

@Then("^I am navigated to homepage$")
public void i_am_navigated_to_homepage() throws Throwable {
	
	browser_close();
	log.info("user closes the browser ");
	
}


}
