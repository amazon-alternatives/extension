import puppeteer from 'puppeteer'
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
    const urls = [
      'https://www.amazon.fr/Bullshit-Jobs-David-Graeber/dp/B07BSLN78W',
      'https://www.amazon.fr/Dell-Ordinateur-Portable-Graphics-Fran%C3%A7ais/dp/B07XDBZ5N9',
      'https://www.amazon.fr/Multim%C3%A8tre-AoKoZo-Automatique-Electrique-Professionnel/dp/B07XK8XLYC',
      'https://www.amazon.fr/Beehive-Filter-Electric-Starter-4-stroke/dp/B01M15YVJD',
      'https://www.amazon.de/Becoming-English-Michelle-Obama/dp/1524763136/',
      'https://www.amazon.de/Franz-Beckenbauer-Kleine-Anekdoten-Fu%C3%9Fballikone/dp/3742312251/',
    ]

    await page.goto('https://www.amazon.fr', {
      waitUntil: 'networkidle2',
    })
    await page.click('#a-autoid-0') // accepts the cookies

    for (const url of urls) {
      await page.goto(url, { waitUntil: 'networkidle2' })

      const buyButton = await page.$(buyButtonSelector)
      expect(buyButton).not.toBe(null)

      await page.hover(buyButtonSelector)

      const dropdown = await page.$(dropdownSelector)
      expect(dropdown).not.toBe(null)
    }
  })
})
