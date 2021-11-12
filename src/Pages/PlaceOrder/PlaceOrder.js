import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';

import { Container, Grid } from '@mui/material';
import PlaceOrderItem from './PlaceOrderItem';

const PlaceOrder = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product)
    return (
        <div>
            <Header></Header>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Grid container spacing={2}>
                            {/* product description */}
                            <Grid item md={12}>
                                <PlaceOrderItem product={product}></PlaceOrderItem>
                            </Grid>
                            <Grid item md={12}>

                            </Grid>
                        </Grid>
                    </Container>


                </Grid>

            </Grid>

        </div>
    );
};

export default PlaceOrder;