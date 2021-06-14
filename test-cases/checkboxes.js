const { expect } = require("chai");

describe("Perform a task!", () => {
  it("1 - Verifying checkbox 1 is not selected and second is selected", async () => {
    await browser.url("http://the-internet.herokuapp.com/checkboxes");
    //Defining web elements
    const checkbox1 = await $(
      "#checkboxes > input[type=checkbox]:nth-child(1)"
    );
    const checkbox2 = await $(
      "#checkboxes > input[type=checkbox]:nth-child(3)"
    );
    await expect(await checkbox1.isSelected()).equals(false);
    await expect(await checkbox2.isSelected()).equals(true);
  });
  it("2 - unselect checkbox 2 and check checkbox 1", async () => {
    await browser.url("http://the-internet.herokuapp.com/checkboxes");
    //Defining web elements
    const uncheckbox2 = await $(
      "#checkboxes > input[type=checkbox]:nth-child(3)"
    );
    const uncheckbox1 = await $(
      "#checkboxes > input[type=checkbox]:nth-child(1)"
    );
    //action
    await uncheckbox2.waitForDisplayed();
    await browser.pause(500);
    await uncheckbox2.click();
    await uncheckbox2.waitForDisplayed();
    await uncheckbox1.click();
    await uncheckbox1.waitForDisplayed();
    await uncheckbox1.click();
    await uncheckbox2.waitForDisplayed();
    await uncheckbox2.click();
  });
});
