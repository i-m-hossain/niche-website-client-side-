import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const Service = ({service}) => {
    return (
        <Grid item xs={12} md={4} key={service._id}>
            <Card sx={{p:4}} >
                <CardMedia
                    component="img"
                    alt={service.name}
                    width="100%"
                    image={service.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            service.description.split('.').slice(0,2)
                        }....
                    </Typography>
                </CardContent>
                
                    
                <Button size="small" variant="contained">Order now</Button>
                
            </Card>

        </Grid>
    );
};

export default Service;