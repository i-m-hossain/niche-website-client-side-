import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Service from './Service';
import { Container } from '@mui/material';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/services')
        .then(res => setServices(res.data))
    },[])
    return (
        <Container>
            <h2>Our Products</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                {services.slice(0, 6).map((service, index) => (
                    <Service service={service}></Service>
                ))}
            </Grid>
        </Container>
    );
};

export default Services;