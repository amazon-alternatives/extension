import { getTranslations } from './i18n'

test('getTranslations returns French translations', () => {
  expect(getTranslations('www.amazon.fr')).toEqual({ button: 'Acheter ailleurs' })
})

test('getTranslations returns English translations', () => {
  expect(getTranslations('www.amazon.com')).toEqual({ button: 'Buy elsewhere' })
  expect(getTranslations('www.amazon.ca')).toEqual({ button: 'Buy elsewhere' })
  expect(getTranslations('www.amazon.co.uk')).toEqual({ button: 'Buy elsewhere' })
  expect(getTranslations('www.amazon.in')).toEqual({ button: 'Buy elsewhere' })
})

test('getTranslations returns Spanish translations', () => {
  expect(getTranslations('www.amazon.com.mx')).toEqual({ button: 'Comprar en otro lugar' })
  expect(getTranslations('www.amazon.es')).toEqual({ button: 'Comprar en otro lugar' })
})

test('getTranslations returns Japanese translations', () => {
  expect(getTranslations('www.amazon.co.jp')).toEqual({ button: '他で購入' })
})

test('getTranslations returns Italian translations', () => {
  expect(getTranslations('www.amazon.it')).toEqual({ button: 'Compra altrove' })
})

test('getTranslations returns Chinese translations', () => {
  expect(getTranslations('www.amazon.cn')).toEqual({ button: '在其他地方购买' })
})

test('getTranslations returns Portuguese translations', () => {
  expect(getTranslations('www.amazon.com.br')).toEqual({ button: 'Compre em outro lugar' })
})

test('getTranslations returns German translations', () => {
  expect(getTranslations('www.amazon.de')).toEqual({ button: 'Woanders kaufen' })
  expect(getTranslations('www.amazon.au')).toEqual({ button: 'Woanders kaufen' })
})

test('getTranslations returns default translations', () => {
  expect(getTranslations('www.otso.fr')).toEqual({ button: 'Acheter ailleurs' })
})
