window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome
})()

const nodes = Array.from(document.querySelectorAll('.content li'))
const isbnNode = nodes.filter(node => node.innerText.includes('ISBN-13'))[0]

if (isbnNode) {
  const isbn = isbnNode.innerText.split(': ')[1].replace('-', '').trim()
  const url = `http://www.placedeslibraires.fr/dlivre.php?gencod=${isbn}&rid=`

  // attachStoreButton(url)

  attachStoreList(isbn)

  browser.runtime.sendMessage({ url: url })
}

// function attachStoreButton (url) {
//   const parentNode = document.getElementById('add-to-cart-button').parentNode
//     .parentNode.parentNode

//   const storeNode = document.createElement('a')
//   storeNode.target = '_blank'
//   storeNode.href = url
//   storeNode.innerHTML = `
//     <span class="a-button a-spacing-small a-button-primary a-button-icon">
//       <span class="a-button-inner">
//       <i class="a-icon a-icon-1click"></i>
//         <span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">Acheter en librairie</span>
//       </span>
//     </span>
//   `

//   parentNode.insertBefore(storeNode, null)
// }

function attachStoreList (isbn) {
  const parentNode = document.getElementById('add-to-cart-button').parentNode
    .parentNode.parentNode
  const divNode = document.createElement('div')
  divNode.id = 'uak-button'
  divNode.innerHTML = `
    <span class="a-button a-spacing-small a-button-primary a-button-icon">
      <span class="a-button-inner">
      <i class="a-icon a-icon-1click"></i>
        <span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">Acheter en librairie</span>
      </span>
    </span>

    <div id="uak-stores-modal">
      <ul>
        <li><a href="http://www.placedeslibraires.fr/dlivre.php?gencod=${isbn}&rid=" target="_blank">placedeslibraires.fr</a></li>
        <li><a href="https://www.lalibrairie.com/livres/xxx_0-0000000_${isbn}.html" target="_blank">lalibrairie.com</a></li>
        <li><a href="https://www.leslibraires.fr/livre/${isbn}" target="_blank">leslibraires.fr</a></li>
      </ul>
    </div>
  `

  parentNode.insertBefore(divNode, null)
}
