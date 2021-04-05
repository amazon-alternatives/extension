export const getTranslations = (host: string): Translation => {
  const translations = [
    {
      hosts: ['www.amazon.fr'],
      i18n: {
        button: 'Acheter ailleurs',
      },
    },
    {
      hosts: [
        'www.amazon.com',
        'www.amazon.ca',
        'www.amazon.co.uk',
        'www.amazon.in',
        'smile.amazon.com',
        'smile.amazon.co.uk',
      ],
      i18n: {
        button: 'Buy elsewhere',
      },
    },
    {
      hosts: ['www.amazon.com.mx', 'www.amazon.es'],
      i18n: {
        button: 'Comprar en otro lugar',
      },
    },
    {
      hosts: ['www.amazon.co.jp'],
      i18n: {
        button: '他で購入',
      },
    },
    {
      hosts: ['www.amazon.it'],
      i18n: {
        button: 'Compra altrove',
      },
    },
    {
      hosts: ['www.amazon.cn'],
      i18n: {
        button: '在其他地方购买',
      },
    },
    {
      hosts: ['www.amazon.com.br'],
      i18n: {
        button: 'Compre em outro lugar',
      },
    },
    {
      hosts: ['www.amazon.de', 'www.amazon.au'],
      i18n: {
        button: 'Woanders kaufen',
      },
    },
  ]

  const translation = translations.find(t => t.hosts.includes(host))

  return (translation || translations[0]).i18n
}

interface Translation {
  button: string
}
