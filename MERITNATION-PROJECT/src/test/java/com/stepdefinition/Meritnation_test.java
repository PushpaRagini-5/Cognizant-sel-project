package com.stepdefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.testng.Assert;

import com.baseclass.libraryclass;
import com.excelutility.ExcelLogin;
import com.pages.Meritnation;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Meritnation_test extends libraryclass{
		Meritnation merit;
		seleniumutil util;
		ExcelLogin el = new ExcelLogin(driver);
		
		//NCERTSolutions test
		//@tc_01_login
		@Given("^I am on the Homa Page$")
		public void launch_app() throws IOException{
			launchapp();
			util = new seleniumutil(driver);
			util.close_popup();
		}
		@Given("^I click the login button$")
		public void to_login() {
			merit = new Meritnation(driver);
			merit.Meritnation_to_login();
		}
		@When("^I enter the valid \"([^\"]*)\" and \"([^\"]*)\"$")
		public void enter_email_and_pwd(String email, String password) {
			merit = new Meritnation(driver);
			merit.meritnation_teacher_acc_email_password(email, password);
		}
		@Then("^I click login button$")
		public void click_login_button() {
			merit = new Meritnation(driver);
			//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			merit.click_login();
			driver.close();	
		}
		
		//@tc_02_view_NCERT_solution
		@Given("^I logged in to the application & I am on Home Page$") 
		public void navigate_to_Homepage() throws Throwable {
			launchapp();
			util = new seleniumutil(driver);
			util.close_popup();
			merit = new Meritnation(driver);
			merit.Meritnation_to_login();
			merit.meritnation_teacher_acc_email_password(el.excel_username(1), el.excel_password(1));
			//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			merit.click_login();
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	util.close_popup2();
			
		}
		@When("^I click the subject$")
		public void click_subject() throws Throwable {
			merit = new Meritnation(driver);
			merit.click_subject_icon(); 
		}
		@When("^I navigate to study page$")
		public void navigate_to_Studypage() throws Throwable {
			String act_title = driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/h1")).getText();
			Assert.assertEquals(act_title, "Study Material");
		}
		@When("I click the topic$")
		public void click_topic() throws Throwable {
			merit = new Meritnation(driver);
			merit.click_topic();
		}
		@Then("^I click the view NCERT solution$")
		public void view_ncert_solution() throws Throwable {
			merit = new Meritnation(driver);
			merit.click_View_NCERT_Solutions();
		}
		@Then("^I take screenshot of the solution$")
		public void take_screenshot() throws Throwable {
			util = new seleniumutil(driver);
			util.takeSnapShot("C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\screenshots\\NCERT_Solutions.png");
			driver.close();
		}
	
	//Entrance exams test
	
	@Given("^I am on the HomePage$")
	public void HomePage() throws IOException {
		launchapp();
	}
	@When("^I click the IIT-JEE from the dropdown$")
	public void IIT_JEE() throws IOException {
		
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password(el.excel_username(1), el.excel_password(1));
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();

		merit = new Meritnation(driver);
		merit.click_IITJEE();
	}
	@When("^I click the motion topic$")
	public void click_motion_topic() {
		merit = new Meritnation(driver);
		merit.click_motion_topic();
	}
	@Then("^I click the view revision notes button$")
	public void click_revisionNotes() {
		merit = new Meritnation(driver);
		merit.click_viewRevisionNotes();
	}
	@Then("^I click the download button$")
	public void download_revnotes() {
		merit = new Meritnation(driver);
		merit.click_download();
		driver.close();
	}
	
	//@Science-practicals
	@Given("^Iam logged in to application & I am on the Home Page$")
	public void navigate_to_homepage() throws IOException {
    	launchapp();
    	util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password(el.excel_username(1), el.excel_password(1));
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
    	}
	@When("^I click the IITJEE from the dropdown$")
	public void IITJEE() {
		merit = new Meritnation(driver);
		merit.click_IIT_JEE();
	}
	@Then("^I click Science-practicals and take screenshot$")
	public void science_practicals() {
		merit = new Meritnation(driver);
		merit.click_Science_practicals();
		
		util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\screenshots\\science_practicals.png");
		driver.close();
	}


	
	//Take-a-break test
	
	@Given("^I am in the HomePage$")
	public void In_hoempage() throws IOException {
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password(el.excel_username(1), el.excel_password(1));
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
	}
	@When("^I click on the take a break$")
	public void click_on_tab() {
		merit = new Meritnation(driver);
		merit.click_take_a_break();
	}
	@When("^I click on the daily teaser$")
	public void click_on_dailyteaser() {
		merit = new Meritnation(driver);
		merit.click_daily_teaser();
	}
	@Then("^I click on the view solution for yesterday's teaser$")
	public void click_on_view_solution_of_yesterday_sol() {
		merit = new Meritnation(driver);
		merit.click_yesterday_teaser();
		driver.close();
	}
	
	//Discover your self test
	
	@Given("^I need to be in Home Page$")
	public void in_homepage() throws IOException{
		launchapp();
	}
	@When("^I click career guidance option from Discover your self$")
	public void career_guidance() {
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password("meritnationteacher.teacher@gmail.com", "Teacher@5");
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	util.close_popup2();
		merit = new Meritnation(driver);
		merit.click_career_guidance();
	}
	@When("^I click on the medical field$")
	public void medical_field() {
		merit = new Meritnation(driver);
		merit.click_medical();
	}
	@Then("^I take the screenshot$")
	public void screenshot() {
		util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\screenshots\\careerguidance.png");
		driver.close();
	}
	
	//@skill-builder
	@Given("^I am on the career guidance page$")
	public void on_careerguidance_page() throws IOException{
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password("meritnationteacher.teacher@gmail.com", "Teacher@5");
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
	}
	@When("^I click on the skill builder$")
	public void skill_builder() {
		merit = new Meritnation(driver);
		merit.click_career_guidance();
		merit.click_skillbuilder();
	}
	@Then("^I click on speaking in public and take a screenshot$")
	public void speaking_in_public() {
		merit = new Meritnation(driver);
		merit.click_speak_in_public();
		
		util = new seleniumutil(driver);
		util.takeSnapShot("C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\screenshots\\skillbuilder.png");
		driver.close();
	}
	
	//adding students to the existing batch and logout from the application
	@Given("^I am on the home page of the application$")
	public void home_page_of_application() throws IOException {
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password("meritnationteacher.teacher@gmail.com", "Teacher@5");
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
	}

	@When("^I add students to the existing batch$")
	public void add_students_to_existing_batch() {
		merit.click_profile();
		merit.add_students();
	}
	
	@Then("^I logout from the application$")
	public void logout_from_the_application() {
		merit.click_logout();
		driver.close();
	}
}


