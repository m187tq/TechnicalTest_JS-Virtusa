# TechnicalTest_JS-Virtusa

This is where I am tested technically.
The main Frameworks included in the project:

    Selenium Webdriver
    WebderiverIO
    Javascript
    Cucumber BDD
    Allure

Project Design:

    Page Object Model (POM) design pattern
    Data Driven framework
    Fluent design approach (method chaining)
    classes which services as a core engine for the project
    Chai Assertion

How to check the execution logs and open the latest execution reports from GitHub Actions:

    Screenshoot and json report can be view at Report and Reports folders.
    You need to be logged-in to the GitHub as a prerequisite
    Open the GitHub Actions tab
    Open the latest workflow run from the list

How to run the project main test cases locally:

    A properties file "automationPractice.properties" can be found it src/main/resources file path including all the configurations needed in the execution
    Can find the test cases in the C:\Users\House\Desktop\cucumberwdio\features\step-definitions>e2eSteps.js
    To start the execution do the following:
    Install $ npm install --save-dev or npm run update
    Create a file name it "Reports" at project level
    please make sure that the "execution.type" property is "Local" if you are running locally then type
    from the console or comman line: npm run wdio
