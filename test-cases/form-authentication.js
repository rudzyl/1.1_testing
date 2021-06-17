describe("Open a browser and perform a task!", () => {
  it("1 - Click on Form Authentication", async () => {
    await browser.url(" http://the-internet.herokuapp.com/");

    //Defining web elements
    const formAut = await $("#content > ul > li:nth-child(21) > a");

    //Getting text and verifying if it is correct
    await formAut.waitForDisplayed();
    await formAut.click();
  });
  it("1 - set username and password", async () => {
    await browser.url(" http://the-internet.herokuapp.com/login");

    //Defining web elements
    const userName = await $("#username");
    const password = await $("#password");

    //Getting text and verifying if it is correct
    await userName.setValue("tomsmith");
    await browser.pause(500);
    await password.setValue("SuperSecretPassword!");
    await browser.pause(500);
  });
  it("2 - Click [Login]", async () => {
    await browser.url(" http://the-internet.herokuapp.com/login");

    //Defining web elements
    const login = await $("#login > button > i");

    //Getting text and verifying if it is correct
    await login.click();
    await login.waitForDisplayed();
  });
  it("3 - Verify message text “Your username is invalid!”", async () => {
    await browser.url(" http://the-internet.herokuapp.com/login");

    //Defining web elements
    const errorMsg = await $("#flash-messages");

    //Getting text and verifying if it is correct
    await errorMsg.waitForDisplayed();
    assert.equal("", await errorMsg.getText());
  });

  //   it("4 - Click [Logout]", async () => {
  //     await browser.url(" http://the-internet.herokuapp.com/secure");

  //     //Defining web elements
  //     const logout = await $("#content > div > a");

  //     //Getting text and verifying if it is correct
  //     await logout.click();
  //     await logout.waitForDisplayed();
  //   });
});
