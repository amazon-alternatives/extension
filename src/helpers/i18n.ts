export function getTranslations(isBook: boolean): Translation {
  const host = window.location.hostname
  const translations = [
    {
      hosts: ['www.amazon.fr'],
      i18n: {
        button: isBook ? 'Acheter en librairie' : 'Acheter ailleurs',
        confirm: "Voulez vous vraiment acheter sur Amazon au lieu d'une de ses alternatives ?",
      },
    },
    {
      hosts: ['www.amazon.com', 'www.amazon.ca', 'www.amazon.co.uk', 'www.amazon.in'],
      i18n: {
        button: isBook ? 'Buy in a bookstore' : 'Buy elsewhere',
        confirm: 'Do you really wanna buy from Amazon instead of one of his alternatives?',
      },
    },
    {
      hosts: ['www.amazon.com.mx', 'www.amazon.es'],
      i18n: {
        button: isBook ? 'Compra en una librería' : 'Comprar en otro lugar',
        confirm: '¿Realmente quieres comprar en Amazon en lugar de una de sus alternativas?',
      },
    },
    {
      hosts: ['www.amazon.co.jp'],
      i18n: {
        button: isBook ? '書店で購入する' : '他で購入',
        confirm: '彼の選択肢の1つではなく、本当にAmazonから購入したいですか？',
      },
    },
    {
      hosts: ['www.amazon.it'],
      i18n: {
        button: isBook ? 'Acquista in una libreria' : 'Compra altrove',
        confirm: 'Vuoi davvero acquistare da Amazon invece di una delle sue alternative?',
      },
    },
    {
      hosts: ['www.amazon.cn'],
      i18n: {
        button: isBook ? '在书店买东西' : '在其他地方购买',
        confirm: '您是否真的想从亚马逊购买而不是他的替代品之一？',
      },
    },
    {
      hosts: ['www.amazon.com.br'],
      i18n: {
        button: isBook ? 'Comprar em uma livraria' : 'Compre em outro lugar',
        confirm: 'Você realmente quer comprar da Amazon em vez de uma de suas alternativas?',
      },
    },
    {
      hosts: ['www.amazon.de', 'www.amazon.au'],
      i18n: {
        button: isBook ? 'Kaufen in einer Buchhandlung' : 'Woanders kaufen',
        confirm: 'Möchten Sie wirklich statt einer seiner Alternativen bei Amazon kaufen?',
      },
    },
  ]

  const translation = translations.find(t => t.hosts.includes(host))

  return (translation || translations[0]).i18n
}

interface Translation {
  button: string
  confirm: string
}
