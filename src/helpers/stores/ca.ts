import { Store, Category } from '../stores'
import { amazonDevicesStores } from './_amazon-devices'

export const stores: Store[] = [
  ...amazonDevicesStores,
  {
    title: 'leslibraires.ca',
    url: 'https://www.leslibraires.ca/recherche/?t=&a=&e=&c=&i=%1$s&f=&ip=',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/ca/en/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'feedbooks.com',
    url: 'https://www.feedbooks.com/search?lang=en&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'ethicalbooksearch.com',
    url: 'https://www.ethicalbooksearch.com/ca?source=amazon-alternatives-extension&query=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS, Category.DIGITAL_TEXT],
  },
]
