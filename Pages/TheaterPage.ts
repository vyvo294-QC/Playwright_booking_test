import { Page } from '@playwright/test';

export class TheaterPage {
  constructor(private page: Page) {}

  async openTheaterCluster() {
    await this.page.locator(
      '//*[@id="root"]/div/div[1]/header/div/div/div[2]/a[2]/h4'
    ).click();
  }

  async selectCinemaLogo() {
    await this.page.locator(
      '//*[@id="root"]/div/div[5]/div[1]/div/div/button[1]/span[1]/div/img'
    ).click();
  }

  async selectCinema() {
    await this.page.locator(
      '//*[@id="vertical-tabpanel-0"]/div/div/div/div/button[2]/span[1]/div/h6'
    ).click();
  }
}
