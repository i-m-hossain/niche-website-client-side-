import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const history = useHistory()
    const handleOnClick = (id) => {
        history.push(`/placeOrder/${id}`)
    }
    return (
        <Grid item xs={12} md={4} key={product._id}>
            <Card sx={{ p: 4 }} >
                <CardMedia
                    component="img"
                    alt={product.name}
                    width="100%"
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            product.description.split('.').slice(0, 2)
                        }....
                    </Typography>
                </CardContent>


                <Button size="small" variant="contained" onClick={() => handleOnClick(product._id)}>Buy now</Button>

            </Card>

        </Grid>
    );
};

export default Product;