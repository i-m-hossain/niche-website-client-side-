import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AdminRoute = ({ children, ...rest }) => {
    const { user, role, isLoading } = useAuth();
    if (role !== 'admin') {
        return <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress />
        </Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && role === 'admin' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default AdminRoute;