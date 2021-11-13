import Grid from '@mui/material/Grid';

import { Container } from '@mui/material';
import useProducts from '../../../hooks/useProducts';
import Product from '../Products/Product';
import Header from '../../Shared/Header/Header';
const Explore = () => {
    const [products] = useProducts([])
    return (
        <>
            <Header></Header>
            <Container>
                <h2>Our Products</h2>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {products.map((product, index) => (
                        <Product product={product}></Product>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Explore;