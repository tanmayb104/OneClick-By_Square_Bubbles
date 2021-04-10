const puppeteer = require('puppeteer');
var ks = require('node-key-sender');

(async () => {
    const movieUrl = 'https://www.flipkart.com/';
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(movieUrl, { waitUntil: 'networkidle2' });
    await page.type("input[class='_3704LK']", "oppo a31", { delay: 100 });
    page.waitForNavigation({ waitUntil: "networkidle2" })
    // let selector = 'button[type="submit"]';
    // await page.evaluate((selector) => document.querySelector(selector).click(), selector);
    // // await page.waitForNavigation({ waitUntil: "networkidle2" })
    // let selector1 = 'a[class="_1fQZEK"]';
    // await page.evaluate((selector1) => document.querySelector(selector1).click(), selector1);
    // await page.waitForNavigation({ waitUntil: "networkidle2" })

    let data = await page.evaluate(() => {
        document.querySelector('button[type="submit"]').click()
        page.waitForNavigation({ waitUntil: "networkidle2" })
        document.querySelector('a[class="_1fQZEK"]').click()
        let title = document.querySelector('div[class="_4rR01T"]').innerText;
        // let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
        // let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;

        return {
            title,
            // rating,
            // ratingCount
        }
    });

    console.log(data);

    debugger;

    await browser.close();
})();


// document.querySelector("div[class='title_wrapper'] > h1").innerText
