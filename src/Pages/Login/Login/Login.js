import React from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import useFirebase from '../../../hooks/useFirebase'
const Login = () => {
    const { signInWithEmail} = useFirebase()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                        variant="standard"
                        {...register("name", { required: true, maxLength: 20 })}
                        sx={{ my: 1, width:'50%' }}
                    />
                    <br />
                    <TextField
                        id="standard-basic"
                        label="password"
                        type="password"
                        variant="standard"
                        {...register("password", { required: true, maxLength: 20 })}
                        sx={{ width:'50%' }}
                    />
                    <br />
                    <Button type="submit" variant="contained" sx={{mt:4,width: "50%"}}>Login</Button>
                </form>
                <h4>Not registered? Please <Link to="/register">Register</Link></h4>
            </Container>

        </Box>
    );
}

export default Login;