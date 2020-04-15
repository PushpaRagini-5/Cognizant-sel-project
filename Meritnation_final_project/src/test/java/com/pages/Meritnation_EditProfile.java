package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class Meritnation_EditProfile {

	WebDriver driver;
	
	public Meritnation_EditProfile(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void navigateToHompage()
	{	
		driver.get("https://www.meritnation.com/");
	}
	
	public void clickLoginLink()
	{
		driver.findElement(By.linkText("LOGIN")).click();
		//Below line of code is to be uncommented when chatbot pops up on the website
		//driver.findElement(By.xpath("//*[@id=\"PureChatWidget\"]/div[2]/div/div/div/div[1]/div[1]/button[2]")).click();
	}

	public void enterDetails(String username, String pwd)
	{
		driver.findElement(By.id("username_login_2")).sendKeys(username);
		driver.findElement(By.id("password_login_2")).sendKeys(pwd);
	}
	
	public void clickLoginBtn()
	{
		driver.findElement(By.id("loginBtn_2")).click();
	}
	
	public void clickProfileIcon()
	{
		driver.findElement(By.id("profilePic")).click();
	}
	
	
	public void clickMyAccount()
	{
		driver.findElement(By.xpath("//*[@id=\"profilePic\"]/div[2]/div[1]/div[2]/div[6]/a[1]")).click();
	}
	
	
	public void clickEditProfile()
	{
		driver.findElement(By.xpath("//*[@id='acctionBox']/div[2]/button")).click();
		
	}
	

	public void changePassword(String current_pwd, String new_pwd)
	{
		driver.findElement(By.linkText("Change Password")).click();
		driver.findElement(By.id("currentPassword")).sendKeys(current_pwd);
		driver.findElement(By.id("newPassword")).sendKeys(new_pwd);
		driver.findElement(By.id("rePassword")).sendKeys(new_pwd);
		driver.findElement(By.id("savePwd")).click();
	}
	
	public void updateAccountDetails(String alter_emailid,String gradeid)
	{
		driver.findElement(By.id("accountBox")).click();
		driver.findElement(By.id("UserAlternateEmail")).clear();
		driver.findElement(By.id("UserAlternateEmail")).sendKeys(alter_emailid);
		driver.findElement(By.id("GradeId")).click();
		Select grade = new Select(driver.findElement(By.xpath("//*[@id=\"GradeId\"]")));
		grade.selectByVisibleText(gradeid);
		driver.findElement(By.xpath("//*[@id=\"saveAccountDetails\"]")).click();
	}
	
	
	public void updatePersonalDetails(String dob , String user_state)
	{
		
		driver.findElement(By.xpath("//*[@id=\"profileBox\"]/li[3]")).click();
		driver.findElement(By.id("UserDOB")).sendKeys(dob);
		Select state = new Select(driver.findElement(By.id("UserState")));
		state.selectByVisibleText(user_state);
		driver.findElement(By.xpath("//*[@id=\"personalDetails\"]/div[5]/button")).click();
	}
	
	public void updateSchoolDetails(String school_name)
	{
		driver.findElement(By.xpath("//*[@id=\"profileBox\"]/li[5]")).click();
		driver.findElement(By.className("remove-btn")).click();
		driver.findElement(By.id("SchoolName1")).sendKeys(school_name);
		driver.findElement(By.xpath("//*[@id=\"schoolDetail\"]/div[2]/div[3]/div[2]/div[2]/button")).click();
		
	}
	
	public void updateParentDetails(String parent_name, String email , String mobileno)
	{
		driver.findElement(By.xpath("//*[@id=\"profileBox\"]/li[7]")).click();
		driver.findElement(By.xpath("//*[@id=\"parentDetailForm\"]/div[1]/label[1]/i")).click();
		driver.findElement(By.id("UserParentName")).clear();
		driver.findElement(By.id("UserParentName")).sendKeys(parent_name);
		driver.findElement(By.xpath("//*[@id=\"UserParentEmail\"]")).clear();
		driver.findElement(By.xpath("//*[@id=\"UserParentEmail\"]")).sendKeys(email);
		driver.findElement(By.xpath("//*[@id=\"UserParentMobile\"]")).clear();
		driver.findElement(By.xpath("//*[@id=\"UserParentMobile\"]")).sendKeys(mobileno);
		driver.findElement(By.xpath("//*[@id=\"saveParentDetail\"]")).click();
	}
	
	public void logout()
	{
		driver.findElement(By.xpath("//*[@id=\"profilePic\"]/div[2]/div[1]/div[2]/div[6]/a[2]")).click();
	}
	
	
	
	

	

}
