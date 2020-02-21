import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'betterworldbooks.com',
    url: 'https://www.betterworldbooks.com/search/results?q=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'bookshop.org',
    url: 'https://bookshop.org/books?keywords=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/us/en/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
]
