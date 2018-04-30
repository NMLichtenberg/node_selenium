'use strict';

const Promise = require('selenium-webdriver').promise;
const Until = require('selenium-webdriver').until;
const config = require('../lib/config');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  visit(url) {
    if (url.startsWith('http')) {
      this.driver.get(url);
    } else {
      this.driver.get(config.baseUrl + url);
    }
  }

  find(locator) {
    return this.driver.findElement(locator);
  }

  click(locator) {
    this.find(locator).click();
  }

  type(locator, inputText) {
    this.find(locator).sendKeys(inputText);
  }

  text(locator) {
    this.find(locator).getText();
  }

  isDisplayed(locator) {
    const defer = Promise.defer();
    this.find(locator).isDisplayed().then(isDisplayed => {
      defer.fulfill(isDisplayed);
    }, error => {
      if (error.name === 'NoSuchElementError') {
        defer.fulfill(false);
      } else {
        defer.reject(error);
      }
    });
    return defer.promise;
  }

  waitForIsDisplayed(locator, timeout) {
    const defer = Promise.defer();
    const driver = this.driver;
    driver.wait(Until.elementLocated(locator), timeout).then(() => {
      const element = driver.findElement(locator);
      driver.wait(Until.elementIsVisible(element), timeout).then(() => {
        defer.fulfill(true);
      }, error => {
        if (error.name === 'NoSuchElementError') {
          defer.fulfill(false);
        } else {
          defer.reject(error);
        }
      });
    });
    return defer.promise;
  }
}

module.exports = BasePage;
