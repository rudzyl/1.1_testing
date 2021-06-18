const { assert, expect } = require("chai");
const Page = require("./main-page");

class DropDown extends Page {
  //Defining the elements per getters
  get dropdownLink() {
    return $("#content > ul > li:nth-child(11) > a");
  }
  get h3() {
    return $("h3");
  }
  get dropdown() {
    return $("#dropdown");
  }
  // functions, actions, verifications with defined elemenets
  async verifyHeaderH3() {
    assert.equal("Dropdown List", await (await this.h3).getText());
  }
  async selectByAttribute() {

  }
    await dropDownPage.selectByVisibleText("Option 2");
    await dropDownPage.selectByVisibleText("Option 1");
    await dropDownPage.selectByAttribute("value", "2");

  open() {
    return super.open("dropdown");
  }
}

module.exports = new DropDown();
