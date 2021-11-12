import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import User from './User';
import axios from 'axios';

const ManageUserRole = () => {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])
    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure you want to delete the user?');
        if (confirm) {
            axios.delete(`http://localhost:5000/users/${id}`)
                .then(res => {
                    if (res.data.deletedCount>0){
                        const restUser = users.filter(user => user._id !== id);
                        setUsers(restUser)
                    }
                })
        }
    }
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Current Role</TableCell>
                            <TableCell align="center">Change User role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => <User userItem={user} handleDelete={handleDelete}></User>)}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    export default ManageUserRole;
