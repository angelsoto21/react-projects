// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOSTURL = 'http://localhost:5173/'
const PREFIX_URL_IMG_CAT = "https://cataas.com/";

test('add shows random facts and image', async ({ page }) => {
  await page.goto(LOCALHOSTURL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const getimageurl = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(getimageurl?.startsWith(PREFIX_URL_IMG_CAT)).toBeTruthy

});

