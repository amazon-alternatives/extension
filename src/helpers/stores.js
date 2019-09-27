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
      },
      {
        title: 'seeseiten.at',
        url: `https://seeseiten.buchkatalog.at/webapp/wcs/stores/servlet/KNVAdvancedSearchResultView?storeId=203705&articleno=${isbn}`
      },
      {
        title: 'buchkatalog.at',
        url: `https://www.buchkatalog.at/webapp/wcs/stores/servlet/KNVAdvancedSearchResult?storeId=270205&catalogId=4099276460822233275&langId=-3&fromAdvanceSearch=AdvanceSearch&pageType=HU&stock=&iehack=%E2%98%A0&offer=&avail=&media=All+Media&title=&keyword=&author1=&author=&actor1=&actor=&topic=&publisher1=&publisher=&movie_category=All+Categories&articleno=${isbn}&lang=&lang1=deutsch&movie_subtitle=&covertype=all&range_price=from-to&price_from=&price_to=&range_age=from-to&age_from=&age_to=&range_age1=from-to&age1_from=&age1_to=&range_age2=from-to&age2_from=&age2_to=&range_issuedate=from-to&issuedate_from=&issuedate_to=&issue1=&issue=&nott=`
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
