package org.stepdefinition;

import org.lib.BaseClass;
import org.pojo.AmazonLogin;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AmazonDefinition extends BaseClass {
	public static AmazonLogin a;

	@Given("To launch the browser")
	public void to_launch_the_browser() {
		
		launchUrl(
				"https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
		maxWin();

	}

	@When("To pass the value in emailId or phnum in emailfield")
	public void to_pass_the_value_in_emailId_or_phnum_in_emailfield() {
		 a = new AmazonLogin();
		fillText(a.getAmazonEmail(), "85240460");
	}

	@When("To click a continue btn")
	public void to_click_a_continue_btn() {
		btnClick(a.getAmazonConBtn());
	}

	@When("To pass the value in passwordfield")
	public void to_pass_the_value_in_passwordfield() {
		fillText(a.getAmazonPass(),"cucumber");
	}

	@When("To click signin  btn")
	public void to_click_signin_btn() {
		btnClick(a.getAmazonSignIn());
	}

	@Then("Close the browser")
	public void close_the_browser() {
		browserClose();
	}

	@Given("launch the browser")
	public void launchTheBrowser() {
		
		launchUrl(
				"https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
		maxWin();

	}

	@When("pass the value in emailId or phnum in emailfield")
	public void passTheValueInEmailIdOrPhnumInEmailfield() {
		 a = new AmazonLogin();
			fillText(a.getAmazonEmail(), "cucumber123@gmail.com");
	}

	@When("click a continue btn")
	public void clickAContinueBtn() {
		btnClick(a.getAmazonConBtn());
	}

	@When("pass the value in passwordfield")
	public void passTheValueInPasswordfield() {
		fillText(a.getAmazonPass(),"3pmbatch");
	}

	@When("click signin  btn")
	public void clickSigninBtn() {
		btnClick(a.getAmazonSignIn());
	}

	@Then("browser close Amazon")
	public void browserCloseAmazon() {
	   browserClose();
	}


}
