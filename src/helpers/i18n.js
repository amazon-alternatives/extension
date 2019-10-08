export default function getButtonTitle() {
  const host = window.location.hostname

  switch (host) {
    case 'www.amazon.com':
    case 'www.amazon.ca':
    case 'www.amazon.co.uk':
    case 'www.amazon.in':
      return 'Buy in a bookstore'
    case 'www.amazon.com.mx':
    case 'www.amazon.es':
      return 'Compra en una librería'
    case 'www.amazon.co.jp':
      return '書店で購入する'
    case 'www.amazon.it':
      return 'Acquista in una libreria'
    case 'www.amazon.cn':
      return '在书店买东西'
    case 'www.amazon.com.br':
      return 'Comprar em uma livraria'
    case 'www.amazon.de':
    case 'www.amazon.au':
      return 'Kaufen in einer Buchhandlung'
    default:
      return 'Acheter en librairie'
  }
}
