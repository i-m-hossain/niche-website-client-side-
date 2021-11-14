import { Button, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrderItem = ({ order, product, index, handleOnClick }) => {
    const { role } = useAuth()
    const [status, setStatus] = useState(order.status)
    console.log(order);
    const handleStatus = (id) => {
        if (role !== 'admin') {
            alert('You must be an admin to change the order status')
            return;
        }
        console.log('i am clicked');
        const body = { status: status === 'pending' ? "shipped" : "pending" }
        console.log(body);
        axios.put(`https://still-taiga-80375.herokuapp.com/orders/${id}`, body)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setStatus(status === 'pending' ? "shipped" : "pending")
                }
            })
    }
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
                <img src={product?.image} width="60" height="60" style={{ borderRadius: '50%', objectFit: "cover" }} alt={product.name} />
            </TableCell>
            <TableCell align="center">
                ${product?.price}
            </TableCell>
            <TableCell align="center">
                <Button onClick={() => handleStatus(order._id)}>{status}</Button>
            </TableCell>
            <TableCell align="center">
                <Button

                    variant="contained"
                    sx={{ backgroundColor: 'red' }}
                    onClick={() => handleOnClick(order._id)}>Cancel Order</Button>
            </TableCell>
        </TableRow>


    );
};

export default MyOrderItem;