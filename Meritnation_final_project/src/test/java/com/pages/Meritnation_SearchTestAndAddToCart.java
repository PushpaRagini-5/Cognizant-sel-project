package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class Meritnation_SearchTestAndAddToCart {

	WebDriver driver;
	public Meritnation_SearchTestAndAddToCart(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void clickPurchaseLink()
	{
		driver.findElement(By.xpath("//*[@id='jeePlusHeaderController']/div[2]/div[2]/nav/div/a")).click();
	}
	
	public void scrollToTestGenerator()
	{
		WebElement Generate_Test = driver.findElement(By.xpath("//*[@id=\"mnapp\"]/div[3]/section[5]/div/a"));
		Actions action = new Actions(driver);
		action.moveToElement(Generate_Test);
		action.perform();
		
	}
	
	public void selectTopicsForTest()
	{
		driver.findElement(By.xpath("//*[@id=\"mnapp\"]/div[3]/section[5]/div/ul/li[2]")).click();
		driver.findElement(By.xpath("//*[@id=\"mnapp\"]/div[3]/section[5]/div/ul/li[14]")).click();
	}
	
	public void clickGenerateTest()
	{
		driver.findElement(By.xpath("//*[@id=\"mnapp\"]/div[3]/section[5]/div/a")).click();
	}
	
	public void useFilters()
	{
		driver.findElement(By.xpath("//*[@id=\"mysessionFilter\"]/div[2]/div[1]/div[2]/ul/li[2]/label/input")).click();
		driver.findElement(By.xpath("//*[@id=\"mysessionFilter\"]/div[2]/div[2]/div[2]/ul/li[9]/label/input")).click();
		driver.findElement(By.xpath("//*[@id=\"mysessionFilter\"]/div[2]/div[4]/div[2]/ul/li[2]/label/input")).click();
		
	}
	
	public void addTestToCart()
	{
		driver.findElement(By.xpath("//*[@id=\"listing\"]/div/div[1]/div[2]/div/div[7]/a")).click();
		
	}
}
