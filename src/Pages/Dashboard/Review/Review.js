import * as React from 'react';
import { Alert, Button, Container, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Rating from '@mui/material/Rating';

const Review = () => {
    const { user } = useAuth()
    const [success, setSuccess] = React.useState(false)
    const [star, setStar] = React.useState(3);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        const review = {
            name: user.displayName,
            email: user.email,
            star: star,
            review: data.review
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    reset()
                };
            })

    }
    return (
        <Container>
            <Box >
                <h3>User Info</h3>
                {
                    success && <Alert severity="success" >your review is recoreded successfully!</Alert>
                }
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <TextField

                        defaultValue={user?.displayName}
                        id="standard-basic-1"
                        label="Name"
                        variant="outlined"
                        {...register("name", { required: true })}
                        sx={{ mt: 3, width: '50%' }}

                    />
                    <p />
                    <TextField
                        defaultValue={user.email}
                        id="standard-basic-2"
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register("email", { required: true })}
                        sx={{ mt: 1, width: '50%' }}
                    />
                    <p />

                    <TextareaAutosize
                        aria-label="empty textarea"
                        minRows={8}
                        placeholder="Write your review"
                        style={{ width: "50%" }}
                        {...register("review", { required: true })}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.review?.type === 'required' && "**Review is required"}
                        </p>
                    }
                    <p />
                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} >
                        <span style={{ marginRight: '30px' }}>Rating:</span>
                        <Rating

                            name="simple-controlled"
                            value={star}
                            onChange={(event, star) => {
                                setStar(star);
                            }}
                        />
                    </Typography>

                    <p />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mb: 4, width: "50%" }}
                    >
                        Submit Review
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Review;