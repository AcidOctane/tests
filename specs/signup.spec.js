const { expect } = require('chai');
const { App } = require('../src/pages');
const randomNumber = Math.floor(Math.random() * 10000).toString();

const app = new App();

describe('Registration:', function () {

    // beforeEach(async function () {
    //     await browser.setWindowSize(1440, 960);
    //     await browser.url('/register');
    // });

    // afterEach(async function () {
    //     await browser.reloadSession();
    // });

    xit('should be able to register a new account', async function () {

        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-up');
        await app.authPage.signup({
            firstName: "AStest",
            lastName: "AStest",
            email: `ArtemSydorenko${randomNumber}@gmail.com`,
            password: "Pa55word",
        })

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'https://staging.codetrain.xyz/home';
            },
            { timeout: 5000 },
        );

        const url = await browser.getUrl();
        expect(url).to.be.eql('https://staging.codetrain.xyz/home');
        await browser.reloadSession();

    });
});


