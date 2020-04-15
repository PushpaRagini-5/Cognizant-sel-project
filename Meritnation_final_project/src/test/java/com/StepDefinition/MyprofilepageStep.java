
package com.StepDefinition;

import com.baseclass.library;
import com.excelutility.excelUtil;
import com.pages.MyProfilePage;
import com.pages.home_page;
import com.pages.login_page;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyprofilepageStep extends library {
	
//WebDriver driver;

login_page lp0;

home_page hp0;

MyProfilePage mp0;

seleniumutil util0;

excelUtil ex = new excelUtil();

	@Given("^I am logged in to the website$")
	public void i_am_logged_in_to_the_website() throws Throwable {
		
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
	  	    
	}
	    

	@Given("^I click ME link in homepage$")
	public void i_click_ME_link_in_homepage() throws Throwable {
		hp0= new home_page(driver);
	   hp0.click_ME();
	}

	@Given("^I click MYPROFILE link$")
	public void i_click_MYPROFILE_link() throws Throwable {
		hp0= new home_page(driver);
		hp0.click_MYPROFILE();
	   	}

	@Given("^Myprofilepage is displayed$")
	public void myprofilepage_is_displayed() throws Throwable {
	    driver.get("https://www.meritnation.com/parent/41687319");
	}

	@When("^I enter the SRAAWYA in Myprofilepage$")
	public void i_enter_the_in_Myprofilepage() throws Throwable {
		mp0= new MyProfilePage(driver);
		String name = ex.excel_read(18,1);
		mp0.enter_friendname(name);
		
	}
	

	@When("^I select the SRAAWYA from various name$")
	public void i_select_the_SRAAWYA_from_various_name() throws Throwable {
		mp0= new MyProfilePage(driver);
		mp0.select_friend_name();
	}

	@Then("^I press enter to see SRAAWYA profile$")
	public void i_press_enter_to_see_SRAAWYA_profile() throws Throwable {
		mp0= new MyProfilePage(driver);
		mp0.press_enterkey();
		util0= new seleniumutil(driver);
		util0.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\FriendRequestSent.png");
	
		driver.close();
	}


}

