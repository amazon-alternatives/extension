import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'genialokal.de',
    url: 'https://www.genialokal.de/Suche/?q=%1$s',
    categories: [Category.BOOKS_INTL_DE, Category.BOOKS_CATALOG],
  },
  {
    title: 'buchhandel.de',
    url: 'https://www.buchhandel.de/suche/ergebnisse?query=%1$s',
    categories: [Category.BOOKS_INTL_DE, Category.BOOKS_CATALOG],
  },
  {
    title: 'buchkatalog.at',
    url:
      'https://www.buchkatalog.at/webapp/wcs/stores/servlet/KNVAdvancedSearchResult?storeId=270205&catalogId=4099276460822233275&langId=-3&fromAdvanceSearch=AdvanceSearch&pageType=HU&stock=&iehack=%E2%98%A0&offer=&avail=&media=All+Media&title=&keyword=&author1=&author=&actor1=&actor=&topic=&publisher1=&publisher=&movie_category=All+Categories&articleno=%1$s&lang=&lang1=deutsch&movie_subtitle=&covertype=all&range_price=from-to&price_from=&price_to=&range_age=from-to&age_from=&age_to=&range_age1=from-to&age1_from=&age1_to=&range_age2=from-to&age2_from=&age2_to=&range_issuedate=from-to&issuedate_from=&issuedate_to=&issue1=&issue=&nott=',
    categories: [Category.BOOKS_INTL_DE, Category.BOOKS_CATALOG],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/de/de/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=de&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
]
