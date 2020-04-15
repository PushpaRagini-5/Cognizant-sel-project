package com.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyProfilePage {
	
	Logger LOG = Logger.getLogger("Logger");

	
	WebDriver driver;

	By friend_search= By.id("friendSearch");

	By enter_key= By.xpath("//*[@id=\"mainContent\"]/section/div[1]/div/div/div/ul/li/a");
	
	By friend_name= By.xpath("//*[@id=\"mainContent\"]/section/div[1]/div[1]/div/div/ul/li/a/div/div[1]");

	By add_friend= By.xpath("//*[@id=\"addFriend\"]");

	public MyProfilePage(WebDriver driver4 )
	{
		
		this.driver=driver4;
	}

	public void enter_friendname(String Friend)
	{
		driver.findElement(friend_search).sendKeys(Friend);
		LOG.info("friend name is entered");
	}

	public void press_enterkey()
	{
		driver.findElement(enter_key).click();
		LOG.info("enterkey is pressed");
	}
	
	public void select_friend_name()
	{
		driver.findElement(friend_name).click();
		LOG.info("friend name is selected");
		}
	public void click_ADD_FRIEND()
	{
		driver.findElement(add_friend).click();
		LOG.info("Add friend is clicked");
	}


}
