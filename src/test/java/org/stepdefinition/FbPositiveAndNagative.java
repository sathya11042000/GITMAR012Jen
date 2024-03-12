package org.stepdefinition;

import org.lib.BaseClass;
import org.pojo.FbLogin;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FbPositiveAndNagative extends BaseClass {

	public static FbLogin f;

	@Given("Launch the browser and hit the url")
	public void launch_the_browser_and_hit_the_url() {

		launchUrl("https://www.facebook.com/");
		maxWin();
	}

	@When("Pass the data in {string} email field")
	public void pass_the_data_in_email_field(String email) {
		f = new FbLogin();
		fillText(f.getTextEmail(), email);
	}

	@When("Pass the data in {string} password field")
	public void pass_the_data_in_password_field(String pass) {
		fillText(f.getTextPass(), pass);
	}

	@When("Click the login button")
	public void click_the_login_button() {
		btnClick(f.getLoginBtn());
	}

	@Then("close  browser")
	public void close_browser() {
		browserClose();
	}

}
