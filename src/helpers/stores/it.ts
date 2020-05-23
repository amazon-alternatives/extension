import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=it&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
]
