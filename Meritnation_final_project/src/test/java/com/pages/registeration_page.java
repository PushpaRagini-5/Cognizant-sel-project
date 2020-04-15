package com.pages;
//package pages;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.support.ui.Select;
//
//public class registeration_page {
//	
//	WebDriver driver;
//	By create_account= By.xpath("//*[@id=\"main-header\"]/div[1]/div[2]/div[2]/button");
//	By user_name= By.id("username_2");
//	
//	By email_id= By.id("userEmail_2");
//	
//	By password= By.id("userPassword_2");
//	
//	By pincode= By.id("userPincode_2");
//	
//	By mobile_no= By.id("userMobile_2");
//	
//	By country_dropdown= By.name("data[isd]");
//	
//	By board_dropdown= By.name("data[UserDetail][curriculumId]");
//	
//	By grade_dropdown= By.id("userGrade_2");
//	
//	By radiobutton= By.id("UserDetailUserType_2_2");
//	
//	By submit_button= By.xpath("//*[@id=\"subBtn_2\"]");
//	
//	By school_name= By.className("ui-select-search ui-select-toggle ng-pristine ng-valid");
//	
//	By school_options= By.xpath("//*[@id=\"mnapp\"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div/div[2]/div/div/div[2]/div/div/div[1]");
//
//	public int iterator;
//	
//	
//	public registeration_page(WebDriver driver)
//	{
//		
//		this.driver= driver;
//	}
//	
//	public void select_createaccount()
//	{
//		driver.findElement(create_account).click();
//	}
//	public void enter_username(String name)
//	{
//		
//		driver.findElement(user_name).sendKeys(name);
//		
//	}
//	public void enter_emailid(String emailid)
//	{
//		driver.findElement(email_id).sendKeys(emailid);
//	}
//	
//	public void enter_password(String pwd)
//	{
//		driver.findElement(password).sendKeys(pwd);
//	}
//	
//	public void enter_mobile(String nos)
//	{
//		driver.findElement(mobile_no).sendKeys(nos);
//	}
//	
//	public void enter_pincode(String pin_code)
//	{
//		driver.findElement(pincode).sendKeys(pin_code);
//	}
//	
//	public void select_country()
//	{
//		Select dropdown_country= new Select(driver.findElement(country_dropdown));
//		
//		dropdown_country.selectByVisibleText("India");
//	}
//	
//	public void select_board()
//	{
//		Select dropdown_board= new Select(driver.findElement(board_dropdown));
//		
//		dropdown_board.selectByVisibleText("CBSE");
//	}
//	
//	public void select_grade()
//	{
//		Select dropdown_grade= new Select(driver.findElement(grade_dropdown));
//		
//		dropdown_grade.selectByVisibleText("X");
//	}
//	
//	public void select_radiobutton()
//	{
//		driver.findElement(radiobutton).click();
//	}
//	
//	public void select_submit()
//	{
//		driver.findElement(submit_button).click();
//	}
//	public void enter_schoolname(String school)
//	{
//		driver.findElement(school_name).sendKeys(school);
//	}
//	public void select_schooloption()
//	{
//		driver.findElement(school_options).click();
//	}
//
//}
