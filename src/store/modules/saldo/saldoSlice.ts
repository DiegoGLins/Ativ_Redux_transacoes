import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SaldoType {
    value: number
}

const initialState: SaldoType = { value: 0 }

const saldoSlice = createSlice({
    name: 'saldo',
    initialState,
    reducers: {
        debito: (state, action: PayloadAction<number>) => {
            state.value = state.value - action.payload
        },
        credito: (state, action: PayloadAction<number>) => {
            state.value = state.value += action.payload
        },
    }
});

export const { credito, debito } = saldoSlice.actions;
export default saldoSlice.reducer;
