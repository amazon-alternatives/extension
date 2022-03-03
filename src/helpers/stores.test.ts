import { getStores, getCountryStores, Category } from './stores'

const checkObjectKeys = (stores, keys = ['categories', 'url', 'title']) => {
  stores.forEach(store => {
    expect(Object.keys(store).sort()).toEqual(keys.sort())
  })
}

test('getStores returns a formatted list of stores', () => {
  const stores = getStores({ hostname: 'www.amazon.fr', href: '' } as Location, Category.ELECTRONICS, 'Dell XPS 13')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(14)
  checkObjectKeys(stores, ['title', 'url'])
})

test('getStores returns a default value when no stores where found', () => {
  const stores = getStores(
    { hostname: 'www.amazon.fr', href: '' } as Location,
    '404_CATEGORY' as Category,
    'Some random product',
  )

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(1)
  checkObjectKeys(stores, ['title', 'url'])
})

test('getCountryStores returns French stores', () => {
  const stores = getCountryStores('www.amazon.fr')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(54)
  checkObjectKeys(stores)
})

test('getCountryStores returns American stores', () => {
  const stores = getCountryStores('www.amazon.com')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(18)
  checkObjectKeys(stores)
})

test('getCountryStores returns Canadian stores', () => {
  const stores = getCountryStores('www.amazon.ca')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(10)
  checkObjectKeys(stores)
})

test('getCountryStores returns UK stores', () => {
  const stores = getCountryStores('www.amazon.co.uk')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(17)
  checkObjectKeys(stores)
})

test('getCountryStores returns Spanian stores', () => {
  const stores = getCountryStores('www.amazon.es')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(8)
  checkObjectKeys(stores)
})

test('getCountryStores returns Italian stores', () => {
  const stores = getCountryStores('www.amazon.it')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(8)
  checkObjectKeys(stores)
})

test('getCountryStores returns German stores', () => {
  const stores = getCountryStores('www.amazon.de')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(21)
  checkObjectKeys(stores)
})

test('getCountryStores with inexsting tld returns default stores', () => {
  const stores = getCountryStores('www.amazon.xyz')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(54)
  checkObjectKeys(stores)
})
test('getCountryStores with empty host returns default stores', () => {
  const stores = getCountryStores('')

  expect(stores).toMatchSnapshot()
  expect(stores.length).toBe(54)
  checkObjectKeys(stores)
})

test.todo('getCountryStores returns Indian stores')
test.todo('getCountryStores returns Mexican stores')
test.todo('getCountryStores returns Japanese stores')
test.todo('getCountryStores returns Chinese stores')
test.todo('getCountryStores returns Brazilian stores')
test.todo('getCountryStores returns Australian stores')
