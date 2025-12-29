import { test, expect } from '@playwright/test';
import { registerData } from '../testData/RegisterData';

for (const data of registerData) {

    test(`Register test for ${data.username || '(empty username)'}`, async ({ page }) => {

        // Điều hướng đến trang
        await page.goto('https://demo1.cybersoft.edu.vn/');

        // Click nút đăng ký
        await page.getByRole('link', { name: 'Đăng Ký' }).click();

        // Điền thông tin theo XPath
        if (data.username)
            await page.locator('#taiKhoan').fill(data.username);

        if (data.password)
            await page.locator('#matKhau').fill(data.password);

        if (data.confirmPassword)
            await page.locator('#confirmPassWord').fill(data.confirmPassword);

        if (data.fullname)
            await page.locator('#hoTen').fill(data.fullname);

        if (data.email)
            await page.locator('#email').fill(data.email);

        // Click Đăng Ký
        await page.click('button:has-text("Đăng Ký")');

        // Expected
        if (data.expected === "success") {

            await page.getByRole("button", { name: "Đăng ký" }).click();

            await expect(page.locator('.swal2-title'))
                .toHaveText('Đăng ký thành công');

        } else {

            if (!data.errorMessage) {
                throw new Error("Missing errorMessage in test data");
            }

            await page.getByRole("button", { name: "Đăng ký" }).click();

            await expect(page.getByText(data.errorMessage)).toBeVisible();
        }

    });

}
