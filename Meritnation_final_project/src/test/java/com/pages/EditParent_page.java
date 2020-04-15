package com.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class EditParent_page {
	Logger LOG = Logger.getLogger("Logger");
	
	WebDriver driver;
	 
	By Parent_details= By.xpath("//*[@id=\"mnPopupCont_1\"]/div[1]/div[2]/div/div/div[1]/ul/li[4]/div/span");
	
	By Parent_name= By.id("UserGuardianName");
	
	By Parent_email= By.id("UserParentEmail");
	
	By Parent_no= By.id("UserParentMobile");
	
	By Save_button= By.xpath("//*[@id=\"profileSettingSlider\"]/li[5]/div/form/fieldset/div/div[6]/input");
	
	public EditParent_page(WebDriver driver4) {
		
		this.driver=driver4;
	}
	
	
	public void Select_parent_details()
	{
		driver.findElement(Parent_details).click();
		
		LOG.info("parent details are selected");
	}
	
	public void enter_parent_name(String name)
	{
		driver.findElement(Parent_name).sendKeys(name);
		
		LOG.info("parent name is entered");
	}
	
	public void enter_parent_email(String Email)
	{
		driver.findElement(Parent_email).sendKeys(Email);
		
		LOG.info("parent mail is entered");
	}
	
	public void enter_parent_no(String MobileNo)
	{
		driver.findElement(Parent_no).sendKeys(MobileNo);
		
		LOG.info("parent no is entered");
		
	}
	
	public void click_save_button()
	{
		driver.findElement(Save_button).click();
		
		LOG.info("save button is clicked");
	}
	
	public void edit_profile(String name,String Email,String MobileNo)
	{
		this.enter_parent_name(name);
		this.enter_parent_email(Email);
		this.enter_parent_no(MobileNo);
		//this.click_save_button();
	}

}
