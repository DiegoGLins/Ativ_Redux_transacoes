import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { v4 as uuid } from 'uuid';
import { TransactionType, addTransaction } from '../store/modules/transacoes/transactionSlice';
import { credito, debito } from '../store/modules/saldo/saldoSlice';
import TableTransaction from './TableTransaction';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Transactions: React.FC = () => {
  const [descricao, setDescricao] = useState<string>('')
  const [value, setValue] = useState<number>(0)

  const saldo = useSelector((state: RootState) => state.saldoSlice.value)
  const dispatch = useAppDispatch();

  function handleAdd(type: string) {
    const transaction: TransactionType = { id: uuid(), descricao: descricao, type: type, value: value }

    dispatch(addTransaction(transaction));

    if (type === 'debito') {
      dispatch(debito(value))
      setDescricao('')
      setValue(0)
    }
    else if (type === 'credito') {
      dispatch(credito(value))
      setDescricao('')
      setValue(0)
    }
  }

  return (
    <Grid container spacing={3} sx={{ alignItems: 'center', marginTop: '50px', justifyContent: 'center' }} >
      <Typography variant="h4">Lista de transações</Typography>
      <Grid container item xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextField fullWidth label='Digite uma descrição' variant='outlined' value={descricao} onChange={e => setDescricao(e.target.value)}>Descrição</TextField>
      </Grid>
      <Grid container xs={12} item sx={{ paddingTop: '25px', justifyContent: 'center', alignItems: 'center' }}>
        <TextField sx={{ width: '300px' }} variant='outlined' label='Digite um valor' value={value} onChange={e => setValue(Number(e.target.value))}>Valor</TextField>
        <Box sx={{ marginRight: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ margin: '10px 0px 0px 30px' }}><strong>Saldo</strong></Typography>
          <Typography sx={{ margin: '10px 0px 0px 10px', border: '1px solid #aeaaaa', padding: '5px 60px 5px', borderRadius: '6px' }} variant='body1'>{saldo}</Typography>
        </Box>
        <Grid item sx={{ gap: '10px', margin: '15px' }}>
          <Button sx={{ marginLeft: '5px', marginRight: '8px' }} variant="contained" color='success' onClick={() => handleAdd('credito')}>
            Depositar
          </Button>
          <Button variant="contained" color='primary' onClick={() => handleAdd('debito')}>
            Sacar
          </Button>
        </Grid>
        <Grid container xs={12} sx={{ paddingTop: '25px' }}>
          <TableTransaction />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Transactions;
