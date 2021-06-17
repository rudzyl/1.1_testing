describe("Open a browser and perform a task!", () => {
  it("1 - Click on dropdown link", async () => {
    await browser.url(" http://the-internet.herokuapp.com/");

    //Defining web elements
    const dropdownLink = await $("#content > ul > li:nth-child(11) > a");

    //Getting text and verifying if it is correct
    await dropdownLink.waitForDisplayed();
    await dropdownLink.click();
  });
  it("2 - Verify dropdown header", async () => {
    await browser.url(" http://the-internet.herokuapp.com/dropdown");

    //Defining web elements
    const h3 = await $("h3");

    //Getting text and verifying if it is correct
    await h3.waitForDisplayed();
    assert.equal("Dropdown List", await h3.getText());
  });
  it("3 - Select Option ", async () => {
    await browser.url(" http://the-internet.herokuapp.com/dropdown");

    //Defining web elements
    const dropdown = await $("#dropdown");

    //Getting text and verifying if it is correct
    await dropdown.waitForDisplayed();
    await dropdown.click();
    await dropdown.selectByAttribute("value", "1");
    await dropdown.selectByVisibleText("Option 2");
    await dropdown.selectByVisibleText("Option 1");
    await dropdown.selectByAttribute("value", "2");
  });
});
