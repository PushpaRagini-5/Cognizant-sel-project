package com.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Meritnation_new {
	Logger LOG = Logger.getLogger("Logger");
	WebDriver driver;
	
	public Meritnation_new(WebDriver driver) {
		this.driver = driver;
	}
	//to get the NCERTSolutions
	public void Meritnation_to_login() {
		driver.findElement(By.xpath("//*[@id=\"main-header\"]/div[1]/div[2]/div[2]/a/span[1]")).click();
		LOG.info("the button to login page clicked");
	}
	public void meritnation_teacher_acc_email_password(String email,String password) {
		driver.findElement(By.id("username_login_2")).sendKeys(email);
		driver.findElement(By.id("password_login_2")).sendKeys(password);
		LOG.info("email and password entered");
	}
	public void click_login() {
		driver.findElement(By.id("loginBtn_2")).click();
		LOG.info("login button clicked");
	}
	public void click_subject_icon() {
		driver.findElement(By.xpath("//*[@id=\"color_science\"]/li/a/span[2]")).click();
		LOG.info("subject icon clicked");
	}
	public void click_topic() {
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/div[3]/ul/li[1]/span[1]")).click();
		LOG.info("topic button clicked");
	}
	public void click_View_NCERT_Solutions() {
		driver.findElement(By.xpath("//*[@id=\"ratio\"]/div[2]/a[2]")).click();
		LOG.info("View NCERT Solutions button clicked");
	}
	
	//About Entrance Exams
	
	public void click_IITJEE() {
		//driver.findElement(By.xpath("//*[@id=\"term\"]")).sendKeys("sdjfhsd");
		driver.findElement(By.xpath("//*[@id=\"outer_main_menu\"]/nav/div/ul[2]/li[7]")).click();
		driver.findElement(By.xpath("//*[@id=\"outer_main_menu\"]/nav/div/ul[2]/li[7]/ul/li[1]/a")).click();
		LOG.info("IITJEE button clicked");
	}
	public void click_motion_topic() {
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/div[3]/ul/li[1]")).click();
		LOG.info("motion topic button clicked");
	}
	public void click_viewRevisionNotes() {
		driver.findElement(By.xpath("//*[@id=\"ratio\"]/div[2]/a[2]")).click();
		LOG.info("View Revision Notes button clicked");
	}
	public void click_download() {
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/div[3]/a")).click();
		LOG.info("Download button clicked");
	}

	public void click_IIT_JEE() {
		driver.findElement(By.xpath("//*[@id=\"outer_main_menu\"]/nav/div/ul[2]/li[7]")).click();
		driver.findElement(By.xpath("//*[@id=\"outer_main_menu\"]/nav/div/ul[2]/li[7]/ul/li[1]/a")).click();
		LOG.info("IITJEE button clicked again");
	}
	public void click_Science_practicals() {
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/div[1]/div[3]/nav[2]/div[1]/ul/li[2]/a/span")).click();
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/div[3]/ul/li[1]")).click();
		LOG.info("Science practicals option clicked");
	}
	
	//Take-a-Break
	public void click_take_a_break() {
		driver.findElement(By.xpath("//*[@id=\"outer_main_menu\"]/nav/div/ul[1]/li[2]/a")).click();
		LOG.info("Take-a-Break button clicked");
	}
	public void click_daily_teaser() {
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/nav[1]/ul/li[2]/a")).click();
		LOG.info("Daily Teaser button Clicked");
	}
	public void click_yesterday_teaser() {
		driver.findElement(By.xpath("//*[@id=\"previousTeaseAnswerBtn\"]/span")).click();
		LOG.info("View yesterday's teaser button clicked");
	}
	
	//Discover your self
	public void click_career_guidance() {
		driver.findElement(By.xpath("//*[@id=\"outer_main_menu\"]/nav/div/ul[1]/li[3]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"sidebar\"]/div/div/ul/li[6]/a")).click();
		LOG.info("Career-Guidance button clicked");
	}
	public void click_medical() {
		driver.findElement(By.xpath("//*[@id=\"CareerGuidance\"]/div/div[1]/ul/li[2]/a")).click();
		LOG.info("Medical button clicked");
	}
	public void click_skillbuilder() {
		driver.findElement(By.xpath("//*[@id=\"sidebar\"]/div/div/ul/li[5]/a")).click();
		LOG.info("Skill Builder button clicked");
	}
	public void click_speak_in_public() {
		driver.findElement(By.xpath("//*[@id=\"main_section\"]/article/div[2]/ul/li[1]/div/span/a")).click();
		LOG.info("Speak in public button clicked");
	}
	
	//add students to existing batch
	
	public void click_profile() {
		driver.findElement(By.xpath("//*[@id=\"lcTopHeaderRightContentId\"]/div[2]/div[1]/span")).click();
		driver.findElement(By.xpath("//*[@id=\"picDetailBox\"]/div[1]/div[3]/a[1]")).click();
		LOG.info("Profile page opened");
	}
	
	public void add_students() {
		driver.findElement(By.xpath("//*[@id=\"studentEmails\"]")).sendKeys("student1@abc.abc,Student2@abc.abc");
		LOG.info("students added to the existing batch");
	}
	
	public void click_logout() {
		driver.findElement(By.xpath("//*[@id=\"profilePic\"]/div[1]/img")).click();
		driver.findElement(By.xpath("//*[@id=\"profilePic\"]/div[2]/div[1]/div[2]/div[5]/a[2]")).click();
		LOG.info("logged out from the application");
	}
}
