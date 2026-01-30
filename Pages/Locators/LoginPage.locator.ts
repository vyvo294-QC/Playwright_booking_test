import { Page, Locator } from '@playwright/test';

export class LoginPageLocator {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly rememberCheckbox: Locator;
  readonly openLoginFormButton: Locator;
  readonly loginSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.openLoginFormButton = page.locator('h3', { hasText: 'Đăng Nhập' });

    this.usernameInput = page.locator('#taiKhoan');
    this.passwordInput = page.locator('#matKhau');
    this.rememberCheckbox = page.locator('input[name="remember"]');

    this.loginButton = page.locator('button', { hasText: 'Đăng nhập' });

    // đăng nhập thành công
    this.loginSuccessMessage = page.getByText(/đăng nhập thành công/i);
  }

  // TH báo lỗi - động
  loginErrorMessage(message: string): Locator {
    return this.page.getByText(message);
  }
}
