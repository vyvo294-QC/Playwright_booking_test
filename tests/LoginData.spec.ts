import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { loginData } from '../testData/LoginData';

for (let i = 0; i < loginData.length; i++) {
  const data = loginData[i];

  test(`Login TC_${i + 1} (${data.expected})`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 
    await loginPage.goto();
    await loginPage.openLoginForm();

    // input thông tin đăng nhập
    // (bao gồm cả case bỏ trống username / password)
    await loginPage.login(
      data.username ?? '',
      data.password ?? '',
      data.remember ?? false
    );

    // kiểm tra kết quả đăng nhập 
    if (data.expected === 'success') {
      await loginPage.verifyLoginSuccess();
    } else {
      expect(data.errorMessage).toBeTruthy();

      // assert lỗi 
      await expect(
        page.getByText(data.errorMessage!)
      ).toBeVisible();
    }
  });
}

