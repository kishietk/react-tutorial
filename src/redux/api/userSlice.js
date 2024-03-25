import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
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
        // Endpoint to get logged in user's data
        getMe: builder.query({
            query: () => ({
                url: '/me',
                method: 'GET',
            }),
            transformResponse: (response) => response?.data,
        }),
        // Endpoint to get user by id
        getUserById: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
            transformResponse: (response) => response?.data,
        }),
        // Endpoint to update logged in user's data
        updateMe: builder.mutation({
            query: (formData) => ({
                url: '/me',
                method: 'PUT',
                body: formData,
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    // Updating the data for 'getMe' and 'getUserById' queries with the new data
                    dispatch(userApi.util.updateQueryData('getMe', undefined, (draft) => draft = { ...draft, ...arg }));
                    dispatch(userApi.util.updateQueryData('getUserById', arg.id, (draft) => draft = { ...draft, ...arg }));
                }
                catch (error) {
                    console.log(error);
                }
            },
            // Invalidate specific cached data
            invalidatesTags: (result, error, arg) => [
                { type: 'User', id: arg.id },
                { type: 'Users' }
            ],
        }),
        // Endpoint to get all users
        getUsers: builder.query({
            query: () => ({
                url: `/users/search`,
                method: 'GET',
            }),
            transformResponse: (response) => {
                // Sorting the users by id and transforming the array into an object with user ids as keys
                const items = response?.data?.items;
                const sortedById = Object.values(items).sort((a, b) => a.id - b.id);
                const transformed = sortedById.reduce((acc, obj) => {
                    acc[obj.id] = obj;
                    return acc;
                }, {});
                return transformed;
            },
            // Provides tags for cached data
            providesTags: [{ type: 'Users' }],
        }),
    }),
});

export const {
    useGetMeQuery,
    useGetUserByIdQuery,
    useUpdateMeMutation,
    useGetUsersQuery,
} = userApi;