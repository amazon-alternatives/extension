export const getTranslations = (host: string): Translation => {
  const translations = [
    {
      hosts: ['www.amazon.fr'],
      i18n: {
        button: 'Acheter ailleurs',
        error: 'Aucune alternative trouvée, cliquez pour envoyer un mail au développeur.',
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
        error: 'No alternative found, click to send a mail to the developer.',
      },
    },
    {
      hosts: ['www.amazon.com.mx', 'www.amazon.es'],
      i18n: {
        button: 'Comprar en otro lugar',
        error: 'No se encontró ninguna alternativa, haga clic para enviar un correo electrónico al desarrollador.',
      },
    },
    {
      hosts: ['www.amazon.co.jp'],
      i18n: {
        button: '他で購入',
        error: '代替手段が見つかりません。クリックして開発者にメールを送信してください',
      },
    },
    {
      hosts: ['www.amazon.it'],
      i18n: {
        button: 'Compra altrove',
        error: 'Nessuna alternativa trovata, clicca per inviare una mail allo sviluppatore.',
      },
    },
    {
      hosts: ['www.amazon.cn'],
      i18n: {
        button: '在其他地方购买',
        error: '找不到替代方案，点击给开发者发邮件',
      },
    },
    {
      hosts: ['www.amazon.com.br'],
      i18n: {
        button: 'Compre em outro lugar',
        error: 'Nenhuma alternativa encontrada, clique para enviar um e-mail ao desenvolvedor.',
      },
    },
    {
      hosts: ['www.amazon.de', 'www.amazon.au'],
      i18n: {
        button: 'Woanders kaufen',
        error: 'Keine Alternative gefunden, klicken Sie hier, um eine E-Mail an den Entwickler zu senden.',
      },
    },
  ]

  const translation = translations.find(t => t.hosts.includes(host))

  return (translation || translations[0]).i18n
}

interface Translation {
  button: string
  error: string
}
