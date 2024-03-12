package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.lib.BaseClass;
import org.openqa.selenium.WebDriver;
import org.pojo.FbLogin;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FeDefinition extends BaseClass {
	public static FbLogin f;

	@Given("To launch the browser and hit the url")
	public void to_launch_the_browser_and_hit_the_url() {

		launchUrl("https://www.facebook.com/");
		maxWin();

	}

	@When("To pass the data in emailfield")
	public void to_pass_the_data_in_emailfield(io.cucumber.datatable.DataTable d) {
		f = new FbLogin();
		Map<String,String> m = d.asMap(String.class,String.class);
		
		String s = m.get("username");
		fillText(f.getTextEmail(),s);
		//sst1123@gmail.com
		
	}

	@When("To pass the data in passwordfield")
	public void to_pass_the_data_in_passwordfield(io.cucumber.datatable.DataTable d) {
		List<Map<String, String>> m = d.asMaps();
		Assert.assertTrue(false);
		fillText(f.getTextPass(), m.get(1).get("password2"));
		//44444444444
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
		
		btnClick(f.getLoginBtn());
		
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
		browserClose();
	}

}
