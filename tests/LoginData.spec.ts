import { test, expect } from '@playwright/test';
import { loginData } from '../testData/LoginData';

for (let i = 0; i < loginData.length; i++) {
    const data = loginData[i];

    test(`Login TC_${i + 1} (${data.expected})`, async ({ page }) => {

        // ✅ FIX timeout goto
        await page.goto('https://demo1.cybersoft.edu.vn/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000,
        });

        await page.locator('h3.MuiTypography-h3', { hasText: 'Đăng Nhập' }).click();

        if (data.username !== undefined) {
            await page.locator('#taiKhoan').fill(data.username);
        }

        if (data.password !== undefined) {
            await page.locator('#matKhau').fill(data.password);
        }

        const checkbox = page.locator('input[name="remember"]');

        if (data.remember === true) {
            await checkbox.click({ force: true });
        }

        await page
            .locator('//*[@id="root"]/div/div[2]/main/div/form/button/span[1]')
            .click();

        if (data.expected === 'success') {
            await expect(page.getByText('đăng nhập thành công')).toBeVisible();
        } else {
            expect(data.errorMessage).toBeTruthy();
            await expect(page.getByText(data.errorMessage!)).toBeVisible();
        }
    });
}
