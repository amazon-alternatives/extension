window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome
})()

let url

browser.runtime.onMessage.addListener(getNewTabUrl)
browser.browserAction.onClicked.addListener(openNewTab)

function getNewTabUrl (request) {
  url = request.url
}

function openNewTab (tab) {
  browser.tabs.create({ url: url })
}
