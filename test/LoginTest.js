'use strict';
var test = require('selenium-webdriver/testing');
var assert = require('assert');
var BaseTest = require('./BaseTest');
var LoginPage = require('../pages/LoginPage');
var expect = require('chai').expect;


test.describe('Login @deep', function() {
  this.timeout(global.test_timeout);
  var login;

  test.beforeEach(async () => {
    login = await new LoginPage(global.driver);
  });

  test.it('with valid credentials @login4 @deep', async function () {
    login.with('tomsmith', 'SuperSecretPassword!');
    let successPresent = await login.successMessagePresent();
      expect(successPresent).to.be.true;
  });

  test.it('with invalid credentials @login2 @deep', async function () {
    login.with('tomsmith', 'bad password');
    let failurePresent = await login.failureMessagePresent();
      expect(failurePresent).to.be.true;
  });

  test.it('forced failure @login3 @deep', async function () {
    login.with('tomsmith', 'bad password');
    let successPresent = await login.successMessagePresent();
      expect(successPresent).to.be.true;
  });
});
