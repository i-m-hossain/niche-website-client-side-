import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useProducts = ()=>{
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
    }, [])
    return[products, setProducts]
}
export default useProducts;