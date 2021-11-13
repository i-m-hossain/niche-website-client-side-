import { Button, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const User = ({ userItem, handleDelete }) => {
    const { user } = useAuth()
    const [userRole, setUserRole] = useState(userItem.role)

    const handleUserRole = (person) => {
        if (user.email === person.email) {
            alert("you can't change your user role by yourself")
            return
        }
        fetch('https://still-taiga-80375.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setUserRole(userRole === 'admin' ? 'user' : 'admin')
                }
            })
    }
    const handleDeleteUser = (email, id) => {
        if (user.email === email) {
            alert("you can't delete yourself")
            return
        }
        handleDelete(id)
    }

    return (
        <TableRow
            key={userItem._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center">
                {userItem.displayName}
            </TableCell>
            <TableCell align="center">{userItem.email}</TableCell>
            <TableCell align="center">{userRole}</TableCell>
            <TableCell align="center">
                <Button
                    onClick={() => handleUserRole({ email: userItem.email, role: userRole })}
                    title={`Click to change role as ${userRole === 'admin' ? 'user' : 'admin'}`}
                    variant="outlined"
                >
                    {userRole}
                </Button>

            </TableCell>
            <TableCell align="right">
                <Button
                    onClick={() => handleDeleteUser(userItem.email, userItem._id)}
                    variant="contained"
                    sx={{ bgcolor: 'error.main' }}>
                    Delete User
                </Button>
            </TableCell>

        </TableRow>
    );
};

export default User;