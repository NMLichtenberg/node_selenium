'use strict';

const test = require('selenium-webdriver/testing');
var expect = require('chai').expect;
const BaseTest = require('./BaseTest');
const DynamicLoadingPage = require('../pages/DynamicLoadingPage');

test.describe('Dynamic Loading @deeps', function () {
  this.timeout(global.test_timeout);
  var dynamicLoading;

  test.beforeEach(async() => {
    dynamicLoading = await new DynamicLoadingPage(global.driver);
  });

  test.it('hidden element @hidden4', async function () {
    dynamicLoading.loadExample('1');
    let elementDisplayed = await dynamicLoading.finishTextPresent();
      expect(elementDisplayed).to.be.true;
  });

  test.it('rendered element @hidden3', async function () {
    dynamicLoading.loadExample('1');
    let elementDisplayed = await dynamicLoading.finishTextPresent();
     expect(elementDisplayed).to.be.true;
  });

  test.it('rendered element @hidden1', async function () {
    dynamicLoading.loadExample('2');
    let elementDisplayed = await dynamicLoading.finishTextPresent();
      expect(elementDisplayed).to.be.true;
  });
});

