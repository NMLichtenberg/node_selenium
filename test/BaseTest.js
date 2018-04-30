'use strict';
const test = require('selenium-webdriver/testing');
var DriverFactory = require('../lib/DriverFactory'),
    driverFactory;
global.test_timeout = 30000;
const fs = require('fs');

test.beforeEach(async function () {
  this.timeout(global.test_timeout);
  driverFactory = await new DriverFactory();
  global.driver = driverFactory.driver;
});

test.afterEach(async function () {
  this.timeout(global.test_timeout);
  var testName = this.currentTest.fullTitle(),
      testResult = (this.currentTest.state === 'passed') ? true : false;
  if (testResult == false) {
    let image =  await driver.takeScreenshot();
    await fs.writeFile( testName + '.jpg', image, 'base64', (error) => { /* handle error */ });
   }
  driverFactory.quit(testName, testResult);
});



