package com.excelutility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class excelUtil {
	
		
		//To Read and return data
		public String excel_read(int rowno , int colno) throws IOException 
		{
			
					//Locating the Path of the File				
					FileInputStream fil = new FileInputStream(new File("C:\\Users\\SRAAWYA CH\\eclipse-workspace\\Meritnation\\src\\test\\resources\\Testdata\\meritnation_testdata.xlsx"));
					//Locating the Workbook
					XSSFWorkbook workbook = new XSSFWorkbook(fil);
					//Locating the Sheet in a workbook
					XSSFSheet sheet = workbook.getSheet("Sheet1");
					//Locating the row value
					XSSFRow row = sheet.getRow(rowno-1);
					//Locating the Cell Value
					XSSFCell cell = row.getCell(colno-1);
					//Ientifying the Username Cell Value
					String data = cell.getStringCellValue();
					//Return the username
					return data;
				
				
		}

		}



		
	


