package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class Definition {
WebDriver driver;

   //Test Scenario Starts
	@Given("^Launch ge hospital mgs$")
	public void Launch_ge_hospital_mgs() {
		System.setProperty("webdriver.chrome.driver", "D:\\1023545\\sts-workspace\\poc\\bdd_Test\\sss\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("http://localhost:4200");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
				}
			
	@When("^home should be appiear$")
	public void home_should_be_appiear() {
		WebElement ref= driver.findElement(By.xpath("//a[@class='active']"));
		System.out.println("Page is displayed: "+ref.getText());
			}
	 
	 
	 		
	
	@Then("^I should see Add Patient Button in home page$")
	public void I_should_see_Add_Patient_Button_in_home_page() {
		WebElement ref= driver.findElement(By.xpath("//a[contains(text(),'Add Patient')]"));
		System.out.println("Displyed button is :" +ref.getText()+" "+ref.isDisplayed());
		
		if(ref.isDisplayed()==true) {
			System.out.println("Add patient button is availabe on home page ");
		}else
			System.out.println("Add patient button is not availabe on home page ");
			}
	 
	@When("^I should see Patient List Button in home page$")
	public void I_should_see_Patient_List_Button_in_home_page() {
		WebElement ref= driver.findElement(By.xpath("//a[contains(text(),'Patient List')]"));
		System.out.println("Displyed button is :" +ref.getText()+" "+ref.isDisplayed());
		
		if(ref.isDisplayed()==true) {
			System.out.println("Patient List button is availabe on home page ");
		}else
			System.out.println("Patient List button is not availabe on home page ");
			}
	
	@Then("^I should see Help Button in home page$")
	public void I_should_see_Help_Button_in_home_page() {
		WebElement ref= driver.findElement(By.xpath("//p[contains(text(),'Help')]"));
		System.out.println("Displyed button is :" +ref.getText()+" "+ref.isDisplayed());
		
		if(ref.isDisplayed()==true) {
			System.out.println("Help button is availabe on home page ");
		}else
			System.out.println("Help button is not availabe on home page ");
		
	}
	
	 
	
	@When("^I should click \"([^\"]*)\" Button in home page$")
	public void I_should_click_Add_Patient_Button_in_home_page(String arg1) {
		 
		System.out.println("Clicked is: " +arg1);
		
		if(arg1.equalsIgnoreCase("Add Patient")) {
	 		 driver.findElement(By.xpath("//a[contains(text(),'Add Patient')]")).click();
	    } else if(arg1.equalsIgnoreCase("Patient List")) {
	    	 
	    	 driver.findElement(By.xpath("//a[contains(text(),'Patient List')]")).click();
	    } else if(arg1.equalsIgnoreCase("Help")) {
	    	  driver.findElement(By.xpath("//p[contains(text(),'Help')]")).click();
	    }
			
		
	}
	         
	@Then("^I should see \"([^\"]*)\" is displayed$")
	public void I_should_see_displayed_value(String arg1) {
		 
		System.out.println("Verified Vlaue is : " +arg1);
		
		if(arg1.equalsIgnoreCase("Patient Form")) {
	 		 WebElement pf  =driver.findElement(By.xpath("//h2[contains(text(),'Patient Form')]"));
//	 		 Assert.assertEquals("Patient Form", pf);
	 		 
	    } else if(arg1.equalsIgnoreCase("Patient List")) {
	 	    	 driver.findElement(By.xpath("//th[contains(text(),'PID')]")).click();
	    }  
			
		
	}
	
	         
	@When("^I should click patinet number \"([^\"]*)\" in patient list$")
	public void I_should_click_Patient_id(String arg1) {
		 
		System.out.println("Clicked patient number is : " +arg1);
		driver.findElement(By.xpath("//a[@class='btn btn-white-view'][contains(text(),'"+arg1+"')]")).click();
	}
	
	
//	close the browser	 
	@Then("^I close the application$")
	public void I_close_the_application() {
		driver.close();
		
	}
	
	  
}