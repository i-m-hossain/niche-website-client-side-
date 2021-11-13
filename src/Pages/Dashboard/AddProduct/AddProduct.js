import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const AddProduct = () => {
    const [success, setSuccess] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const service = { name: data.name, image: data.image, description: data.shortDescription, price: data.price }
        console.log(service);
        fetch('https://still-taiga-80375.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    reset()
                }
            })

    };
    return (
        <Box>
            <Container style={{ border: '1px solid #ddd', padding: "30px 30px" }}>
                {
                    success && <Alert severity="success">Product is added successfully!</Alert>
                }
                <Typography variant="h4" sx={{ my: 2 }}>
                    Add a product
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="standard-basic-1"
                        label="Product name"
                        variant="standard"
                        {...register("name", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.name?.type === 'required' && "**Name is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-2"
                        label="Product Image url"
                        type="text"
                        variant="standard"
                        {...register("image", { required: true })}
                        sx={{ my: 1, width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.image?.type === 'required' && "**Image is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-2"
                        label="Product price"
                        type="text"
                        variant="standard"
                        {...register("price", { required: true })}
                        sx={{ my: 1, width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.price?.type === 'required' && "**price is required"}
                        </p>
                    }
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        minCols={5}
                        placeholder="Short description about the product"
                        style={{ width: "50%" }}
                        name="shortDescription"
                        {...register("shortDescription", { required: true })}

                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.shortDescription?.type === 'required' && "**Description is required"}
                        </p>
                    }


                    <Button type="submit" variant="contained" sx={{ mt: 4, width: "50%" }}>Add product</Button>
                </form>

            </Container>

        </Box>
    );
};

export default AddProduct;