export function getButtonTitle(isBook: boolean) {
  const host = window.location.hostname

  switch (host) {
    case 'www.amazon.com':
    case 'www.amazon.ca':
    case 'www.amazon.co.uk':
    case 'www.amazon.in':
      return isBook ? 'Buy in a bookstore' : 'Buy elsewhere'
    case 'www.amazon.com.mx':
    case 'www.amazon.es':
      return isBook ? 'Compra en una librería' : 'Comprar en otro lugar'
    case 'www.amazon.co.jp':
      return isBook ? '書店で購入する' : '他で購入'
    case 'www.amazon.it':
      return isBook ? 'Acquista in una libreria' : 'Compra altrove'
    case 'www.amazon.cn':
      return isBook ? '在书店买东西' : '在其他地方购买'
    case 'www.amazon.com.br':
      return isBook ? 'Comprar em uma livraria' : 'Compre em outro lugar'
    case 'www.amazon.de':
    case 'www.amazon.au':
      return isBook ? 'Kaufen in einer Buchhandlung' : 'Woanders kaufen'
    default:
      return isBook ? 'Acheter en librairie' : 'Acheter ailleurs'
  }
}
