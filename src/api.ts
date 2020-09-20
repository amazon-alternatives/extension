import { Countries } from './helpers/stores'

const API_BASE = 'https://api.amazon-alternatives.com'

export const fetchApi = async (url: string, method: 'GET' | 'POST' = 'GET', body: object = {}) => {
  let data

  try {
    const res = await fetch(`${API_BASE}${url}`, {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      mode: 'cors',
    })

    data = await res.json()
  } catch (err) {
    console.error(err)
    return null
  }

  return data
}

export const apiVisit = async (host: string) => {
  let asinNode = document.querySelector('[name="asin"]')

  if (!asinNode) {
    asinNode = document.getElementById('ASIN')
  }

  const asin = (asinNode as HTMLInputElement).value
  const country = host.split('.').pop() || Countries.FR

  await fetchApi('/visits', 'POST', { asin, country })
}
