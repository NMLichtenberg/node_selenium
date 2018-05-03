# node_selenium
This selenium framework is written in nodejs and utilizes selenium-webdriver, mocha testframework, and chai for assertions.  

Some features of the framework include parallel test execution(faster results), continous integration/continous delivery integration(xunit reports), tagging(targets specific chunks of test code to be executed), integration with selenium grid/saucelabs, allure reports integration(beutiful and insightful reporting), browserscreen shots, flexible test execution, and test retries on failure.

Tests in this repo are written against http://the-internet.herokuapp.com which is a web application designed for test automation challenges.

**Basic implementation details:**
- Tests are executed using grunt task runner
- Basepage:  Selenium actions are stored in base page. (a layer of abstraction, makes writing tests efficient and maintainable) 
- Page objects:  Describes actions avaiable on a page
- Tests:  Where test cases are written, and assertions are made
- Config:  Test configuration options are stored here.  

**To run tests:**
- install node 
- install packages: npm install
- install grunt cli globally: npm install -g grunt-cli
- run tests: grunt
