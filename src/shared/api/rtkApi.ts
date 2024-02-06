import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { lStorage } from '../../helpers/function/lStorage';
import { USER_LOCAL_STORAGE_KEY } from '../constants/localStorage';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = lStorage.get(USER_LOCAL_STORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (_) => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { } = rtkApi
