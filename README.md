# node_selenium
This is selenium framework written in nodejs, that utilizes selenium-webdriver for browser controle, mocha as a testframework, and chai for assertions.  

Some features of the framework include parallel test execution for faster results, continous integration/continous delivery integration, tagging for targeting specific chunks of test code to be executed, integration with selenium grid/saucelabs, allure reports integration, browserscreen shots on failure, flexible test execution,and test retries on failure.

Tests in this repo are written against http://the-internet.herokuapp.com which is a application designed for test automation challenges.

Tests are written using the page object model for increased resiliency and optimal maintainability.

To run tests:

install node 

install packages: npm install

install grunt cli globally: npm install -g grunt-cli

run tests: grunt
