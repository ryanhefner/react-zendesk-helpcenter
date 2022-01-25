// @todo Add error handling - Ryan
export default async function fetcher(...args) {
  const [url, options] = args

  const fetchOptions = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    ...options,
  }

  const res = await fetch(url, fetchOptions)

  return res.json()
}
