package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



//Cucumber class
		@RunWith(Cucumber.class)
		@CucumberOptions
		(
			
			 features = "C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\features\\Meritnation.feature",
					 glue = {"com.stepdefinition"},       
			 plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
				        		"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"}
				       //tags = {"@tc_01_login", "@tc_02_Directory","@tc_03_jobtitle"}
				       
				      //  monochrome = true
				        
		)
	
public class Meritnation_Testrunner {
			
		    @AfterClass
		      public static void extendReport()
		    {
		        Reporter.loadXMLConfig("C:\\Users\\Poornachandrika Divi\\eclipse-workspace\\MERITNATION-PROJECT\\src\\test\\resources\\testdata\\extent-config.xml");
		        Reporter.setSystemInfo("user", System.getProperty("user.name"));
		        Reporter.setSystemInfo("os", "Windows");
		        Reporter.setTestRunnerOutput("Sample test runner output message");
		    }
		}
