'use strict';
const BasePage = require('./BasePage');
const assert = require('assert');

const LOGIN_FORM = {id: 'login'};
const USERNAME_INPUT = {id: 'username'};
const PASSWORD_INPUT = {id: 'password'};
const SUBMIT_BUTTON = {css: 'button'};
const SUCCESS_MESSAGE = {css: '.flash.success'};
const FAILURE_MESSAGE = {css: '.flash.error'};

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.visit('/login');
    this.isDisplayed(LOGIN_FORM).then(elementDisplayed => {
      assert.equal(elementDisplayed, true, 'Login form not loaded');
    });
  }

  with(username, password) {
    this.type(USERNAME_INPUT, username);
    this.type(PASSWORD_INPUT, password);
    this.click(SUBMIT_BUTTON);
  }

  successMessagePresent() {
    this.waitForIsDisplayed(SUCCESS_MESSAGE, 1000);
    return this.isDisplayed(SUCCESS_MESSAGE);
  }

  failureMessagePresent() {
    this.waitForIsDisplayed(FAILURE_MESSAGE, 1000);
    return this.isDisplayed(FAILURE_MESSAGE);
  }
}

module.exports = LoginPage;
