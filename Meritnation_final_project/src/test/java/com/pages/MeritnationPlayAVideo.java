package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MeritnationPlayAVideo {
	
	WebDriver driver;
	
	public MeritnationPlayAVideo(WebDriver driver) 
	{
		this.driver=driver;
	}
	
	public void playVideo()
	{
		driver.findElement(By.xpath("//*[@id=\"whatNext\"]/div[2]/div[2]/section/div/div/div/div[2]/div[1]/div[2]/button")).click();
	}
	
	public  void stopVideo() {
		
		driver.findElement(By.xpath("//*[@id=\"close-fullscreen-hero\"]")).click();
	}
	

}
