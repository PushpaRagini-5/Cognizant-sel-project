package com.baseclass;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class libraryclass {
	protected WebDriver driver;
	public static Properties prop;
	
	public void launchapp() throws IOException{
		FileInputStream fis = new FileInputStream("C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\configurations\\config.property");
		prop = new Properties();
		prop.load(fis);
		String browser = prop.getProperty("browser");
		
		if(browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\drivers\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\drivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
	}
	public void quit() {
		driver.close();
	}
}
