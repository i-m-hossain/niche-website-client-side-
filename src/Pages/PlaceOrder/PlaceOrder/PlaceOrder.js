import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../../Shared/Header/Header';

import { Container, Grid } from '@mui/material';
import PlaceOrderItem from '../PlaceOrderItem/PlaceOrderItem';
import UserInfo from '../UserInfo/UserInfo';
import useAuth from '../../../hooks/useAuth';
import Cart from '../Cart/Cart';

const PlaceOrder = () => {
    const { user } = useAuth()
    const [product, setProduct] = useState({})
    const history = useHistory()
    const { productId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    console.log(product)
    const submitUserInfo = (info, reset) => {
        const productOrdered = { _id: productId, qty: 1 }
        const order = { ...info, order: productOrdered }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    history.replace('/dashboard/pay')
                    reset()
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <Container>

                        <Grid container spacing={2}>

                            {/* product description */}
                            <Grid item xs={12} md={12}>

                                <PlaceOrderItem product={product}></PlaceOrderItem>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Cart></Cart>
                            </Grid>
                        </Grid>
                    </Container>


                </Grid>
                <Grid item xs={12} md={6}>
                    <UserInfo user={user} submitUserInfo={submitUserInfo}></UserInfo>
                </Grid>

            </Grid>

        </div>
    );
};

export default PlaceOrder;