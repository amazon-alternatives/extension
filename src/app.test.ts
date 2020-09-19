import puppeteer from 'puppeteer'
import path from 'path'

jest.setTimeout(30000)

let browser: puppeteer.Browser
let page: puppeteer.Page
const pathToExtension = require('path').join(path.join(__dirname, '..', 'addon'))
const buyButtonSelector = '[aa-test-buy-button]'
const dropdownSelector = '[aa-test-drodpown]'

describe('Popup page', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 150,
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        '--show-component-extension-options',
      ],
    })

    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
  })

  test('buy elsewhere button should not exist on home page', async () => {
    await page.goto('https://www.amazon.fr', {
      waitUntil: 'networkidle2',
    })

    const buyButton = await page.$(buyButtonSelector)
    const dropdown = await page.$(dropdownSelector)

    expect(buyButton).toBe(null)
    expect(dropdown).toBe(null)
  })

  test('dropdown alternatives should exist on product page', async () => {
    await page.goto('https://www.amazon.fr/Bullshit-Jobs-David-Graeber/dp/B07BSLN78W', {
      waitUntil: 'networkidle2',
    })

    const buyButton = await page.$(buyButtonSelector)
    expect(buyButton).not.toBe(null)

    await page.click('#a-autoid-0') // accepts the cookies
    await page.hover(buyButtonSelector)

    const dropdown = await page.$(dropdownSelector)
    expect(dropdown).not.toBe(null)
  })
})
