import React, { ReactFragment, useEffect } from 'react'
import cleanProps from 'clean-react-props'
import useZendesk from './useZendesk'

/**
 * Article - Component
 *
 * @param {Object} props
 * @param {string=} props.apiVersion
 * @param {(number | string)} props.articleId
 * @param {string=} props.domain
 * @param {ReactFragment=} props.loadingComponent
 * @param {string=} props.locale
 * @param {(error) => void=} props.onError
 * @param {(data) => void=} props.onLoad
 * @returns {JSX.Element}
 */
const Article = ({
  apiVersion,
  articleId,
  domain,
  loadingComponent,
  locale,
  onError,
  onLoad,
  ...rest
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

  return <div {...cleanProps(rest)} dangerouslySetInnerHTML={{ __html: data.article.body }} />
}

export default Article
