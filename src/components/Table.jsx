import * as React from 'react';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Table({data}) {
    return (
        <TableContainer component={Paper}>
            <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(({date, value}) => (
                    <TableRow
                        key={date}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{date}</TableCell>
                        <TableCell align="right">{value}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </MUITable>
        </TableContainer>
    );
}
