import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6303c9550de3cd918b3e13ef.mockapi.io/contacts',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    removeContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: (newName, newNumber) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newName,
          number: newNumber,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useRemoveContactMutation,
  useAddContactMutation,
} = contactsApi;
