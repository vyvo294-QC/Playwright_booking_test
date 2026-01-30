import { Page, expect } from '@playwright/test';
import { LoginPageLocator } from './Locators/LoginPage.locator';

export class LoginPage {
  readonly page: Page;
  readonly locator: LoginPageLocator; // khai báo thuộc tính

  constructor(page: Page) {
    this.page = page;
    this.locator = new LoginPageLocator(page);
  }

  async goto() {
    await this.page.goto('https://demo1.cybersoft.edu.vn/', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openLoginForm() {
    await this.locator.openLoginFormButton.click();
  }

  async login(username: string, password: string, remember = false) {
    await this.locator.usernameInput.fill(username);
    await this.locator.passwordInput.fill(password);

    if (remember) {
      // 
      await this.locator.rememberCheckbox.click({ force: true });
    }

    // 
    await expect(this.locator.loginButton).toBeVisible();
    await this.locator.loginButton.click();
  }

async verifyLoginSuccess() {
    await expect(
      this.page.getByText(/đăng nhập thành công/i)
    ).toBeVisible({ timeout: 5000 });
  }
}