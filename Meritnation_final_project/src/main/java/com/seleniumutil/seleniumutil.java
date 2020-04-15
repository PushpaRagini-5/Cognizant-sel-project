package com.seleniumutil;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class seleniumutil {
	
	WebDriver driver;
	
	public seleniumutil(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void takeSnapShot(String path) throws IOException
	{
		TakesScreenshot screenshot = (TakesScreenshot)driver ;
		File source = screenshot.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source ,new File(path) );
		
	}
	
	
	public void close_popup()
	{

		String mainWindow = driver.getWindowHandle();
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		driver.switchTo().frame("container-notification-frame-5e79f05a7635bd53149c7f22");
		driver.findElement(By.xpath("//*[@class='icon close' and @id='co-close-icon-5e79f05a7635bd53149c7f22']")).click();
		driver.switchTo().window(mainWindow);	
	
	}
	
	public void close_popup2()
	{
		String mainWindow = driver.getWindowHandle();
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		driver.switchTo().frame("container-notification-frame-5e78cbd57635bd53149c7eaf");
		driver.findElement(By.xpath("//*[@class='icon close' and @id='co-close-icon-5e78cbd57635bd53149c7eaf']")).click();
		driver.switchTo().window(mainWindow);	
	}
	
	
	
	

}
