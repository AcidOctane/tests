const { Button, Input } = require('../elements');

class AuthPage {
  constructor() {
    this.firstNameField = new Input('input[name="name"]');
    this.lastNameField = new Input('input[name="surname"]');
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');
    this.confirmPasswordField = new Input('input[name="confirmPassword"]');
    this.submitButton = new Button('button');
    this.loginButton = new Button('button', 2)
  }

  async signup({ firstName, lastName, email, password }) {
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.confirmPasswordField.setValue(password);
    await this.submitButton.click();
  }

    async login({ email, password }) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'https://staging.codetrain.xyz/home';
            },
            { timeout: 5000 },
        );
    };

    async wrongLogin({ email, password }) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'https://staging.codetrain.xyz/sign-in';
            },
            { timeout: 5000 },
        );
    }
}

module.exports = { AuthPage };
