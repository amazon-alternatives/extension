const countries = {
  [Countries.CA]: require('./stores/ca').stores,
  [Countries.DE]: require('./stores/de').stores,
  [Countries.FR]: require('./stores/fr').stores,
  [Countries.UK]: require('./stores/uk').stores,
  [Countries.COM]: require('./stores/com').stores,
  [Countries.ES]: require('./stores/es').stores,
  [Countries.IT]: require('./stores/it').stores,
}

export const getStores = (host: string, category: Category, search: string): Website[] => {
  const websites: Website[] = []

  for (const store of getCountryStores(host)) {
    if (store.categories.includes(category)) {
      websites.push({
        title: store.title,
        url: store.url.replace(/%1\$s/gi, encodeURIComponent(search)),
      })
    }
  }

  return websites
}

export const getCountryStores = (host: string): Store[] => {
  const tld = host.split('.').pop() || Countries.FR

  return countries[tld] ? countries[tld] : countries[Countries.FR]
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
  MI = 'mi', // Instruments de musique &amp; Sono
  GARDEN = 'garden', // Jardin
  TOYS = 'toys', // Jeux et Jouets
  VIDEOGAMES = 'videogames', // Jeux vidéo
  ENGLISH_BOOKS = 'english-books', // Livres anglais et étrangers
  STRIPBOOKS = 'stripbooks', // BD
  BOOKS = 'books', // Livres
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
}
