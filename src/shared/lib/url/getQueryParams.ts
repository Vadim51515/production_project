export const getQueryParams = (params: TOptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams(window.location?.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
};
