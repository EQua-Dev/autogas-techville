import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserProfile } from '../types/api';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://autogas-backend.onrender.com/api/' }), // Replace with your actual API URL
  endpoints: (builder) => ({
    createUserProfile: builder.mutation<UserProfile, UserProfile>({
      query: (userData) => ({
        url: 'conference/register/', // Replace with your actual endpoint
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserProfileMutation } = api;
