const { assert } = require("chai");

describe("Open a browser and perform a task!", () => {
  it("1 - Verifying h1 and h2", async () => {
    await browser.url("http://the-internet.herokuapp.com/");

    //Defining web elements
    const h1 = await $("h1");
    const h2 = await $("h2");

    //Getting text and verifying if it is correct
    await h1.waitForDisplayed();
    assert.equal("Welcome to the-internet", await h1.getText());

    await h2.waitForDisplayed();
    assert.equal("Available Examples", await h2.getText());
  });
  //check if a link is working when we click
  it("2 - Clicking on link [add/remove elements]", async () => {
    await browser.url("http://the-internet.herokuapp.com/");

    //Defining web element
    const linkAddRemoveElements = await $(
      "#content > ul > li:nth-child(2) > a"
    );
    //Action with element
    await linkAddRemoveElements.waitForDisplayed();
    await linkAddRemoveElements.click();
  });
  //add and remove elements

  it("3 - Adding and removing elements", async () => {
    await browser.url(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
    //Defining web elements
    const buttonAddElement = await $("#content > div > button");
    const buttonDelete = await $(".added-manually");
    //action with elements
    await buttonAddElement.waitForDisplayed();
    await buttonAddElement.click();
    await buttonDelete.waitForDisplayed();
    await buttonDelete.click();
  });
});
