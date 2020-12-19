'use strict';

const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log('loading page');
        await page.goto('https://secure.dol.wa.gov/home/');
        console.log('filling out login form');
        await page.click('#username');
        await page.keyboard.type(process.env.username);
        await page.click('#password');
        await page.keyboard.type(process.env.password);
        console.log('login in');
        await page.click('#btnLogin');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        console.log('requesting appointment');
        await page.click('#k-w > tbody > tr:nth-child(10)');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.click('#d-i');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.click('#d-__NextStep');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        console.log('requesting state id');
        await page.click('#d-l1');
        await page.select('#d-l1', 'GETREGLIC');
        await page.click('#d-m1');
        await page.select('#d-m1', 'ID');
        await page.click('#d-__NextStep');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.click('#d-__NextStep')
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        console.log('filling out email and phone number');
        await page.click('#d-w2');
        await page.keyboard.type(process.env.email);
        await page.click('#d-x2');
        await page.keyboard.type(process.env.email);
        await page.click('#d-03');
        await page.keyboard.type(process.env.phone);
        await page.click('#d-__NextStep');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.click('#d-93');
        await page.select('#d-93', 'No');
        await page.click('#d-__NextStep');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        console.log('selecting renton office');
        await page.click('#d-14');
        await page.select('#d-14', '10468');
        await page.click('#d-24');
        await page.waitForNavigation({waitUntil: 'networkidle0'});
        await page.screenshot({path: 'screens/' + Date.now().toString() + '.png', fullPage: true, type: 'png'});
        await browser.close();
    } catch (e) {
        console.log(e);
    }

})();