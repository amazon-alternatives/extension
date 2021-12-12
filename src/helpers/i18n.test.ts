import { getTranslations } from './i18n'

test('getTranslations returns French translations', () => {
  const expected = {
    button: 'Acheter ailleurs',
    error: 'Aucune alternative trouvée, cliquez pour envoyer un mail au développeur.',
  }

  expect(getTranslations('www.amazon.fr')).toEqual(expected)
})

test('getTranslations returns English translations', () => {
  const expected = {
    button: 'Buy elsewhere',
    error: 'No alternative found, click to send a mail to the developer.',
  }

  expect(getTranslations('www.amazon.com')).toEqual(expected)
  expect(getTranslations('www.amazon.ca')).toEqual(expected)
  expect(getTranslations('www.amazon.co.uk')).toEqual(expected)
  expect(getTranslations('www.amazon.in')).toEqual(expected)
})

test('getTranslations returns Spanish translations', () => {
  const expected = {
    button: 'Comprar en otro lugar',
    error: 'No se encontró ninguna alternativa, haga clic para enviar un correo electrónico al desarrollador.',
  }

  expect(getTranslations('www.amazon.com.mx')).toEqual(expected)
  expect(getTranslations('www.amazon.es')).toEqual(expected)
})

test('getTranslations returns Japanese translations', () => {
  const expected = {
    button: '他で購入',
    error: '代替手段が見つかりません。クリックして開発者にメールを送信してください',
  }

  expect(getTranslations('www.amazon.co.jp')).toEqual(expected)
})

test('getTranslations returns Italian translations', () => {
  const expexted = {
    button: 'Compra altrove',
    error: 'Nessuna alternativa trovata, clicca per inviare una mail allo sviluppatore.',
  }

  expect(getTranslations('www.amazon.it')).toEqual(expexted)
})

test('getTranslations returns Chinese translations', () => {
  const expected = {
    button: '在其他地方购买',
    error: '找不到替代方案，点击给开发者发邮件',
  }

  expect(getTranslations('www.amazon.cn')).toEqual(expected)
})

test('getTranslations returns Portuguese translations', () => {
  const expected = {
    button: 'Compre em outro lugar',
    error: 'Nenhuma alternativa encontrada, clique para enviar um e-mail ao desenvolvedor.',
  }

  expect(getTranslations('www.amazon.com.br')).toEqual(expected)
})

test('getTranslations returns German translations', () => {
  const expected = {
    button: 'Woanders kaufen',
    error: 'Keine Alternative gefunden, klicken Sie hier, um eine E-Mail an den Entwickler zu senden.',
  }

  expect(getTranslations('www.amazon.de')).toEqual(expected)
  expect(getTranslations('www.amazon.au')).toEqual(expected)
})

test('getTranslations returns default translations', () => {
  expect(getTranslations('www.otso.fr')).toEqual(getTranslations('www.amazon.fr'))
})
