import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
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
        getMe: builder.query({
            query: () => ({
                url: '/me',
                method: 'GET',
            }),
            transformResponse: (response) => response?.data,
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
            transformResponse: (response) => response?.data,
        }),
        updateMe: builder.mutation({
            query: (formData) => ({
                url: '/me',
                method: 'PUT',
                body: formData,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: `/users/search`,
                method: 'GET',
            }),
            transformResponse: (response) => {
                const items = response?.data?.items;
                const sortedById = Object.values(items).sort((a, b) => a.id - b.id);
                const transformed = sortedById.reduce((acc, obj) => {
                    acc[obj.id] = obj;
                    return acc;
                }, {});
                return transformed;
            },
        }),
    }),
});

export const {
    useGetMeQuery,
    useGetUserByIdQuery,
    useUpdateMeMutation,
    useGetUsersQuery,
} = userApi;