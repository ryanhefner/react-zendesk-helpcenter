// @todo Add error handling - Ryan
export default async function fetcher(...args) {
  const res = await fetch(...args)
  return res.json()
}
