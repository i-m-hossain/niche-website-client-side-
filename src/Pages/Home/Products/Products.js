import Grid from '@mui/material/Grid';
import Product from './Product';
import { CircularProgress, Container } from '@mui/material';
import useProducts from '../../../hooks/useProducts';
import { Box } from '@mui/system';
const Products = () => {
    const [products] = useProducts([])
    return (
        <Container>
            <h2>Our Products</h2>
            {
                products.length > 0 && <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {products.slice(0, 6).map((product, index) => (
                        <Product product={product}></Product>
                    ))}
                </Grid>
            }
            {
                products.length === 0 && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
        </Container>
    );
};

export default Products;