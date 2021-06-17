describe("Open a browser login and logout", () => {
  it("Login with valid user", async () => {
    await browser.url("https://www.saucedemo.com/");

    //Defining web elements
    const username = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-button");

    //login with valid user
    await username.waitForDisplayed();
    await username.setValue("standard_user");
    await password.setValue("secret_sauce");
    await username.waitForDisplayed();
    await login.click();
  });
  it("Try to login with locked user verify error message", async () => {
    await browser.url("https://www.saucedemo.com/");

    //Defining web elements
    const username = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-button");
    const h3 = await $(
      "#login_button_container > div > form > div.error-message-container.error > h3"
    );

    //invalid user trying to login
    await username.waitForDisplayed();
    await username.setValue("locked_out_user");
    await password.setValue("secret_sauce");
    await password.waitForDisplayed();
    await browser.pause(3000);
    await login.click();
    assert.equal(
      "Epic sadface: Sorry, this user has been locked out.",
      await h3.getText()
    );
  });
  it("performance user login and select Sauce Labs Flee jacket", async () => {
    await browser.url("https://www.saucedemo.com/");

    //Defining web elements
    const username = await $("#user-name");
    const password = await $("#password");
    const login = await $("#login-button");
    //Defining store elements
    const jacked = await $("#add-to-cart-sauce-labs-fleece-jacket");
    const card = await $("#shopping_cart_container > a");
    const checkout = await $("#checkout");
    //Defining checkout elements
    const firstName = await $("#first-name");
    const lastName = await $("#last-name");
    const zipCode = await $("#postal-code");
    const continueBtn = await $("#continue");
    const finishBtn = await $("#finish");
    const sumTotal = await $(
      "#checkout_summary_container > div > div.summary_info > div.summary_total_label"
    );

    //login with valid user
    await username.waitForDisplayed();
    await username.setValue("performance_glitch_user");
    await password.setValue("secret_sauce");
    await username.waitForDisplayed();
    await login.click();

    //add to a card sause labs jacked
    await jacked.waitForDisplayed();
    await jacked.click();
    await card.waitForDisplayed();
    await card.click();
    await checkout.click();

    //enter first and last name, click continue
    await firstName.waitForDisplayed();
    await firstName.setValue("John");
    await lastName.setValue("Doe");
    await zipCode.setValue("1234567");
    await zipCode.waitForDisplayed();
    await browser.pause(3000);
    await continueBtn.click();
    console.log(`Total sum to pay:`, await sumTotal.getText());
    await finishBtn.click();
  });
});
