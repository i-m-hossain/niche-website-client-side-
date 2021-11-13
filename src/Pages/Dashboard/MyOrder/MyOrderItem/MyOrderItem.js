import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

const MyOrderItem = ({ order, product, index, handleOnClick }) => {
    console.log(order);
    return (
        <TableRow
            key=""
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {product?.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {order?.name}
            </TableCell>
            <TableCell align="center">
                <img src={product?.image} width="60" height="60" style={{ borderRadius: '50%', objectFit: "cover" }} />
            </TableCell>
            <TableCell align="center">
                ${product?.price}
            </TableCell>
            <TableCell align="center">
                <Button variant="contained" sx={{ backgroundColor: 'red' }} onClick={() => handleOnClick(order._id)}>Cancel Order</Button>
            </TableCell>
        </TableRow>


    );
};

export default MyOrderItem;