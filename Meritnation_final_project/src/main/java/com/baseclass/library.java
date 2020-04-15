package com.baseclass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

public class library {
	
	protected WebDriver driver;
	//Launch Browser
	public WebDriver launchapp()
	{
		String base_path = "C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Drivers\\";
		String browser="chrome",url="https://www.meritnation.com/";
		switch(browser)
		{
			case "chrome":
				ChromeOptions options = new ChromeOptions();
				options.addArguments("--disable-notifications");
				System.setProperty("webdriver.chrome.driver", base_path+"chromedriver.exe");
				driver = new ChromeDriver(options);
				break;
				
			case "firefox":
				System.setProperty("webdriver.gecko.driver", base_path+"geckodriver.exe");
				driver = new FirefoxDriver();
				break;
				
			default:
				System.out.println("Supports only Chrome or Firefox browser");
				break;
		}
		
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		
		return driver;
	}
	
	//Sleep
	public void sleep(int time)
	{
		try {
			Thread.sleep(time);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	//close_browser
	public void browser_close()
	{
		this.sleep(2000);
		driver.close();
	}
	
	
	//Logger
	/*public static Logger log;	
	public static void logger(String msg)
	{
		log = Logger.getLogger("devpinoyLogger");
		log.info(msg);
	}*/
}
