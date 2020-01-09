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

export function getConfirmText() {
  const host = window.location.hostname

  switch (host) {
    case 'www.amazon.com':
    case 'www.amazon.ca':
    case 'www.amazon.co.uk':
    case 'www.amazon.in':
      return 'Do you really wanna buy from Amazon instead of one of his alternatives?'
    case 'www.amazon.com.mx':
    case 'www.amazon.es':
      return '¿Realmente quieres comprar en Amazon en lugar de una de sus alternativas?'
    case 'www.amazon.co.jp':
      return '彼の選択肢の1つではなく、本当にAmazonから購入したいですか？'
    case 'www.amazon.it':
      return 'Vuoi davvero acquistare da Amazon invece di una delle sue alternative?'
    case 'www.amazon.cn':
      return '您是否真的想从亚马逊购买而不是他的替代品之一？'
    case 'www.amazon.com.br':
      return 'Você realmente quer comprar da Amazon em vez de uma de suas alternativas?'
    case 'www.amazon.de':
    case 'www.amazon.au':
      return 'Möchten Sie wirklich statt einer seiner Alternativen bei Amazon kaufen?'
    default:
      return "Voulez vous vraiment acheter sur Amazon au lieu d'une de ses alternatives ?"
  }
}
