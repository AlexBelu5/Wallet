import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {StoreTransaction} from './types';

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  tagTypes: ['transactions'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://testnet-api.multiversx.com/'}),
  endpoints: builder => ({
    getTransaction: builder.query<StoreTransaction[], string>({
      query: address =>
        `accounts/${address}/transactions?size=10&fields=receiver,sender,value`,
      providesTags: ['transactions'],
    }),
    broadcastTransaction: builder.mutation({
      query: data => {
        return {url: '/transactions', method: 'POST', body: data};
      },
      invalidatesTags: ['transactions'],
    }),
  }),
});

export const {
  useLazyGetTransactionQuery,
  useGetTransactionQuery,
  useBroadcastTransactionMutation,
  endpoints,
  util: {invalidateTags},
} = transactionsApi;
