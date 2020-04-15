package com.StepDefinition;

import org.openqa.selenium.By;

import com.baseclass.library;
import com.pages.login_page;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginpagestep1 extends library {

	//WebDriver driver;
	login_page lp0;
	seleniumutil util0;
	
	@Given("^Login to the application\\.$")
	public void login_to_the_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		lp0= new login_page(driver);
		launchapp();
		util0= new seleniumutil(driver);
		util0.close_popup();
		//Below line of code is to be uncommented when chatbot pops up on the website
		// driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		
	    
	}

	@Given("^I click the login button$")
	public void i_click_the_login_button() throws Throwable {
		 lp0= new login_page(driver);
	    lp0.click_login_link();
	    
	}

	@When("^I enter the valid \"([^\"]*)\" and \"([^\"]*)\" to signin$")
	public void i_enter_the_valid_and_to_signin(String email, String password) throws Throwable {
		 lp0= new login_page(driver);
		   lp0.do_login(email, password);
	}

	@Then("^I click login button$")
	public void i_click_login_button() throws Throwable {
		 lp0= new login_page(driver);
		 lp0.click_login();
		 util0 = new seleniumutil(driver);
		 util0.takeSnapShot("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\ParentLoginSuccess.png");

		 util0= new seleniumutil(driver);
		 util0.close_popup2();
		 driver.close();
		 
	}

}
