import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../../Images/bg.jpg'
const bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundBlendMode: 'darken, luminosity',
    backgroundColor: 'rgba(45, 58, 74, .9)',
}

const Banner = () => {

    return (
        <Box >
            <Grid container style={bg} >
                <Grid item xs={12} md={6} style={bg}>
                    <img src="https://i.ibb.co/tstQ9c7/11.jpg" alt="" width="100%" style={{ objectFit: "contain" }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: "#fff" }}>
                    <Typography variant="h2" gutterBottom component="div">
                        New collection
                    </Typography>
                    <Typography variant="h4">
                        Grab yours today!
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2, bgcolor: '#F1D9D8', }} >
                        <Link to="/explore">Shop now</Link>
                    </Button>
                </Grid>


            </Grid>
        </Box >
    );
};

export default Banner;