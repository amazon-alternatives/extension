export default function getStoreList (isbn) {
  const host = window.location.hostname
  const tld = host.split('.').pop()
  const stores = getStores(isbn)

  return stores[tld] ? stores[tld] : stores.fr
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
    de: [
      {
        title: 'genialokal.de',
        url: `https://www.genialokal.de/Suche/?q=${isbn}`
      },
      {
        title: 'buchhandel.de',
        url: `https://www.buchhandel.de/suche/ergebnisse?query=${isbn}`
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
