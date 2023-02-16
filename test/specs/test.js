/*
Test 001
describe("Google homepage", () => {
  it("should display the Google logo", async () => {
    await browser.url("https://www.google.com");
    const logo = $('img[alt="Google"]');
    expect(await logo.isDisplayed()).to.be.true;
    await browser.pause(60000); // pause for 1 minute to keep the browser window open
  });
});
*/
//Test 002
describe("Google homepage", async () => {
  it("Login Page", async () => {
    //Webdriverio Async

    await browser.url("https://www.google.com");
    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("google google.com");
  });
});
