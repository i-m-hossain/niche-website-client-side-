import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrderItem from './MyOrderItem/MyOrderItem';


const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleOnClick = (id) => {
        const confirm = window.confirm('Are you sure want to cancel the order?')
        if(confirm){
            axios.delete(`http://localhost:5000/orders/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount>0){
                        const restOrders = orders.filter(order => order._id !== id)
                        setOrders(restOrders)
                    }
                })
        }
    }

    return (
        <div>
            {
                orders.length>0 ? <Box>
                    <h3>My orders</h3>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <TableContainer component={Paper} >
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>#</TableCell>
                                                <TableCell align="center">Product name</TableCell>
                                                
                                                <TableCell align="center">Product Image</TableCell>
                                                <TableCell align="center">Product Price</TableCell>
                                                <TableCell align="center">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                orders.map((order, index) =>
                                                    <MyOrderItem
                                                        index={index}
                                                        order={order}
                                                        product={order.product}
                                                        handleOnClick={handleOnClick}
                                                    >

                                                    </MyOrderItem>)
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                :
                <h3> You haven't ordered yet, please purchase some</h3>
            }
        </div>
    )
}

export default MyOrder;