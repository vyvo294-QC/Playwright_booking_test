import { test, expect } from '@playwright/test';
import registerdata from '../testData/registerdata.json'  with { type: "json" };;


test('Verify Register Successfully and fail', async ({ page }) => {
  // Tạo random number để tránh trùng tài khoản
  for (const data of registerdata) {
    test(`Register test for ${data.username || '(empty username)'}`, async ({ page }) => {

      // Điều hướng đến trang
      await page.goto('https://demo1.cybersoft.edu.vn/');

      // Click nút đăng ký
      await page.getByRole('link', { name: 'Đăng Ký' }).click();

      // Điền thông tin đăng ký
      if (data.username) await page.fill('input[name="Tài Khoản"]', data.username);
      if (data.password) await page.fill('input[name="Mật Khẩu"]', data.password);
      if (data.email) await page.fill('input[name="Email"]', data.email);
      await page.click('button:has-text("Đăng Ký")');

      if (data.expected === 'success') {
        await expect(page.locator('.alert-success')).toContainText('Đăng ký thành công');
      } else {
        await expect(page.locator(`text=${data.errorMessage}`)).toBeVisible();
      }
    });
  }
});