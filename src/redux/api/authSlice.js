import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.2.146:8080/api/v1.0',
        prepareHeaders: (headers) => {
            // Setting the Authorization header with the access token if available
            const accessToken = localStorage.getItem('accessToken');
            const authorization = accessToken ? `Bearer ${accessToken}` : '';
            headers.set('Authorization', authorization);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // Endpoint to login user
        login: builder.mutation({
            query: (formData) => ({
                url: '/login',
                method: 'POST',
                body: formData
            }),
        }),
        // Endpoint to logout user
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
} = authApi;