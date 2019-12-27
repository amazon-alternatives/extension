import { getStores, Store, Website } from './helpers/stores'
import { getButtonTitle } from './helpers/i18n'

window['browser'] = (function() {
  return (window as any).msBrowser || (window as any).browser || (window as any).chrome
})()

function main() {
  const categoryNode = document.querySelector('#nav-subnav')

  if (!categoryNode) {
    console.log('not in a category, exiting...')
    return
  }

  let stores, title, isBook
  const category = categoryNode.getAttribute('data-category')

  if (!category) {
    console.log('not category detected, exiting...')
    return
  }

  console.log('category', category)

  if (['english-books', 'stripbooks', 'books'].includes(category)) {
    const nodes = Array.from(document.querySelectorAll('.content li'))

    const isbnNode = nodes.find(node => node.textContent?.includes('ISBN-13'))
    if (!isbnNode) {
      console.log('not ISBN found, exiting...')
      return
    }

    isBook = true
    title = isbnNode.textContent
      ?.split(': ')[1]
      .replace('-', '')
      .trim()
  } else {
    title = document
      ?.querySelector('#productTitle')
      ?.textContent?.trim()
      .split(' ')
      .slice(0, 4)
      .join(' ')
  }

  stores = getStores(category as keyof Store, title)

  if (stores.length === 0) {
    console.log('not store found, exiting...')
    return
  }

  attachStores(stores, isBook)

  window['browser'].runtime.sendMessage({ url: stores[0].url })
}

function attachStores(stores: Website[], isBook: boolean) {
  const buttonTitle = getButtonTitle(isBook)
  const storeLinks = stores.map(store => `<li><a href="${store.url}" target="_blank">${store.title}</a></li>`)

  let startNode = document.getElementById('add-to-cart-button')

  if (!startNode) {
    startNode = document.getElementById('buybox-see-all-buying-choices-announce')

    if (!startNode) return
  }

  const parentNode = startNode?.parentNode?.parentNode?.parentNode
  const divNode = document.createElement('div')
  divNode.id = 'uak-button'
  divNode.innerHTML = `
    <span class="a-button a-spacing-small a-button-primary a-button-icon">
      <span class="a-button-inner">
      <i class="a-icon a-icon-1click"></i>
        <span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">${buttonTitle}</span>
      </span>
    </span>

    <div id="uak-stores-modal">
      <ul>${storeLinks.join(' ')}</ul>
    </div>
  `

  parentNode?.insertBefore(divNode, null)
}

main()
