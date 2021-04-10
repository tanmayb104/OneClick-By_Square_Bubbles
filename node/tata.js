const puppeteer = require('puppeteer');

(async () => {
    const movieUrl = 'https://www.tatacliq.com/';
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(movieUrl, { waitUntil: 'networkidle2' });
    await page.type("div[class='SearchHeader__increase']", "iphone", { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("div[class='Icon__base']"),
    ]);




    // let data = await page.evaluate(() => {
    //     let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
    //     let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
    //     let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
    //     /* Returning an object filled with the scraped data */
    //     return {
    //         title,
    //         rating,
    //         ratingCount
    //     }
    // });

    // console.log(data);

    debugger;

    await browser.close();
})();


// document.querySelector("div[class='title_wrapper'] > h1").innerText
