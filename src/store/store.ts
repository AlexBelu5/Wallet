import {configureStore} from '@reduxjs/toolkit';

import {transactionsApi} from './transactions/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(transactionsApi.middleware),
});
