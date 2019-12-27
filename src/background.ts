const browser = (function() {
  return (window as any).msBrowser || (window as any).browser || (window as any).chrome
})()

let url: string

browser.runtime.onMessage.addListener((request: Req) => (url = request.url))
browser.browserAction.onClicked.addListener((tab: Tab) => {
  if (url && tab.url.includes('amazon.')) {
    browser.tabs.create({ url: url })
  }
})

interface Req {
  url: string
}

interface Tab {
  url: string
}
