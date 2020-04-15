package com.StepDefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import com.baseclass.library;
import com.excelutility.excelUtil;
import com.pages.Meritnation_new;
import com.seleniumutil.seleniumutil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Meritnation_test extends library{
	 Meritnation_new merit;
		seleniumutil util;
		excelUtil el = new excelUtil() ;
		//NCERTSolutions test
		//@tc_01_login
		@Given("^I am on the Homa Page$")
		public void launch_app() throws IOException{
			launchapp();
			util = new seleniumutil(driver);
			util.close_popup();
		}
		@Given("^I click the login button in the homepage$")
		public void to_login() {
			merit = new Meritnation_new(driver);
			merit.Meritnation_to_login();
		}
		@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
		public void enter_email_and_pwd(String email, String password) {
			merit = new Meritnation_new(driver);
			merit.meritnation_teacher_acc_email_password(email, password);
		}
		@Then("^I click login button in the loginpage$")
		public void click_login_button() throws IOException {
			merit = new Meritnation_new(driver);
			//Below line of code is to be uncommented when chatbot pops up on the website
			//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			merit.click_login();
			
			util = new seleniumutil(driver);
			util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\TeacherLoginSuccess.png");
			driver.close();	
		}
		
		//@tc_02_view_NCERT_solution
		@Given("^I logged in to the application & I am on Home Page$") 
		public void navigate_to_Homepage() throws Throwable {
			launchapp();
			util = new seleniumutil(driver);
			util.close_popup();
			merit = new Meritnation_new(driver);
			merit.Meritnation_to_login();
			String username = el.excel_read(2,1);
			String password = el.excel_read(2,2);
			merit.meritnation_teacher_acc_email_password(username, password);
			//Below line of code is to be uncommented when chatbot pops up on the website
			//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
			merit.click_login();
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	util.close_popup2();
			
		}
		@When("^I click the subject$")
		public void click_subject() throws Throwable {
			merit = new Meritnation_new(driver);
			merit.click_subject_icon(); 
			util = new seleniumutil(driver);
			util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\ClickSubject.png");
			
		}
		@When("^I navigate to study page$")
		public void navigate_to_Studypage() throws Throwable {
			String act_title = driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/h1")).getText();
			Assert.assertEquals(act_title, "Study Material");
		}
		@When("I click the topic$")
		public void click_topic() throws Throwable {
			merit = new Meritnation_new(driver);
			merit.click_topic();
		}
		@Then("^I click the view NCERT solution$")
		public void view_ncert_solution() throws Throwable {
			merit = new Meritnation_new(driver);
			merit.click_View_NCERT_Solutions();
		}
		@Then("^I take screenshot of the solution$")
		public void take_screenshot() throws Throwable {
			util = new seleniumutil(driver);
			util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\NCERT_Solutions.png");
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
		merit = new Meritnation_new(driver);
		merit.Meritnation_to_login();
		String username = el.excel_read(2,1);
		String password = el.excel_read(2,2);
		merit.meritnation_teacher_acc_email_password(username, password);
		//Below line of code is to be uncommented when chatbot pops up on the website
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();

		merit = new Meritnation_new(driver);
		merit.click_IITJEE();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\ClickIITJEE.png");
		
		
	}
	@When("^I click the motion topic$")
	public void click_motion_topic() {
		merit = new Meritnation_new(driver);
		merit.click_motion_topic();
	}
	@Then("^I click the view revision notes button$")
	public void click_revisionNotes() {
		merit = new Meritnation_new(driver);
		merit.click_viewRevisionNotes();
	}
	@Then("^I click the download button$")
	public void download_revnotes() {
		merit = new Meritnation_new(driver);
		merit.click_download();
		driver.close();
	}
	
	//@Science-practical
	@Given("^Iam logged in to application & I am on the Home Page$")
	public void navigate_to_homepage() throws IOException {
    	launchapp();
    	util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation_new(driver);
		merit.Meritnation_to_login();
		String username = el.excel_read(2,1);
		String password = el.excel_read(2,2);
		merit.meritnation_teacher_acc_email_password(username, password);
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\CredentialsFromExcel.png");
		//	driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
    	}
	@When("^I click the IITJEE from the dropdown$")
	public void IITJEE() {
		merit = new Meritnation_new(driver);
		merit.click_IIT_JEE();
		
	}
	@Then("^I click Science-practicals and take screenshot$")
	public void science_practicals() throws IOException {
		merit = new Meritnation_new(driver);
		merit.click_Science_practicals();
		
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\science_practicals.png");
		driver.close();
	}


	
	//Take-a-break test
	
	@Given("^I am in the HomePage$")
	public void In_hoempage() throws IOException {
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation_new(driver);
		merit.Meritnation_to_login();
		String username = el.excel_read(2,1);
		String password = el.excel_read(2,2);
		merit.meritnation_teacher_acc_email_password(username, password);
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
	}
	@When("^I click on the take a break$")
	public void click_on_tab() throws IOException {
		merit = new Meritnation_new(driver);
		merit.click_take_a_break();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\TakeABreak.png");
	
		
	}
	@When("^I click on the daily teaser$")
	public void click_on_dailyteaser() {
		merit = new Meritnation_new(driver);
		merit.click_daily_teaser();
	}
	@Then("^I click on the view solution for yesterday's teaser$")
	public void click_on_view_solution_of_yesterday_sol() throws IOException {
		merit = new Meritnation_new(driver);
		merit.click_yesterday_teaser();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\TeaserSolution.png");
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
		merit = new Meritnation_new(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password("meritnationteacher.teacher@gmail.com", "Teacher@5");
	//	driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	util.close_popup2();
		merit = new Meritnation_new(driver);
		merit.click_career_guidance();
	}
	@When("^I click on the medical field$")
	public void medical_field() throws IOException {
		merit = new Meritnation_new(driver);
		merit.click_medical();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\ClickMedical.png");
		
	}
	@Then("^I take the screenshot$")
	public void screenshot() throws IOException {
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\careerguidance.png");
		driver.close();
	}
	
	//@skill-builder
	@Given("^I am on the career guidance page$")
	public void on_careerguidance_page() throws IOException{
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation_new(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password("meritnationteacher.teacher@gmail.com", "Teacher@5");
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
	}
	@When("^I click on the skill builder$")
	public void skill_builder() throws IOException {
		merit = new Meritnation_new(driver);
		merit.click_career_guidance();
		merit.click_skillbuilder();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\Clickskillbuilder.png");
		
	}
	@Then("^I click on speaking in public and take a screenshot$")
	public void speaking_in_public() throws IOException {
		merit = new Meritnation_new(driver);
		merit.click_speak_in_public();
		
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\skillbuilder.png");
		driver.close();
	}
	
	//adding students to the existing batch and logout from the application
	@Given("^I am on the home page of the application$")
	public void home_page_of_application() throws IOException {
		launchapp();
		util = new seleniumutil(driver);
		util.close_popup();
		merit = new Meritnation_new(driver);
		merit.Meritnation_to_login();
		merit.meritnation_teacher_acc_email_password("meritnationteacher.teacher@gmail.com", "Teacher@5");
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
		merit.click_login();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	util.close_popup2();
	}

	@When("^I add students to the existing batch$")
	public void add_students_to_existing_batch() throws IOException {
		merit.click_profile();
		merit.add_students();
		util = new seleniumutil(driver);
		util.takeSnapShot("C:Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Screenshots\\AddStudents.png");
		}
	
	@Then("^I logout from the application$")
	public void logout_from_the_application() {
		merit.click_logout();
		driver.close();
	}
}


