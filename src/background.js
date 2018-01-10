window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome
})()

let url

browser.runtime.onMessage.addListener(request => (url = request.url))
browser.browserAction.onClicked.addListener(tab =>
  browser.tabs.create({ url: url })
)
