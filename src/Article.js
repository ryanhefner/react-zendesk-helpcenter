import React, { ReactFragment, useEffect } from 'react'
import useZendesk from './useZendesk'

/**
 *
 * @param {Object} props
 * @param {string=} props.apiVersion
 * @param {(number | string)} props.articleId
 * @param {string=} props.domain
 * @param {ReactFragment=} props.loadingComponent
 * @param {string=} props.locale
 * @param {(error) => void=} props.onError
 * @param {(data) => void=} props.onLoad
 * @returns
 */
const Article = ({
  apiVersion,
  articleId,
  domain,
  loadingComponent,
  locale,
  onError,
  onLoad,
}) => {
  const { data, error } = useZendesk({
    apiVersion,
    domain,
    endpoint: articleId ? `/articles/${articleId}` : null,
    includeLocale: true,
    locale,
  })

  // onError handlings
  useEffect(() => {
    if (error) {
      onError ? onError(error) : console.error(error)
    }
  }, [error])

  // onLoad handling
  useEffect(() => {
    if (data) {
      onLoad && onLoad(data)
    }
  }, [data])

  // Conditionally display loadingComponent, if provided
  if (!data?.article?.body) {
    if (loadingComponent) {
      const LoadingComponent = loadingComponent
      return <LoadingComponent />
    }

    return null
  }

  return <div dangerouslySetInnerHTML={{ __html: data.article.body }} />
}

export default Article
