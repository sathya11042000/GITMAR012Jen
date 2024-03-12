$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFolder/01fb.feature");
formatter.feature({
  "name": "To validate Login functionality of Facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FeDefinition.to_launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using invalid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To pass the data in emailfield",
  "rows": [
    {
      "cells": [
        "username",
        "sst1123@gmail.com"
      ]
    },
    {
      "cells": [
        "password",
        "sst"
      ]
    },
    {
      "cells": [
        "phnum",
        "9876543210"
      ]
    },
    {
      "cells": [
        "emailid",
        "dtyhgcfd@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FeDefinition.to_pass_the_data_in_emailfield(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the data in passwordfield",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3",
        "password4"
      ]
    },
    {
      "cells": [
        "dddddddd",
        "cccccccc",
        "bbbbbbb",
        "aaaaaaaa"
      ]
    },
    {
      "cells": [
        "5555555555",
        "44444444444",
        "333333333",
        "22222222"
      ]
    },
    {
      "cells": [
        "987654321",
        "09876543",
        "8275tyd",
        "jytre32345678"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FeDefinition.to_pass_the_data_in_passwordfield(DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.FeDefinition.to_pass_the_data_in_passwordfield(FeDefinition.java:40)\r\n\tat ✽.To pass the data in passwordfield(file:src/test/resources/FeatureFolder/01fb.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FeDefinition.to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FeDefinition.to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.ClassCastException: class cucumber.runtime.java.JavaHookDefinition$ScenarioAdaptor cannot be cast to class org.openqa.selenium.TakesScreenshot (cucumber.runtime.java.JavaHookDefinition$ScenarioAdaptor and org.openqa.selenium.TakesScreenshot are in unnamed module of loader \u0027app\u0027)\r\n\tat org.stepdefinition.Hooks.Af1(Hooks.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate login by using nagative and passitive",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Pass the data in \"\u003cemailfield\u003e\" email field",
  "keyword": "When "
});
formatter.step({
  "name": "Pass the data in \"\u003cpasswordfield\u003e\" password field",
  "keyword": "And "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "close  browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailfield",
        "passwordfield"
      ]
    },
    {
      "cells": [
        "java123",
        "java"
      ]
    },
    {
      "cells": [
        "selenium123",
        "selenium"
      ]
    },
    {
      "cells": [
        "framework123",
        "frame"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FeDefinition.to_launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using nagative and passitive",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Pass the data in \"java123\" email field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNagative.pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the data in \"java\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNagative.pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNagative.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close  browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNagative.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FeDefinition.to_launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using nagative and passitive",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Pass the data in \"selenium123\" email field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNagative.pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the data in \"selenium\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNagative.pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNagative.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close  browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNagative.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FeDefinition.to_launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using nagative and passitive",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Pass the data in \"framework123\" email field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNagative.pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the data in \"frame\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNagative.pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNagative.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close  browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNagative.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFolder/02amazon.feature");
formatter.feature({
  "name": "To validate Login functionality of amazon application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonDefinition.to_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using nagative username andpasitive password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To pass the value in emailId or phnum in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonDefinition.to_pass_the_value_in_emailId_or_phnum_in_emailfield()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.95)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.18.1\u0027, revision: \u0027b1d3319b48\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8bd2906613070493887b5427a37b9e7a, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62772}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62772/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8bd2906613070493887b5427a37b9e7a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:519)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat org.lib.BaseClass.fillText(BaseClass.java:27)\r\n\tat org.stepdefinition.AmazonDefinition.to_pass_the_value_in_emailId_or_phnum_in_emailfield(AmazonDefinition.java:25)\r\n\tat ✽.To pass the value in emailId or phnum in emailfield(file:src/test/resources/FeatureFolder/02amazon.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To click a continue btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefinition.to_click_a_continue_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass the value in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefinition.to_pass_the_value_in_passwordfield()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click signin  btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefinition.to_click_signin_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.ClassCastException: class cucumber.runtime.java.JavaHookDefinition$ScenarioAdaptor cannot be cast to class org.openqa.selenium.TakesScreenshot (cucumber.runtime.java.JavaHookDefinition$ScenarioAdaptor and org.openqa.selenium.TakesScreenshot are in unnamed module of loader \u0027app\u0027)\r\n\tat org.stepdefinition.Hooks.Af1(Hooks.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonDefinition.to_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using valied username and invalied password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "pass the value in emailId or phnum in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonDefinition.passTheValueInEmailIdOrPhnumInEmailfield()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.95)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.18.1\u0027, revision: \u0027b1d3319b48\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [37fc769c479d0ec3101be14a980098ce, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62798}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62798/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 37fc769c479d0ec3101be14a980098ce\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:519)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat org.lib.BaseClass.fillText(BaseClass.java:27)\r\n\tat org.stepdefinition.AmazonDefinition.passTheValueInEmailIdOrPhnumInEmailfield(AmazonDefinition.java:60)\r\n\tat ✽.pass the value in emailId or phnum in emailfield(file:src/test/resources/FeatureFolder/02amazon.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click a continue btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefinition.clickAContinueBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pass the value in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefinition.passTheValueInPasswordfield()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click signin  btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefinition.clickSigninBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "browser close Amazon",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDefinition.browserCloseAmazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.ClassCastException: class cucumber.runtime.java.JavaHookDefinition$ScenarioAdaptor cannot be cast to class org.openqa.selenium.TakesScreenshot (cucumber.runtime.java.JavaHookDefinition$ScenarioAdaptor and org.openqa.selenium.TakesScreenshot are in unnamed module of loader \u0027app\u0027)\r\n\tat org.stepdefinition.Hooks.Af1(Hooks.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});