import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TransactionType {
  id: string;
  descricao: string;
  type: string;
  value: number
}

const initialState: TransactionType[] = [];

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionType>) => {
      state.push(action.payload);
      return state;
    },
    listTransaction: (state) => {
      state.map(state => state)
      return state
    }
  }
});

export const { addTransaction, listTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
