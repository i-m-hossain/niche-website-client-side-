import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2} style={{ backgroundColor: '#F0F1F5' }} sx={{ p: 5 }}>
                <Grid item xs={12} md={4} >
                    <Box>
                        <Typography variant="h6" gutterBottom component="div">
                            GET IN TOUCH
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <AiOutlineHome /> 2020 Willshire Glen, Out of
                            Alpharetta, GA-30009
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <BsTelephone /> (+00) 121 025 0214
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <AiOutlineMail /> info@example.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom component="div">
                        Links
                    </Typography>
                    <Box>

                        <Typography variant="subtitle2" gutterBottom component="div">
                            <Link to="/register">Register</Link>
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <Link to="/register">Login</Link>
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <Link to="/explore">Explore products</Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom component="div" >
                        FOLLOW US
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                        <Typography variant="subtitle2" gutterBottom component="div">
                            <FaFacebookF style={{ padding: "6px", marginRight: "10px", border: "1px solid", borderRadius: "50%" }} />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <FaTwitter style={{ padding: "6px", marginRight: "10px", border: "1px solid", borderRadius: "50%" }} />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            <AiOutlineGoogle style={{ padding: "6px", marginRight: "10px", border: "1px solid", borderRadius: "50%" }} />
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;