import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.2.146:8080/api/v1.0',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');
            const authorization = accessToken ? `Bearer ${accessToken}` : '';
            headers.set('Authorization', authorization);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (formData) => ({
                url: '/login',
                method: 'POST',
                body: formData
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),
        signup: builder.mutation({
            query: (formData) => ({
                url: '/register',
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useSignupMutation,
} = authApi;