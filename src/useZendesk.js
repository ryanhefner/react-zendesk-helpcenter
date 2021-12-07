import { useContext, useMemo } from 'react'
import useSWR from 'swr'
import ZendeskContext from './ZendeskContext'
import fetcher from './libs/fetch'
import { API_VERSION } from './constants'

const useZendesk = ({
  apiVersion = API_VERSION,
  domain,
  endpoint,
  includeLocale = false,
  locale,
}) => {
  const {
    apiVersion: contextApiVersion,
    defaultLocale,
    domain: contextDomain,
  } = useContext(ZendeskContext)

  // @todo Add endpoint validation - Ryan
  const apiUrl = useMemo(() => {
    // Abort data fetching if domain is not provided
    if (!(domain || contextDomain)) {
      warning(false, 'No `domain` provided to `useZendesk`, aborting request')
      return null
    }

    // Abort data fetching if endpoint is not provided
    if (!endpoint) {
      warning(false, 'No `endpoint` provided to `useZendesk`, aborting request')
      return null
    }

    return `https://${domain || contextDomain}.zendesk.com/api/${apiVersion || contextApiVersion}/help_center${(locale || defaultLocale) && includeLocale ? `/${locale || defaultLocale}` : ''}${endpoint}`
  }, [
    apiVersion,
    contextApiVersion,
    contextDomain,
    defaultLocale,
    domain,
    endpoint,
    includeLocale,
    locale,
  ])

  const { data, error } = useSWR(apiUrl, fetcher)

  return { data, error }
}

export default useZendesk
