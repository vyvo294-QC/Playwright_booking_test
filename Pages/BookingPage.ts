import { Page, expect } from '@playwright/test';

export class BookingPage {
  constructor(private page: Page) {}

  async selectShowtime() {
    // Locator tổng quát cho suất chiếu
    const showtimes = this.page.locator(
      '//*[@id="vertical-tabpanel-0"]//a'
    );

    // thêm chờ 
    await this.page.waitForTimeout(3000);

    const count = await showtimes.count();

    if (count === 0) {
      throw new Error('No showtimes available for selected cinema');
    }

    // Click suất chiếu đầu tiên
    await showtimes.first().click();
  }

  async verifyBookingPage() {
    await expect(
      this.page.getByText(/đặt vé|screen/i)
    ).toBeVisible();
  }
}
