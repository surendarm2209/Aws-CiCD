import { Builder, By, Key, until } from "selenium-webdriver";
import { expect } from "chai";

describe("Google Search Test", function () {
  this.timeout(20000); // Ensure the test has enough time

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("should search for WebDriver", async function () {
    await driver.get("https://www.google.com");

    let searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("WebDriver", Key.RETURN);

    // ✅ Wait for search results to appear before checking the title
    await driver.wait(until.titleContains("WebDriver"), 5000);

    let title = await driver.getTitle();
   //  expect(title).to.include("WebDriver");
  });
});

