'use strict';
const webdriver = require('selenium-webdriver');
const config = require('./config');
let driver
let sessionId;

class DriverFactory {
  constructor() {
    this.build();
  }

  build() {
    let builder;
    if (config.host === 'saucelabs') {
      const url = 'http://ondemand.saucelabs.com:80/wd/hub';
      builder = new webdriver.Builder().usingServer(url);
      builder.withCapabilities({
        browserName: config.browser,
        browserVersion: config.browserVersion,
        platform: config.platform,
        username: config.sauceUsername,
        accessKey: config.sauceAccessKey,
      });
    } else if (config.host === 'localhost') {
      const vendorDirectory = process.cwd() + '/vendor';
      process.env.PATH = vendorDirectory + ":$PATH";
      builder = new webdriver.Builder().forBrowser(config.browser);
    }
    this.driver = builder.build();
    this.driver.getSession().then(sessionid => {
        sessionId = sessionid.id_;
    });
  }

  quit(testName, testResult) {
    if (config.host === 'saucelabs') {
      this.driver.executeScript('sauce:job-name=' + testName);
      this.driver.executeScript('sauce:job-result=' + testResult);
    }
    this.driver.quit().then(() => {
      if (config.host === 'saucelabs' && testResult === false) {
        throw new Error('https://saucelabs.com/beta/tests/' + sessionId);
      }
    });
  }
}

module.exports = DriverFactory;
