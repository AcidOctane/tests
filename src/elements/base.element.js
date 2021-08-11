class BaseElement {
  constructor(selector, index) {
    this.selector = selector;
    this.index = index;
  }

  async waitForVisible(element, timeout = 10000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Element isn't displayed. Selector: ${this.selector}`,
    });
  }
}

module.exports = { BaseElement };
