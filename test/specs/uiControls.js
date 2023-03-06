const expectchai = require("chai").expect;
describe("Ecommerce Application", async () => {
  it("End to End Test", async () => {
    const products = ["iphone X", "Blackberry"];
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
    await $("#signInBtn").click();
    //wait until checkout button is displayed
    const link = await $("*=Checkout");
    await link.waitForExist(); //link Text
    const cards = await $$("div[class='card h-100']");
    for (let i = 0; i < (await cards.length); i++) {
      const card = await cards[i].$("div h4 a");
      if (products.includes(await card.getText())) {
        await cards[i].$(".card-footer button").click();
      }
    }
    await link.click();
    const productPrices = await $$("//tr/td[4]/strong");
    //string -> integer
    130000, 50000;
    //Streams async mode
    const sumOfProducts = (
      await Promise.all(
        await productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0); //0+ 13000 =13000    50000+13000 =
    console.log(sumOfProducts);
    const TotalValue = await $("h3 strong").getText();
    const totalIntValue = parseInt(TotalValue.split(".")[1].trim());
    await expectchai(sumOfProducts).to.equal(totalIntValue);
    await $(".btn-success").click();
    await $("#country").setValue("ind");
    await $(".lds-ellipsis").waitForExist({ reverse: true });
    await $("=India").click();
    await $("input[type='submit']").click();
    await expect($(".alert-success")).toHaveTextContaining("Success");
  });
});

// const expectchai = require("chai").expect;

// describe("UI Controls Test Suite", async () => {
//   xit("UI Controls sanity", async () => {
//     await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
//     await $("input[name='username']").setValue("rahulshettyacademy");
//     const password = $("//input[@type='password']");
//     await password.setValue("learning");
//     //what if multiple elements $$
//     const radioButtons = await $$(".customradio");
//     const userDropdown = radioButtons[1];
//     await userDropdown.$("span").click(); //chaining locators-
//     const modal = await $(".modal-body");
//     await modal.waitForDisplayed();
//     await $("#cancelBtn").click();
//     console.log(await $$(".customradio")[0].$("span").isSelected());
//     await userDropdown.$("span").click();
//     await modal.waitForDisplayed();
//     await $("#okayBtn").click();
//     //validate pop up not shown up when you select admin
//     await $$(".customradio")[0].$("span").click();
//     await expect(modal).not.toBeDisplayed();
//     const dropdown = await $("select.form-control"); //select tag
//     await dropdown.selectByAttribute("value", "teach");
//     await dropdown.selectByVisibleText("Consultant");
//     await dropdown.selectByIndex(0);
//     console.log(await dropdown.getValue());
//     expectchai(await dropdown.getValue()).to.equal("stud");
//   });

//chai assertion library

// xit("Dynamic Dropdown Controls Smoke", async () => {
//   await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
//   await $("#autocomplete").setValue("ind");
//   await browser.pause(3000);
//   let items = await $$("[class='ui-menu-item'] div");
//   for (var i = 0; i < (await items.length); i++) {
//     if ((await items[i].getText()) === "India") {
//       await items[i].click();
//       //await browser.pause(3000)
//     }
//   }
// });

//   it("Checkboxes Identification", async () => {
//     await browser.url("/AutomationPractice/");
//     const element = await $$("input[type='checkbox']");
//     await element[1].click();
//     console.log(await element[1].isSelected());
//     console.log(await element[2].isSelected());
//     await browser.saveScreenshot("screenshot.png");
//   });
// });
