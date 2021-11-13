import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () => {
    const { token } = useAuth()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [role, setRole] = useState('user')
    const [user, setUser] = useState({})
    const handleOnBlur = (e) => {
        const newUser = { ...user }
        newUser.email = e.target.value
        newUser.role = 'user'
        setUser(newUser)
    }
    const handleOnChange = (e) => {
        const newUser = { ...user }
        newUser.role = e.target.value
        setRole(e.target.value)
        setUser(newUser)
    }
    const handleMakeAdmin = (e) => {
        e.preventDefault()
        console.log(user);
        if (!user.email) {
            alert('email is required')
            return;
        }
        fetch(`https://still-taiga-80375.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setSuccess(true)
                } else {
                    setError(true)
                }
            })

    }
    return (
        <div>
            {
                success && <Box>
                    <Alert severity="success">User role is set successfully</Alert>
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
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select user role"
                    name="role"
                    value={role}
                    onChange={handleOnChange}
                    variant="standard"
                    sx={{ width: '30%', my: 2 }}
                >
                    {['admin', 'user'].map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <br />
                <Button variant='contained' sx={{ width: '30%' }} type="submit"> Set User role</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;