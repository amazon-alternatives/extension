import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'leslibraires.ca',
    url: 'http://www.leslibraires.ca/recherche/?t=&a=&e=&c=&i=%1$s&f=&ip=',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/ca/en/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=en&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'ethicalbooksearch.com',
    url: 'https://www.ethicalbooksearch.com/ca/books/m/is:%1$s/?source=amazon-alternatives-extension',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS, Category.DIGITAL_TEXT],
  },
]
