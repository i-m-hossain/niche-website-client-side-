import { useEffect, useState } from 'react';
import axios from 'axios';
const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://still-taiga-80375.herokuapp.com/products')
            .then(res => setProducts(res.data))
    }, [])
    return [products, setProducts]
}
export default useProducts;