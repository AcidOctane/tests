const { expect } = require('chai');
const { App } = require('../src/pages');
const randomNumber = Math.floor(Math.random() * 10000).toString();

const app = new App();

describe('Change settings:', function () {

    // beforeEach(async function () {
    //     await browser.setWindowSize(1440, 960);
    //     await browser.url('/register');
    // });

    // afterEach(async function () {
    //     await browser.reloadSession();
    // });

    it('should be able to sign in a existing account', async function () {

        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
        await app.authPage.login({
            email: `ArtemSydorenko7622@gmail.com`,
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


