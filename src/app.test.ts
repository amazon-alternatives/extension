import * as puppeteer from 'puppeteer'
import path from 'path'

jest.setTimeout(60000)

let browser: puppeteer.Browser
let page: puppeteer.Page
const pathToExtension = require('path').join(path.join(__dirname, '..', 'addon'))
const buyButtonSelector = '[aa-test-buy-button]'
const dropdownSelector = '[aa-test-drodpown]'

describe('e2e testing', () => {
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
    const cookies_button = '#sp-cc-accept'
    const urls = [
      'https://www.amazon.fr/Bullshit-Jobs-David-Graeber/dp/B07BSLN78W',
      'https://www.amazon.fr/STRIX-G15-G513RS-HQ004W-Portable-9-6900H-Windows-Clavier/dp/B09QST7DYG/',
      'https://www.amazon.de/-/en/Michelle-Obama/dp/0241531810',
      'https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/',
    ]

    await page.goto('https://www.amazon.fr', {
      waitUntil: 'networkidle2',
    })
    await page.click('#a-autoid-0') // accepts the cookies

    for (const url of urls) {
      console.log(`testing ${url}`)
      await page.goto(url, { waitUntil: 'networkidle2' })

      if (await page.$(cookies_button)) {
        await page.click(cookies_button)
      }

      if (await page.$('#captchacharacters')) {
        console.log('captcha detected, skipping...')
        continue
      }

      const buyButton = await page.$(buyButtonSelector)
      expect(buyButton).not.toBe(null)

      await page.hover(buyButtonSelector)

      const dropdown = await page.$(dropdownSelector)
      expect(dropdown).not.toBe(null)
    }
  })
})
