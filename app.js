window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome
})()

const nodes = Array.from(document.querySelectorAll('.content li'))
const isbnNode = nodes.filter(node => node.innerText.includes('ISBN-13'))[0]

if (isbnNode) {
  const isbn = isbnNode.innerText.split(': ')[1].replace('-', '').trim()
  const storeList = getStoreList(isbn)

  attachStoreList(storeList)

  browser.runtime.sendMessage({ url: storeList[0].url })
}

function attachStoreList (storeList) {
  const buttonTitle = getButtonTitle()
  const storeLinks = storeList.map(
    store =>
      `<li><a href="${store.url}" target="_blank">${store.title}</a></li>`
  )

  let startNode = document.getElementById('add-to-cart-button')

  if (!startNode) {
    startNode = document.getElementById(
      'buybox-see-all-buying-choices-announce'
    )
  }

  const parentNode = startNode.parentNode.parentNode.parentNode
  const divNode = document.createElement('div')
  divNode.id = 'uak-button'
  divNode.innerHTML = `
    <span class="a-button a-spacing-small a-button-primary a-button-icon">
      <span class="a-button-inner">
      <i class="a-icon a-icon-1click"></i>
        <span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">${buttonTitle}</span>
      </span>
    </span>

    <div id="uak-stores-modal">
      <ul>${storeLinks.join(' ')}</ul>
    </div>
  `

  parentNode.insertBefore(divNode, null)
}

function getStoreList (isbn) {
  const host = window.location.hostname
  const tld = host.split('.').pop()
  const stores = getStores(isbn)

  return stores[tld] ? stores[tld] : stores['fr']
}

function getButtonTitle () {
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

function getStores (isbn) {
  return {
    ca: [
      {
        title: 'leslibraires.ca',
        url: `http://www.leslibraires.ca/recherche/?t=&a=&e=&c=&i=${isbn}&f=&ip=`
      }
    ],
    uk: [
      {
        title: 'hive.co.uk',
        url: `http://www.hive.co.uk/Search/Keyword?keyword=${isbn}`
      }
    ],
    fr: [
      {
        title: 'placedeslibraires.fr',
        url: `http://www.placedeslibraires.fr/dlivre.php?gencod=${isbn}&rid=`
      },
      {
        title: 'lalibrairie.com',
        url: `https://www.lalibrairie.com/livres/xxx_0-0000000_${isbn}.html`
      },
      {
        title: 'leslibraires.fr',
        url: `https://www.leslibraires.fr/livre/${isbn}`
      }
    ]
  }
}
