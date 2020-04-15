package com.StepDefinition;

import org.openqa.selenium.By;

import com.baseclass.library;
import com.excelutility.excelUtil;
import com.pages.EditParent_page;
import com.pages.home_page;
import com.pages.login_page;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EditParentpagestep extends library {
	
	//WebDriver driver;
	
	home_page hp0;
	
	EditParent_page epp0;
	
	seleniumutil util0;
	
	login_page lp0;

	excelUtil ex = new excelUtil();

	@Given("^I click on ADD YOUR ADDRESS link$")
	public void i_click_on_ADD_YOUR_ADDRESS_link() throws Throwable {
		  launchapp();
		    util0= new seleniumutil(driver);
			util0.close_popup();
			 lp0= new login_page(driver);
			lp0.click_login_link();
			lp0.do_login("adnanmohd11@gmail.com", "Adnan260896");
			//Below line of code is to be uncommented when chatbot pops up on the website
		//	driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			lp0.click_login();
			util0.close_popup2();
		
		hp0= new home_page(driver);
		
		hp0.click_Add_address();
		
	   
	}

	@Given("^I click on parent's details$")
	public void i_click_on_parent_s_details() throws Throwable {

		epp0= new EditParent_page(driver);
		
		epp0.Select_parent_details();
	}

	@When("^I enter name, Email and MobileNo$")
	public void i_enter_name_Email_and_MobileNo() throws Throwable {
		epp0= new EditParent_page(driver);
		String name = ex.excel_read(20,1);
		String Email = ex.excel_read(20, 2);
		epp0.edit_profile(name, Email, "9949388471");
	}

	@When("^I click save$")
	public void i_click_save() throws Throwable {
		epp0= new EditParent_page(driver);
		
		epp0.click_save_button();
	}

	@Then("^parent details have been uploaded successfully$")
	public void parent_details_have_been_uploaded_successfully() throws Throwable {
	  util0= new seleniumutil(driver);
	  util0.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\ParentDetailsUploadSuccess.png");
	  driver.close();
	}

}
