package com.StepDefinition;

import org.openqa.selenium.By;

import com.baseclass.library;
import com.excelutility.excelUtil;
import com.pages.Call_Me_page;
import com.pages.home_page;
import com.pages.login_page;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CallMepagestep extends library{

	//WebDriver driver;
	
	home_page hp0;
	
	Call_Me_page cp0;
	
	seleniumutil util0;
	
	login_page lp0;
	
	excelUtil ex = new excelUtil();
	
	@Given("^I click on CALL ME link in homepage$")
	public void i_click_on_CALL_ME_link_in_homepage() throws Throwable {
		
		 launchapp();
		    util0= new seleniumutil(driver);
			util0.close_popup();
			  lp0= new login_page(driver);
			lp0.click_login_link();
			lp0.do_login("adnanmohd11@gmail.com", "Adnan260896");
			//Below line of code is to be uncommented when chatbot pops up on the website
			//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			lp0.click_login();
			util0.close_popup2();
		hp0= new home_page(driver);
		
		hp0.click_CALL_ME();
		
		
	   
	}

	@When("^I enter Mobileno$")
	public void i_enter_Mobileno() throws Throwable {
		cp0= new Call_Me_page(driver);
	    cp0.enter_phone_no("9949399521");
	    util0= new seleniumutil(driver);
		util0.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\EnterMobileNumber.png");
		 
	}

	@When("^I click on CALL NOW$")
	public void i_click_on_CALL_NOW() throws Throwable {
		cp0= new Call_Me_page(driver);
		cp0.click_call_now();
	}

	@Then("^call is placed to the customer care$")
	public void call_is_placed_to_the_customer_care() throws Throwable {
		
		util0= new seleniumutil(driver);
		util0.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\CallSuccess.png");
		
	    driver.close();
	}


}
