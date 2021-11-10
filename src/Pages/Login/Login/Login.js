import React from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import useFirebase from '../../../hooks/useFirebase'
const Login = () => {
    const { signInWithEmail } = useFirebase()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmail(data.email, data.password)
    };

    return (
        <Box>
            <Container>
                <Typography variant="h4" sx={{ my: 2 }}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        id="standard-basic"
                        label="Email"
                        type="email"
                        variant="standard"
                        {...register("email", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.email?.type === 'required' && "**Email is required"}
                        </p>
                    }
                    
                    <TextField
                        id="standard-basic"
                        label="password"
                        type="password"
                        variant="standard"
                        {...register("password", { required: true })}
                        sx={{ width: '50%' }}
                    />
                    {
                        errors && <p style={{ color: "red" }}>
                            {errors.password?.type === 'required' && "** Password is required"}
                        </p>
                    }
                    
                    
                    <Button type="submit" variant="contained" sx={{ width: "50%" }}>Login</Button>
                </form>
                <h4>Not registered? Please <Link to="/register">Register</Link></h4>
            </Container>

        </Box>
    );
}

export default Login;