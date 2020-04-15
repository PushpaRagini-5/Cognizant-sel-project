package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MeritnationAddPostOnFeed {
	
	WebDriver driver;
	
	public MeritnationAddPostOnFeed(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void nagivateToHomepage()
	{
		driver.get("https://www.meritnation.com/");
	}
	
	public void clickFeedPage()
	{		
		driver.findElement(By.xpath("//*[@id=\"feed_menu\"]/a")).click();

	}
	
	public void clickMypost()
	{
		driver.findElement(By.linkText("My Post")).click();
	}
	
	public void writePostInEditbox(String note)
	{
		driver.findElement(By.className("gry")).sendKeys(note);
	}
	
	public void clickPostBtn()
	{
		driver.findElement(By.xpath("//*[@id=\"btn-post\"]")).click();
	}
	
	
}
