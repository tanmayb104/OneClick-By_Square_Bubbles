const puppeteer = require('puppeteer');
(async () => {
    const siteUrl = 'https://www.amazon.in/';
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(0);

    await page.goto(siteUrl, { waitUntil: 'networkidle2' });
    await page.type("input[name='field-keywords']", "xiaomi 10i");
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("input[id='nav-search-submit-button']"),
    ]);

    await page.waitForSelector("div[data-cel-widget='search_result_1']", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click('div[data-cel-widget="search_result_1"]'),
    ]);


    data = await page.evaluate(() => {
        let title = document.querySelector('span[id="productTitle"]').innerText
        return {
            title
        }
    })


    console.log(data);

    debugger;

    await browser.close();
})();


