package com.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class home_page {
	
	Logger LOG = Logger.getLogger("Logger");
	
	WebDriver driver;
	
	
	By ME_option= By.id("user_menu");
	
	By MYPROFILE= By.xpath("//*[@id=\"user_menu\"]/ul/li[1]/a");
	
	By CALL_ME= By.xpath("//*[@id=\"jeePlusHeaderController\"]/div[2]/div[2]/nav/div/button");
	
	By Add_address= By.xpath("//*[@id=\"pcAddPersonalDetails\"]");
	
	
	public home_page(WebDriver driver3)
	{
		
		this.driver=driver3;
	}
	
	public void click_ME()
	{
		driver.findElement(ME_option).click();
		
		LOG.info("click_me is clicked");
	}
	
	public void click_MYPROFILE()
	{
		driver.findElement(MYPROFILE).click();
		LOG.info("myprofile is clicked");
	}
	public void click_CALL_ME()
	{
		driver.findElement(CALL_ME).click();
		LOG.info("callme is clicked");
	}
	
	public void click_Add_address()
	{
		driver.findElement(Add_address).click();
		LOG.info("add is clicked");
	}

}
