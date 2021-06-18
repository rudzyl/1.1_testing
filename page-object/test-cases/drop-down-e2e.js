const dropDownPage = require("../pages/drop-down-page");
describe("Open a browser and perform a task!", () => {
  it("1 - Click on dropdown link", async () => {
    await dropDownPage.open();
    await dropDownPage.verifyHeaderH3();
  });
  it("3 - Select Option ", async () => {
    await dropDownPage.selectByAttribute("value", "1");
    await dropDownPage.selectByVisibleText("Option 2");
    await dropDownPage.selectByVisibleText("Option 1");
    await dropDownPage.selectByAttribute("value", "2");
  });
});
