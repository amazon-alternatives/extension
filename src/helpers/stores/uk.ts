import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'hive.co.uk',
    url: 'http://www.hive.co.uk/Search/Keyword?keyword=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/gb/en/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=en&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
]
