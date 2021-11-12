import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
const PlaceOrderItem = ({product}) => {
    return (
        <Container sx={{ my: 5, }}>
            <Box>
                <h3>Product Details</h3>
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product name</TableCell>
                                <TableCell align="center">Product Image</TableCell>
                                <TableCell align="center">Product Price</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key=""
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product?.name}
                                </TableCell>
                                <TableCell align="center">
                                    <img src={product?.image} width="60" height="60" style={{ borderRadius: '50%', objectFit: "cover" }} />
                                </TableCell>
                                <TableCell align="center">
                                    ${product?.price}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
       
    );
};

export default PlaceOrderItem;