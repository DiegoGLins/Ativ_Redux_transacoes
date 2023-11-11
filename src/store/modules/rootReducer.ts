import { combineReducers } from '@reduxjs/toolkit'
import transactionSlice from './transacoes/transactionSlice';
import saldoSlice from './saldo/saldoSlice';


export default combineReducers({
  transactions: transactionSlice, saldoSlice
})
