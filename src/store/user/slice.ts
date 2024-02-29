import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {CompletedTransaction, User} from './types';

const initialState: User = {
  address: '',
  mnemonicWords: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      return {
        address: action.payload.address,
        mnemonicWords: action.payload.mnemonicWords,
      };
    },
    setLastTransactionCompleted: (
      state,
      action: PayloadAction<CompletedTransaction>,
    ) => {
      return {
        ...state,
        lastTransactionCompleted: action.payload,
      };
    },
  },
});

// Action creators are automatically generated for each case reducer function
export const {setUser, setLastTransactionCompleted} = userSlice.actions;

export default userSlice.reducer;
