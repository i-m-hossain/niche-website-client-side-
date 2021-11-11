import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const handleOnBlur = (e) => {
        if (e.target.value) {
            setEmail(e.target.value)
        }
    }
    const handleMakeAdmin = (e) => {
        e.preventDefault()
        console.log(email);
        if (!email) {
            alert('email is required')
            return;
        }
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:email})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount> 0){
                    setSuccess(true)
                }else{
                    setError(true)
                }
            })

    }
    return (
        <div>
            {
                success && <Box>
                    <Alert severity="success">Admin is created successfully</Alert>
                </Box>
            }
            {
                error && <Box>
                    <Alert severity="error">User not found or already admin</Alert>
                </Box>
            }
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    id="standard-basic"
                    label="Your email"
                    variant="standard"
                    type="email"
                    name="email"
                    sx={{ width: '30%', my: 2 }}
                    onBlur={handleOnBlur}
                />
                <br />
                <Button variant='contained' sx={{ width: '30%' }} type="submit"> Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;