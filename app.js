window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome
})()

const nodes = Array.from(document.querySelectorAll('.content li'))
const isbnNode = nodes.filter(node => node.innerText.includes('ISBN-13'))[0]

if (isbnNode) {
  const isbn = isbnNode.innerText.split(': ')[1].replace('-', '').trim()
  const url = `http://www.placedeslibraires.fr/dlivre.php?gencod=${isbn}&rid=`

  attachStoreButton(url)

  browser.runtime.sendMessage({ url: url })
}

function attachStoreButton (url) {
  const parentNode = document.getElementById('add-to-cart-button').parentNode
    .parentNode.parentNode

  const storeNode = document.createElement('a')
  storeNode.target = '_blank'
  storeNode.href = url
  storeNode.innerHTML = `
    <span class="a-button a-spacing-small a-button-primary a-button-icon">
      <span class="a-button-inner">
      <i class="a-icon a-icon-1click"></i>
        <span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">Acheter en librairie</span>
      </span>
    </span>
  `

  parentNode.insertBefore(storeNode, null)
}
