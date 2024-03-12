@Feature1
Feature: To validate Login functionality of Facebook application 
Background:
 Given To launch the browser and hit the url
 
@Sanity
 
Scenario: To validate login by using invalid username and valid password  

When To pass the data in emailfield
 
|username|sst1123@gmail.com|
|password|sst|
|phnum|9876543210|
|emailid|dtyhgcfd@gmail.com|


And To pass the data in passwordfield
|password1|password2|password3|password4|
|dddddddd|cccccccc|bbbbbbb|aaaaaaaa|
|5555555555|44444444444|333333333|22222222|
|987654321|09876543|8275tyd|jytre32345678|

And To click the login button
Then To close the browser
@Smoke @Sanity

Scenario Outline: To validate login by using nagative and passitive

When Pass the data in "<emailfield>" email field
And Pass the data in "<passwordfield>" password field
And Click the login button
Then close  browser

Examples:
|emailfield|passwordfield|
|java123|java|
|selenium123|selenium|
|framework123|frame|

 









     
 

