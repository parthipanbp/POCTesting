package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
		@CucumberOptions(
				features="D:/1023545/sts-workspace/poc/bdd_Test/src/main/java/Features/home.feature"
						
				,glue= {"stepDefinitions"},
//				tags= {"@RegressionTest"},
				format={"pretty","html:test-ouput"})
						
		
		
public class TestRunner {
	
}
