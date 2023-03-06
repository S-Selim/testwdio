// xit("Dynamic Dropdown Controls Smoke", async () => {
//   await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
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
// it("Checkboxes Identification", async () => {
//   await browser.url("/AutomationPractice/");
//   const element = await $$("input[type='checkbox']");
//   await element[1].click();
//   console.log(await element[1].isSelected());
//   console.log(await element[2].isSelected());
//   await browser.saveScreenshot("screenshot.png");
// });
// });
// it("Dynamic Dropdown Controls", () => {
//   await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
//   await $("#autocomplete").setValue("ind");
//   await browser.pause(3000);
//   let items = await $$('[class="ui-menu-item"] div');
//   for (var i = 0; i <await items.length; i++)
//   {
//     console.log(await items[i].getText());
//     }
//   });
// });

// const expectchai = require('chai').expect

// describe('UI Controls Test Suite',async()=>
// {

// xit('UI Controls sanity',async()=>
// {
//     await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
//     await $("input[name='username']").setValue("rahulshettyacademy")
//     const password = $("//input[@type='password']")
//     await password.setValue("learning")
//     //what if multiple elements $$
//     const radioButtons = await $$(".customradio")
//     const userDropdown = radioButtons[1]
//     await userDropdown.$("span").click() //chaining locators-
//     const modal =await $(".modal-body")
//     await modal.waitForDisplayed()
//     await $("#cancelBtn").click()
//     console.log(await $$(".customradio")[0].$("span").isSelected())
//     await userDropdown.$("span").click()
//     await modal.waitForDisplayed()
//     await $("#okayBtn").click();
//     //validate pop up not shown up when you select admin
//     await $$(".customradio")[0].$("span").click()
//     await expect(modal).not.toBeDisplayed()
//     const dropdown = await $("select.form-control") //select tag
//     await dropdown.selectByAttribute('value','teach')
//     await dropdown.selectByVisibleText("Consultant")
//     await dropdown.selectByIndex(0)
//     console.log(await dropdown.getValue())
//     expectchai(await dropdown.getValue()).to.equal("stud")
// })
//     xit('Dynamic Dropdown Controls Smoke',async()=>

//     {
//         await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
//         await  $("#autocomplete").setValue("ind")
//         await  browser.pause(3000)
//         let items = await $$("[class='ui-menu-item'] div")
//         for(var i =0;i<await items.length;i++)
//         {
//             if(await items[i].getText() === "India")
//             {
//                 await items[i].click()
//                 await browser.pause(3000)
//             }

//         }

//  })

// //  it('Checkboxes Identification', async() => {
// //     await browser.url("/AutomationPractice/")
// //   const element = await $$("input[type='checkbox']")
// //    await element[1].click()
// //   console.log(await element[1].isSelected())
// //   console.log(await element[2].isSelected())
// //   await browser.saveScreenshot("screenshot.png")

// //  })

// // })
// describe("Google website", () => {
//   it("should have the right title", () => {
//     browser.url("https://www.google.com/");
//     expect(browser.getTitle()).toBe("Google");
//   });

//   it("should be able to search for WebdriverIO", () => {
//     browser.url("https://www.google.com/");
//     const searchInput = $('[name="q"]');
//     const searchButton = $('[name="btnK"]');

//     searchInput.setValue("WebdriverIO");
//     searchButton.click();

//     expect(browser.getTitle()).toContain("WebdriverIO");
//   });
// });

// describe("Google search for Amazon and add a random product to cart", () => {
//   it("should be able to search for Amazon on Google", () => {
//     // Navigate to Google and search for Amazon
//     browser.url("https://www.google.com/");
//     const searchInput = $('[name="q"]');
//     const searchButton = $('[name="btnK"]');

//     searchInput.setValue("Amazon");
//     searchButton.click();

//     // Verify that the first search result is for Amazon
//     const firstResultLink = $('a[href*="www.amazon.com"]');
//     expect(firstResultLink).toHaveAttribute("href", "https://www.amazon.com/");
//   });

//   it("should be able to click on the Amazon search result and scroll down the page", () => {
//     // Click on the first Amazon search result and scroll down the page
//     const firstResultLink = $('a[href*="www.amazon.com"]');
//     firstResultLink.click();

//     browser.pause(1000); // Wait for page to load

//     browser.execute("window.scrollTo(0, document.body.scrollHeight)");
//     browser.pause(1000); // Wait for page to scroll down
//   });

//   it("should be able to choose a random product and add it to the cart", () => {
//     // Choose a random product and add it to the cart
//     const productLinks = $$('a[href*="/dp/"]');
//     const randomIndex = Math.floor(Math.random() * productLinks.length);

//     productLinks[randomIndex].click();
//     browser.pause(1000); // Wait for page to load

//     const addToCartButton = $("#add-to-cart-button");
//     addToCartButton.click();

//     // Verify that the product was added to the cart
//     const cartCount = $(".nav-cart-count");
//     expect(cartCount).toHaveTextContaining("1");
//   });
// });
