package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JvmGenarate;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", 
glue = "org.stepdefinition",
plugin = {"html:target",
"junit:Junitfolder\\junitfile.xml","json:Jsonfolder\\jsonfile.json","rerun:src/test/resources/fa.txt"})

public class TestRunner {
	
	@AfterClass
	public static void tc() {
		JvmGenarate.genarateJvm("C:\\Users\\ADMIN\\eclipse-workspace\\CucumberNew3pmBatch\\Jsonfolder");

	}
	
	
	
	
	

}
