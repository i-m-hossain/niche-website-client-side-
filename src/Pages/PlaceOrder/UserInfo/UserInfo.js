import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';

const UserInfo = ({ user, submitUserInfo }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const info = {
            streetAddress: data.streetAddress,
            phone: data.phone,
            city: data.city,
            country: data.country,
            name: user.displayName,
            email: user.email
        }
        submitUserInfo(info, reset)
    }
    const state = { readOnly: true }
    return (
        <Container sx={{ my: 5, }}>
            <Box >
                <h3>User Info</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ border: '1px solid #ddd' }}
                >
                    <TextField
                        inputProps={{ readOnly: Boolean(state.readOnly) }}
                        defaultValue={user?.displayName}
                        id="standard-basic-1"
                        label="Name"
                        variant="outlined"
                        {...register("name", { required: true })}
                        sx={{ mt: 3, width: '50%' }}

                    />
                    <p />
                    <TextField
                        inputProps={{ readOnly: Boolean(state.readOnly) }}
                        defaultValue={user.email}
                        id="standard-basic-2"
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register("email", { required: true })}
                        sx={{ mt: 1, width: '50%' }}
                    />
                    <p />
                    <TextField
                        id="standard-basic-3"
                        label="Phone number"
                        type="number"
                        variant="outlined"
                        {...register("phone", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.phone?.type === 'required' && "**Street address is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-3"
                        label="Street address"
                        type="text"
                        variant="outlined"
                        {...register("streetAddress", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.streetAddress?.type === 'required' && "**Phone number is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-3"
                        label="City"
                        type="text"
                        variant="outlined"
                        {...register("city", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.streetAddress?.type === 'required' && "**Street address is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-3"
                        label="Country"
                        type="text"
                        variant="outlined"
                        {...register("country", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.country?.type === 'required' && "**Country is required"}
                        </p>
                    }

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mb: 4, width: "50%" }}
                    >
                        Place Order
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default UserInfo;