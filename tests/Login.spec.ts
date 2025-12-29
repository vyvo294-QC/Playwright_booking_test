import { test, expect } from "@playwright/test";

test("Đăng nhập thành công", async ({ page }) => {
  // 1. Mở trang web
  await page.goto("https://demo1.cybersoft.edu.vn/"); 
  
  // 2. Click nút Đăng Nhập
  await page.locator('h3.MuiTypography-h3', { hasText: 'Đăng Nhập' }).click();

  // 3. Nhập tài khoản
  await page.locator('//*[@id="taiKhoan"]').fill("vyvyvy");

  // 4. Nhập mật khẩu
  await page.locator('//*[@id="matKhau"]').fill("vy1234");

  // 5. Kiểm tra checkbox "Nhớ mật khẩu"
  const checkbox = page.locator('input[name="remember"]');

  // Nếu CHƯA tích thì tick vào
  if (!(await checkbox.isChecked())) {
    await checkbox.check();
  }

  // 6. Click nút Đăng Nhập
  await page.locator('//*[@id="root"]/div/div[2]/main/div/form/button/span[1]').click();

  // 7. Kiểm tra đăng nhập thành công
  await expect(page.getByText("đăng nhập thành công")).toBeVisible();
});
