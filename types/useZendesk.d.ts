export default useZendesk;
/**
 * Zendesk Help Center API Hook
 *
 * @param {Object} props
 * @param {string=} props.apiVersion
 * @param {string=} props.domain
 * @param {string} props.endpoint
 * @param {boolean=} props.includeLocale
 * @param {string=} props.locale
 * @returns
 */
declare function useZendesk({ apiVersion, domain, endpoint, includeLocale, locale, }: {
    apiVersion?: string | undefined;
    domain?: string | undefined;
    endpoint: string;
    includeLocale?: boolean | undefined;
    locale?: string | undefined;
}): {
    data: any;
    error: any;
};
