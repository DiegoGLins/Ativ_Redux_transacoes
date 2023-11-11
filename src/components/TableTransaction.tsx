/* eslint-disable react-hooks/exhaustive-deps */

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { listTransaction } from '../store/modules/transacoes/transactionSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function TableTransaction() {
    const transactionRedux = useAppSelector((state) => state.transactions);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listTransaction())
    }, [transactionRedux]);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Descrição</StyledTableCell>
                        <StyledTableCell align="right">tipo</StyledTableCell>
                        <StyledTableCell align="right">valor</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionRedux.map((item) => (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                                {item.descricao}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.type}</StyledTableCell>
                            <StyledTableCell align="right">{item.value}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
