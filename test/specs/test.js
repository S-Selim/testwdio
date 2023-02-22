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
// id - #id - #username
// class name - .className
//tagname
// describe("Google homepage", async () => {
//   it("Login Page", async () => {
//     //Webdriverio Async

//     await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

//     console.log(await browser.getTitle());
//     await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
//     //Css Selector, Xpath
//     await $("input[name='username']").setValue(rahulshettyacademy);
//     //await browser.pause(3000);
//     await $("#username").setValue(secondCSS);
//     //await browser.pause(3000);
//     const password = $("//input[@type='password']");
//     await password.setValue("learning");
//     await $("#signInBtn").click();
//     //await browser.pause(3000);
//     await console.log(await $(".alert-danger").getText());
//     //browser.waitUntil(()=>{},

//   });
// });

// Test 003
describe("Google homepage", async () => {
  it("Login Page", async () => {
    //Webdriverio Async

    browser.url("https://rahulshettyacademy.com/loginpagePractise/");

    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    //Css Selector, Xpath
    await $("input[name='username']").setValue(rahulshettyacademy);
    //await browser.pause(3000);
    await $("#username").setValue(secondCSS);
    //await browser.pause(3000);
    const password = $("//input[@type='password']");
    await password.setValue("learning");
    await $("#signInBtn").click();
    //await browser.pause(3000);
    await console.log(await $(".alert-danger").getText());
    await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In'
    {
      timeout: 5000,
      timeooutMsg: 'Error message is noot showing up' 
    })
    await console.log(await $(".alert-danger").getText());

    
  });
});
