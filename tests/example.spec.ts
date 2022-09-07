import { test, expect } from '@playwright/test'

test('homepage has Playwright in title and get started link linking to the intro page', async ({
  page,
}) => {
  // await page.goto('https://google.com')
  // await page.goto('https://example.com')
  await page.goto('http://localhost:3000')

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/)

  // // create a locator
  // const getStarted = page.locator('text=Get Started')

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro')

  // // Click the get started link.
  // await getStarted.click()

  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/)

  // Execute VRT
  await expect(page).toHaveScreenshot('landing.png')
})
