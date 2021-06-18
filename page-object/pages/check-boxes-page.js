const { assert, expect } = require("chai");
const Page = require("./main-page");

class Checkboxes extends Page {
  // Defining the elements per getters
  get checkbox1() {
    return $("#checkboxes > input[type=checkbox]:nth-child(1)");
  }
  get checkbox2() {
    return $("#checkboxes > input[type=checkbox]:nth-child(3)");
  }
  get h3() {
    return $("#content > div > h3");
  }

  // functions, actions, verifications with defined elemenets
  async verifyHeaderH3() {
    assert.equal("Checkboxes", await (await this.h3).getText());
  }

  async defaultCheckboxValues() {
    await expect(await (await this.checkbox1).isSelected()).equals(false); // Checkbox is not selected
    await expect(await (await this.checkbox2).isSelected()).equals(true); // Checkbox is  selected
  }

  async tickCheckbox1() {
    await (await this.checkbox1).click();
    await browser.pause(1000);
  }

  async tickCheckbox2() {
    await (await this.checkbox2).click();
    await browser.pause(1000);
  }

  //operning particular web page
  open() {
    return super.open("checkboxes");
  }
}

module.exports = new Checkboxes();
