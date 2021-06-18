const ChecboxesPage = require("../pages/check-boxes-page");

describe("Verify Test Checkboxes Page & Default options:", () => {
  it("1 - Open Page, Verify Header & default Values!", async () => {
    await ChecboxesPage.open();
    await ChecboxesPage.verifyHeaderH3();
    await ChecboxesPage.defaultCheckboxValues();
  });

  it("2 - Verify if checkboxes can be ticked / unticked!", async () => {
    await ChecboxesPage.tickCheckbox1();
    await ChecboxesPage.tickCheckbox2();
    await ChecboxesPage.tickCheckbox2();
    await ChecboxesPage.tickCheckbox1();
  });
});
