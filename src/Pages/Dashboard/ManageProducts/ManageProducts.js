import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import ProductItem from './ProductItem';
import useProducts from '../../../hooks/useProducts';

const ManageProducts = () => {
   const [products, setProducts] = useProducts([])
    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure you want to delete the user?');
        if (confirm) {
            axios.delete(`http://localhost:5000/products/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restUser = products.filter(user => user._id !== id);
                        setProducts(restUser)

                    }
                })
        }

    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((productItem) => <ProductItem productItem={productItem} handleDelete={handleDelete}></ProductItem>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ManageProducts;
