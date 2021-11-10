import React from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
    const { registerWithEmail, authError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password_2) {
            alert('password is not matched')
            return;
        }
        registerWithEmail(data.email, data.password, data.name, history, location)

    };

    return (
        <Box>
            <Container>
                <Typography variant="h4" sx={{ my: 2 }}>
                    Register
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="standard-basic-1"
                        label="Your name"
                        variant="standard"
                        {...register("name", { required: true, maxLength: 20 })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.name?.type === 'required' && "**Name is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-2"
                        label="Email"
                        type="email"
                        variant="standard"
                        {...register("email", { required: true, maxLength: 20 })}
                        sx={{ my: 1, width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.email?.type === 'required' && "**Email is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-3"
                        label="password"
                        type="password"
                        variant="standard"
                        {...register("password", { required: true, maxLength: 20 })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.password?.type === 'required' && "**password is required"}
                        </p>
                    }
                    <TextField
                        id="standard-basic-4"
                        label="Retype password"
                        type="password"
                        variant="standard"
                        {...register("password_2", { required: true, maxLength: 20 })}
                        sx={{ width: '50%' }}
                    />
                    <br />
                    {
                        authError && <h4 style={{ color: 'red' }}>{authError.split(':')[1]}</h4>
                    }
                    <Button type="submit" variant="contained" sx={{ mt: 4, width: "50%" }}>Register</Button>
                </form>
                <h4>Already registered? Please <Link to="/login">Login</Link></h4>
            </Container>

        </Box>
    );
}

export default Register;