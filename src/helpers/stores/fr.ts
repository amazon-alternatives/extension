import { Category, Store } from '../stores'

export const stores: Store[] = [
  {
    title: 'fnac.com',
    url: 'https://www.fnac.com/SearchResult/ResultList.aspx?Search=%1$s',
    categories: [Category.ELECTRONICS, Category.COMPUTERS],
  },
  {
    title: 'ldlc.com',
    url: 'https://www.ldlc.com/recherche/%1$s/',
    categories: [Category.ELECTRONICS, Category.COMPUTERS],
  },
  {
    title: 'boulanger.com',
    url: 'https://www.boulanger.com/resultats?tr=%1$s',
    categories: [Category.ELECTRONICS, Category.COMPUTERS],
  },
  {
    title: 'but.fr',
    url: 'https://www.but.fr/Common/Search/SearchProductsList?KeyWords=%1$s',
    categories: [Category.ELECTRONICS, Category.COMPUTERS],
  },
  {
    title: 'backmarket.fr',
    url: 'https://www.backmarket.fr/search/?q=%1$s&ga_search=%1$s#?q=%1$s',
    categories: [Category.ELECTRONICS, Category.COMPUTERS],
  },
  {
    title: 'cdiscount.com',
    url: 'https://www.cdiscount.com/search/10/%1$s.html',
    categories: [Category.ELECTRONICS, Category.COMPUTERS],
  },
  {
    title: 'placedeslibraires.fr',
    url: 'http://www.placedeslibraires.fr/dlivre.php?gencod=%1$s&rid=',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'lalibrairie.com',
    url: 'https://www.lalibrairie.com/livres/xxx_0-0000000_%1$s.html',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'leslibraires.fr',
    url: 'https://www.leslibraires.fr/livre/%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'recyclivre.com',
    url: 'https://www.recyclivre.com/shop/recherche?orderby=price&orderway=asc&s=%1$s&submit_search=',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/fr/fr/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
]
