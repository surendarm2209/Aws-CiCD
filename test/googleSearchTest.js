// import { Builder, By, Key, until } from "selenium-webdriver";
// import { expect } from "chai";

// describe("Google Search Test", function () {
//   this.timeout(20000); // Ensure the test has enough time

//   let driver;

//   before(async function () {
//     driver = await new Builder().forBrowser("chrome").build();
//   });

//   after(async function () {
//     await driver.quit();
//   });

//   it("should search for WebDriver", async function () {
//     await driver.get("https://www.google.com");

//     let searchBox = await driver.findElement(By.name("q"));
//     await searchBox.sendKeys("WebDriver", Key.RETURN);

//     // ✅ Wait for search results to appear before checking the title 123
//     await driver.wait(until.titleContains("WebDriver"), 5000);

//     let title = await driver.getTitle();
//    //  expect(title).to.include("WebDriver");
//   });
// });


// const { Builder, By, Key } = require("selenium-webdriver");


import { Builder, By, Key, until } from "selenium-webdriver";
import { expect } from "chai";
import mocha from 'mocha';

async function runTest() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(
            require("selenium-webdriver/chrome").Options()
                .headless() // Run in headless mode
                .addArguments("--disable-dev-shm-usage") // Prevent shared memory issues
                .addArguments("--no-sandbox") // Run without sandbox (useful in CI/CD)
                .addArguments("--remote-debugging-port=9222") // Avoid port conflicts
                .addArguments(`--user-data-dir=/tmp/chrome-user-data`) // Unique profile directory
        )
        .build();

    try {
        await driver.get("https://www.google.com");
        let searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("WebDriver", Key.RETURN);
        await driver.sleep(2000);
    } finally {
        await driver.quit();
    }
}

runTest();


