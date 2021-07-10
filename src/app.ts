import { arrayShuffle } from '@adriantombu/array-shuffle'

import { getStores, altCategories, Category, Website } from './helpers/stores'
import { getTranslations } from './helpers/i18n'

const main = async () => {
  const host = window.location.hostname
  const category = getCategory()
  const search = getSearch(category)
  const stores = arrayShuffle(getStores(host, category, search))

  if (stores.length === 0) {
    console.log('no store found, exiting...')
    return
  }

  attachStores(host, stores)
}

const getCategory = (): Category => {
  let category = document?.querySelector('#nav-subnav')?.getAttribute('data-category') as Category

  if (!category) {
    const altCategory = document?.querySelector('#dp')?.getAttribute('class')?.split(' ')[0] as string
    category = altCategories[altCategory]
  }

  return category
}

const getSearch = (category: Category): string => {
  if (
    [
      Category.ENGLISH_BOOKS,
      Category.STRIPBOOKS,
      Category.BOOKS,
      Category.BOOKS_INTL_DE,
      Category.BOOKS_CATALOG,
    ].includes(category)
  ) {
    const nodes = Array.from(document.querySelectorAll('#detailBullets_feature_div .a-list-item'))
    const isbnNode = nodes.find(node => node.textContent?.includes('ISBN-13'))

    if (!isbnNode) {
      return ''
    }

    return (
      isbnNode.textContent
        ?.split(':')[1]
        .replace(/(\n|\s|-)/g, '')
        .trim() || ''
    )
  }

  return (
    document
      ?.querySelector('[id$="roductTitle"] ')
      ?.textContent?.trim()
      .replace(/[)(:-]/gi, ' ')
      .replace(/\s\s+/g, ' ')
      .split(' ')
      .slice(0, 5)
      .join(' ')
      .trim()
      .toLowerCase() || ''
  )
}

const attachStores = (host: string, stores: Website[]) => {
  const translations = getTranslations(host)
  const storeLinks = stores.map(store => `<li><a href="${store.url}" target="_blank">${store.title}</a></li>`)
  const startNode = getStartNode()
  if (!startNode) {
    return
  }

  const parentNode = startNode.closest('div.a-button-stack')
  const divNode = document.createElement('div')
  divNode.id = 'uak-button'
  divNode.setAttribute('aa-test-buy-button', '')
  divNode.classList.add('a-button-stack')
  divNode.innerHTML = `
      <span class="a-button a-spacing-small a-button-primary a-button-icon">
        <span class="a-button-inner">
        <i class="a-icon a-icon-1click"></i>
          <span class="a-button-text" aria-hidden="true">${translations.button}</span>
        </span>
      </span>

      <div id="uak-stores-modal" style="z-index: 1000" aa-test-drodpown="">
        <ul>${storeLinks.join(' ')}</ul>
      </div>
  `

  parentNode?.parentNode?.insertBefore(divNode, parentNode)

  setStyle(startNode)
}

const getStartNode = (): HTMLElement | null => {
  let startNode = document.getElementById('add-to-cart-button')

  if (!startNode) {
    startNode = document.getElementById('add-to-cart-button-ubb')
  }

  if (!startNode) {
    startNode = document.getElementById('buybox-see-all-buying-choices-announce')
  }

  if (!startNode) {
    startNode = document.getElementById('one-click-button')
  }

  if (!startNode) {
    startNode = document.getElementById('buy-now-button')
  }

  return startNode
}

const setStyle = (startNode: HTMLElement | null) => {
  if (!startNode) {
    return
  }

  const buyButton = startNode?.parentNode?.parentNode as HTMLElement
  buyButton.classList.remove('a-button-primary', 'a-button-oneclick')

  const buyNow = document.getElementById('submit.buy-now') as HTMLElement
  buyNow.classList.remove('a-button-oneclick')
}

main()
