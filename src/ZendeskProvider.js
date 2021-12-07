import ZendeskContext from './ZendeskContext'
import { API_VERSION } from './constants'

const ZendeskProvider = ({ apiVersion = API_VERSION, children, defaultLocale = null, domain }) => {
  const value = { apiVersion, domain, defaultLocale }

  return (
    <ZendeskContext.Provider value={value}>
      {children}
    </ZendeskContext.Provider>
  )
}

export default ZendeskProvider
