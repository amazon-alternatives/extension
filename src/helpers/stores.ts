import { getTranslations } from './i18n'

const countries = {
  [Countries.CA]: require('./stores/ca').stores,
  [Countries.DE]: require('./stores/de').stores,
  [Countries.FR]: require('./stores/fr').stores,
  [Countries.UK]: require('./stores/uk').stores,
  [Countries.COM]: require('./stores/com').stores,
  [Countries.ES]: require('./stores/es').stores,
  [Countries.IT]: require('./stores/it').stores,
}

export const getStores = (location: Location, category: Category, search: string): Website[] => {
  const websites: Website[] = []

  for (const store of getCountryStores(location.hostname)) {
    if (store.categories.includes(category)) {
      websites.push({
        title: store.title,
        url: store.url.replace(/%1\$s/gi, encodeURIComponent(search)),
      })
    }
  }

  if (websites.length === 0) {
    const title = getTranslations(location.hostname).error
    const to = encodeURIComponent('Adrian Tombu<contact@otso.fr>')
    const subject = encodeURIComponent('Amazon Alternatives - Missing category')
    const body = encodeURIComponent(`
      <b>Product url:</b> <a href="${location.href}">${location.href}</a>
      <b>Host:</b> ${location.hostname}
      <b>Category detected:</b> ${category}
      <b>Search values:</b> ${search}
    `)

    websites.push({ title, url: `mailto:${to}?subject=${subject}&body=${body}` })
  }

  return websites
}

export const getCountryStores = (host: string): Store[] => {
  const tld = host.split('.').pop() || Countries.FR

  return countries[tld] ? countries[tld] : countries[Countries.FR]
}

export const altCategories: AltCategory = {
  art_and_craft_supply: Category.DIY,
  apparel: Category.CLOTHING,
  automotive: Category.AUTOMOTIVE,
  baby_product: Category.BABY,
  beauty: Category.BEAUTY,
  biss_basic: Category.DIY,
  ce: Category.ELECTRONICS,
  digital_video_games: Category.VIDEOGAMES,
  digital_software: Category.SOFTWARE,
  dvd: Category.DVD,
  fabric: Category.DIY,
  furniture: Category.OFFICE_PRODUCTS,
  health_and_beauty: Category.HPC,
  home: Category.KITCHEN,
  home_improvement: Category.KITCHEN,
  home_theater: Category.ELECTRONICS,
  jewelry: Category.JEWELRY,
  kitchen: Category.KITCHEN,
  lawn_and_garden: Category.GARDEN,
  lighting: Category.LIGHTING,
  luggage: Category.LUGGAGE,
  music: Category.POPULAR,
  network_media_player: Category.ELECTRONICS,
  office_electronics: Category.ELECTRONICS,
  office_product: Category.OFFICE_PRODUCTS,
  pc: Category.COMPUTERS,
  pc_accessory: Category.ELECTRONICS,
  photo: Category.PHOTO,
  pet_products: Category.PETS,
  sdp_misc: Category.KITCHEN,
  shoes: Category.SHOES,
  speakers: Category.ELECTRONICS,
  sports: Category.SPORTS,
  software: Category.SOFTWARE,
  toy: Category.TOYS,
  vdo_devices: Category.ELECTRONICS,
  video_games: Category.VIDEOGAMES,
  watch: Category.WATCHES,
  wireless: Category.ELECTRONICS,
  amazon_smp: Category.AMAZON_DEVICES,
}

export const enum Countries {
  CA = 'ca',
  DE = 'de',
  FR = 'fr',
  UK = 'uk',
  COM = 'com',
  ES = 'es',
  IT = 'it',
}

export interface Store {
  title: string
  url: string
  categories: Category[]
}

export interface Website {
  title: string
  url: string
}

export const enum Category {
  PETS = 'pets', // Animalerie
  MOBILE_APPS = 'mobile-apps', // Applis &amp; Jeux
  AUTOMOTIVE = 'automotive', // Auto et Moto
  LUGGAGE = 'luggage', // Bagages
  BEAUTY = 'beauty', // Beauté et Parfum
  LUXURY_BEAUTY = 'luxury-beauty', // Beauté Prestige
  JEWELRY = 'jewelry', // Bijoux
  GIFT_CARDS = 'gift-cards', // Boutique chèques-cadeaux
  DIGITAL_TEXT = 'digital-text', // Boutique Kindle
  DIY = 'hi', // Bricolage
  BABY = 'baby', // Bébés &amp; Puériculture
  SHOES = 'shoes', // Chaussures et Sacs
  KITCHEN = 'kitchen', // Cuisine &amp; Maison
  DVD = 'dvd', // DVD &amp; Blu-ray
  GROCERY = 'grocery', // Epicerie
  OFFICE_PRODUCTS = 'office-products', // Fournitures de bureau
  APPLIANCES = 'appliances', // Gros électroménager
  HANDMADE = 'handmade', // Handmade
  ELECTRONICS = 'electronics', // High-Tech
  HPC = 'hpc', // Hygiène et Santé
  COMPUTERS = 'computers', // Informatique
  PC = 'pc', // Computers & Tablets
  MI = 'mi', // Instruments de musique &amp; Sono
  GARDEN = 'garden', // Jardin
  TOYS = 'toys', // Jeux et Jouets
  VIDEOGAMES = 'videogames', // Jeux vidéo
  ENGLISH_BOOKS = 'english-books', // Livres anglais et étrangers
  BOOKS_INTL_DE = 'books-intl-de', // Fremdsprachige Bücher
  STRIPBOOKS = 'stripbooks', // BD
  BOOKS = 'books', // Livres
  BOOKS_CATALOG = 'books-catalog', // Bücher
  SOFTWARE = 'software', // Logiciels
  LIGHTING = 'lighting', // Luminaires et Eclairage
  FASHION = 'fashion', // Mode
  UNDER_TEN_DOLLARS = 'under-ten-dollars', // Moins de 10€
  WATCHES = 'watches', // Montres
  POPULAR = 'popular', // Musique = CD &amp; Vinyles
  CLASSICAL = 'classical', // Musique classique
  INSTANT_VIDEO = 'instant-video', // Prime Video
  INDUSTRIAL = 'industrial', // Secteur industriel &amp; scientifique
  SPORTS = 'sports', // Sports et Loisirs
  DIGITAL_MUSIC = 'digital-music', // Téléchargement de musique
  CLOTHING = 'clothing', // Vêtements et accessoires
  APPAREL = 'apparel', // Vêtements et accessoires
  APPLE_DEVICES = 'apple-devices', // Apple
  AMAZON_DEVICES = 'amazon-devices', // Amazon devices
  PHOTO = 'photo', // Camera & photo
}

interface AltCategory {
  [key: string]: Category
}
