package com.pages;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class login_page {
	
	Logger LOG = Logger.getLogger("Logger");
	
	WebDriver driver;
	public login_page(WebDriver driver) {
		this.driver=driver;
	}
	
	By loginlink = By.xpath("//*[@id=\"main-header\"]/div[1]/div[2]/div[2]/a/span[1]");
	By EMAIL= By.id("username_login_2");
	By PASSWORD= By.id("password_login_2");
	By LOGIN =By.xpath("//*[@id=\"loginBtn_2\"]");
	By Close_pop=By.id("co-close-icon-5e79f05a7635bd53149c7f22");
	
	
	public void click_login_link()
	{
		driver.findElement(loginlink).click();
		
		LOG.info("login link is clicked");
	}
	
	public void enter_email(String email) {
		driver.findElement(EMAIL).sendKeys(email);
		LOG.info("email is entered");
	}
	public void close_popup() {
		driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);
		driver.findElement(Close_pop).click();
		
	}
	public void enter_password(String password) {
		driver.findElement(PASSWORD).sendKeys(password);
		LOG.info("password is entered");
	}
	public void click_login() {
		driver.findElement(LOGIN).click();
		LOG.info("login is clicked");
	}
	
	public void do_login(String email,String password) {
		this.enter_email(email);
		this.enter_password(password);
		//this.click_login();
		
	}
	
	
	
}



