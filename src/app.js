import getStoreList from './helpers/stores'
import getButtonTitle from './helpers/i18n'

window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome
})()

const nodes = Array.from(document.querySelectorAll('.content li'))
const isbnNode = nodes.filter(node => node.innerText.includes('ISBN-13'))[0]

if (isbnNode) {
  const isbn = isbnNode.innerText.split(': ')[1].replace('-', '').trim()
  const storeList = getStoreList(isbn)

  attachStoreList(storeList)

  browser.runtime.sendMessage({ url: storeList[0].url })
}

function attachStoreList (storeList) {
  const buttonTitle = getButtonTitle()
  const storeLinks = storeList.map(
    store =>
      `<li><a href="${store.url}" target="_blank">${store.title}</a></li>`
  )

  let startNode = document.getElementById('add-to-cart-button')

  if (!startNode) {
    startNode = document.getElementById(
      'buybox-see-all-buying-choices-announce'
    )
  }

  const parentNode = startNode.parentNode.parentNode.parentNode
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

  parentNode.insertBefore(divNode, null)
}
