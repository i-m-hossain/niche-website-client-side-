import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewItem = ({ review }) => {
    return (
        <Grid item xs={4} md={3} key={review._id}>
            <Card sx={{ p: 4 }} >

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Reviewer: {review.name}
                    </Typography>
                    <Typography variant="body2">
                        What they say: {review.review}
                    </Typography>
                    <Typography variant="body2">
                        <Rating name="read-only" value={review.star} readOnly />
                    </Typography>
                </CardContent>

            </Card>

        </Grid>
    );
};

export default ReviewItem;