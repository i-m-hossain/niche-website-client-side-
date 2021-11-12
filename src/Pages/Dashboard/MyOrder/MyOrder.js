import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h3>My orders</h3>
            {
                orders.map((order,index) => {
                    return (

                        <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TableContainer component={Paper} >
                                        <Table aria-label="simple table"> 
                                            <TableBody>
                                                <TableRow
                                                    key=""
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {index+1}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {order?.product?.name}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <img src={order?.product?.image} width="60" height="60" style={{ borderRadius: '50%', objectFit: "cover" }} />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        ${order?.product?.price}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                }

                )
            }
        </div>
    );
};

export default MyOrder;