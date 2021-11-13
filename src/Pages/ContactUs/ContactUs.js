import * as React from 'react';
import { Alert, Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Rating from '@mui/material/Rating';

const ContactUs = () => {

    const [success, setSuccess] = React.useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const contactData = {
            name: data.name,
            email: data.email,
            body: data.body
        }
        fetch('https://still-taiga-80375.herokuapp.com/contactUs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
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
        <Box sx={{ bgcolor: "#FCEDDA", p: 4, mt: 2 }} >
            <h3>Contact us</h3>
            <Container >
                {
                    success && <Alert severity="success" >We got your feedback!</Alert>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="standard-basic-1"
                        label="Name"
                        variant="outlined"
                        {...register("name", { required: true })}
                        sx={{ mt: 3, width: '50%' }}

                    />
                    <p />
                    <TextField

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
                        placeholder="Content"
                        style={{ width: "50%" }}
                        {...register("body", { required: true })}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.body?.type === 'required' && "**Review is required"}
                        </p>
                    }
                    <p />


                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mb: 4, width: "50%" }}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default ContactUs;