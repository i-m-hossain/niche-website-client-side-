import { Button, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ProductItem = ({ productItem, handleDelete }) => {
    const { user } = useAuth()
    
    return (
        <TableRow
            key={productItem._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center">
                {productItem.name}
            </TableCell>
            <TableCell align="center">
                <img src={ productItem.image} width="80px"></img>
            </TableCell>

            <TableCell align="center">
                <Button
                    onClick={() => handleDelete(productItem._id)}
                    variant="contained"
                    sx={{ bgcolor: 'error.main' }}>
                    Delete Product
                </Button>
            </TableCell>

        </TableRow>
    );
};

export default ProductItem;