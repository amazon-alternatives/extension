import { Store, Category } from '../stores'

export const amazonDevicesStores: Store[] = [
  {
    title: 'apple.com',
    url: 'https://www.apple.com/store',
    categories: [Category.AMAZON_DEVICES],
  },
  {
    title: 'google.com',
    url: 'https://store.google.com',
    categories: [Category.AMAZON_DEVICES],
  },
  {
    title: 'nvidia.com',
    url: 'https://www.nvidia.com/en-us/shield/',
    categories: [Category.AMAZON_DEVICES],
  },
  {
    title: 'roku.com',
    url: 'https://www.roku.com',
    categories: [Category.AMAZON_DEVICES],
  },
  {
    title: 'kobo.com',
    url: 'https://us.kobobooks.com/collections/ereaders',
    categories: [Category.AMAZON_DEVICES],
  },
  {
    title: 'boox.com',
    url: 'https://shop.boox.com/collections/eink-tablet',
    categories: [Category.AMAZON_DEVICES],
  },
]
