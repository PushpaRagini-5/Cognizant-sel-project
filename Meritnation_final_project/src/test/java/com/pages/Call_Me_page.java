package com.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Call_Me_page {
	Logger LOG = Logger.getLogger("Logger");
	
	WebDriver driver;
	
	By phone_no= By.id("phone_number");
	
	By call_now= By.xpath("//*[@id=\"callMeBox\"]/div/div[2]/div[2]/button");
	
	public Call_Me_page(WebDriver driver5)
	{
		this.driver= driver5;
	}
	
	public void enter_phone_no(String Mobileno)
	{
		driver.findElement(phone_no).sendKeys(Mobileno);
		
		LOG.info("phone no is entered");
	}
	
	public void click_call_now()
	{
		driver.findElement(call_now).click();
		
		LOG.info("call now is clicked");
	}

}
