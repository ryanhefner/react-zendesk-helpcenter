export default useZendesk;
declare function useZendesk({ apiVersion, domain, endpoint, includeLocale, locale, }: {
    apiVersion?: string;
    domain: any;
    endpoint: any;
    includeLocale?: boolean;
    locale: any;
}): {
    data: any;
    error: any;
};
