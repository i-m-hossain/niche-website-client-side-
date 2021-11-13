import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ReviewItem from './ReviewItem';

const Review = () => {
    const [reviews, setReviews] = useState([])
    fetch('https://still-taiga-80375.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    return (
        <Container>
            <h2>User reviews</h2>
            {
                reviews.length > 0 && <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                    {reviews.map((review, index) => (
                        <ReviewItem review={review} index={index}></ReviewItem>
                    ))}
                </Grid>
            }
            {
                reviews.length === 0 && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
        </Container>
    );
};

export default Review;