import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demo1.cybersoft.edu.vn/', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openLoginForm() {
    await this.page
      .locator('h3.MuiTypography-h3', { hasText: 'Đăng Nhập' })
      .click();
  }

  async login(username: string, password: string, remember = false) {
    await this.page.locator('#taiKhoan').fill(username);
    await this.page.locator('#matKhau').fill(password);

    if (remember) {
      await this.page
        .locator('input[name="remember"]')
        .click({ force: true });
    }

    await this.page
      .locator('//*[@id="root"]/div/div[2]/main/div/form/button/span[1]')
      .click();
  }

  async verifyLoginSuccess() {
    await expect(
      this.page.getByText('đăng nhập thành công')
    ).toBeVisible();
  }
}
