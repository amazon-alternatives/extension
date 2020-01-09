const sprintf = require('sprintf-js').sprintf
import { arrayShuffle } from '@adriantombu/array-shuffle'

import ca from './stores/ca'
import de from './stores/de'
import fr from './stores/fr'
import uk from './stores/uk'

const countries = { ca, de, fr, uk }

export function getStores(category: keyof Store, search: string) {
  const host = window.location.hostname
  const tld = host.split('.').pop() || 'FR'
  const country = countries[tld] ? countries[tld] : countries.fr
  const stores = !!country[category] ? country[category] : []

  console.log('getStores', category, search, stores)

  return arrayShuffle(
    stores.map(store => ({
      title: store.title,
      url: sprintf(store.url, encodeURIComponent(search)),
    })),
  )
}

export interface Website {
  title: string
  url: string
}

export interface Store {
  'pets': Website[] // Animalerie
  'mobile-apps': Website[] // Applis &amp; Jeux
  'automotive': Website[] // Auto et Moto
  'luggage': Website[] // Bagages
  'beauty': Website[] // Beauté et Parfum
  'luxury-beauty': Website[] // Beauté Prestige
  'jewelry': Website[] // Bijoux
  'gift-cards': Website[] // Boutique chèques-cadeaux
  'digital-text': Website[] // Boutique Kindle
  'diy': Website[] // Bricolage
  'baby': Website[] // Bébés &amp; Puériculture
  'shoes': Website[] // Chaussures et Sacs
  'kitchen': Website[] // Cuisine &amp; Maison
  'dvd': Website[] // DVD &amp; Blu-ray
  'grocery': Website[] // Epicerie
  'office-products': Website[] // Fournitures de bureau
  'appliances': Website[] // Gros électroménager
  'handmade': Website[] // Handmade
  'electronics': Website[] // High-Tech
  'hpc': Website[] // Hygiène et Santé
  'computers': Website[] // Informatique
  'mi': Website[] // Instruments de musique &amp; Sono
  'garden': Website[] // Jardin
  'toys': Website[] // Jeux et Jouets
  'videogames': Website[] // Jeux vidéo
  'english-books': Website[] // Livres anglais et étrangers
  'stripbooks': Website[] // Livres
  'books': Website[] // Livres
  'software': Website[] // Logiciels
  'lighting': Website[] // Luminaires et Eclairage
  'fashion': Website[] // Mode
  'under-ten-dollars': Website[] // Moins de 10€
  'watches': Website[] // Montres
  'popular': Website[] // Musique : CD &amp; Vinyles
  'classical': Website[] // Musique classique
  'instant-video': Website[] // Prime Video
  'industrial': Website[] // Secteur industriel &amp; scientifique
  'sports': Website[] // Sports et Loisirs
  'digital-music': Website[] // Téléchargement de musique
  'clothing': Website[] // Vêtements et accessoires
}
