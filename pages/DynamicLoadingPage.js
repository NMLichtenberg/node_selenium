'use strict';

const BasePage = require('./BasePage');

const START_BUTTON = {css: '#start button'};
const FINISH_TEXT = {id: 'finish'};

class DynamicLoadingPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  loadExample(exampleNumber) {
    this.visit('/dynamic_loading/' + exampleNumber);
    this.click(START_BUTTON);
  }

  finishTextPresent() {
    return this.waitForIsDisplayed(FINISH_TEXT, 10000);
  }
}

module.exports = DynamicLoadingPage;
