import { test, expect } from '@playwright/test';
import { registerData } from '../testData/RegisterData';

for (let i = 0; i < registerData.length; i++) {
  const data = registerData[i];

  test(`Register TC_${i + 1} (${data.expected})`, async ({ page }) => {

    await page.goto('https://demo1.cybersoft.edu.vn/');
    await page.getByRole('link', { name: 'Đăng Ký' }).click();

    if (data.username) await page.locator('#taiKhoan').fill(data.username);
    if (data.password) await page.locator('#matKhau').fill(data.password);
    if (data.confirmPassword) await page.locator('#confirmPassWord').fill(data.confirmPassword);
    if (data.fullname) await page.locator('#hoTen').fill(data.fullname);
    if (data.email) await page.locator('#email').fill(data.email);

    await page.getByRole('button', { name: 'Đăng Ký' }).click();

    if (data.expected === 'success') {
      await expect(page.locator('.swal2-title'))
        .toHaveText('Đăng ký thành công');
    } else {
      expect(data.errorMessage, 'Missing errorMessage in test data').toBeTruthy();

      await expect(
        page.getByText(data.errorMessage!)
      ).toBeVisible();
    }
  });
}
