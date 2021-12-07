export default Article;
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
declare function Article({ apiVersion, articleId, domain, loadingComponent, locale, onError, onLoad, }: {
    apiVersion?: string | undefined;
    articleId: (number | string);
    domain?: string | undefined;
    loadingComponent?: ReactFragment | undefined;
    locale?: string | undefined;
    onError?: (error: any) => void;
    onLoad?: (data: any) => void;
}): JSX.Element;
import { ReactFragment } from "react";
