package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@C:\\Users\\ADMIN\\eclipse-workspace\\CucumberNew3pmBatch\\src\\test\\resources\\fa.txt",
glue = "org.stepdefinition")

public class Runner {

}
