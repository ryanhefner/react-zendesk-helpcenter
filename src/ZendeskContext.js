import { createContext } from 'react'

const ZendeskContext = createContext({
  apiVersion: undefined,
  defaultLocale: undefined,
  domain: undefined,
})

export default ZendeskContext
