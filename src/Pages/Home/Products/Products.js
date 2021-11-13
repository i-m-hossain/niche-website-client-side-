import Grid from '@mui/material/Grid';
import Product from './Product';
import { Container } from '@mui/material';
import useProducts from '../../../hooks/useProducts';
const Products = () => {
    const [products] = useProducts([])
    return (
        <Container>
            <h2>Our Products</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                {products.slice(0, 6).map((product, index) => (
                    <Product product={product}></Product>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;