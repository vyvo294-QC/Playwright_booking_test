import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { TheaterPage } from '../Pages/TheaterPage';
import { BookingPage } from '../Pages/BookingPage';

test('E2E - Login → Booking', async ({ page }) => {
  test.setTimeout(120000);

  const loginPage = new LoginPage(page);
  const theaterPage = new TheaterPage(page);
  const bookingPage = new BookingPage(page);

  await loginPage.goto();
  await loginPage.openLoginForm();
  await loginPage.login('vyvyvy', 'vy1234', true);
  await loginPage.verifyLoginSuccess();

  await theaterPage.openTheaterCluster();
  await theaterPage.selectCinemaLogo();
  await theaterPage.selectCinema();

  await bookingPage.selectShowtime();
  await bookingPage.verifyBookingPage();
});
