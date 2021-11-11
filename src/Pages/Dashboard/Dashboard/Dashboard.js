import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom"
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import UserRoute from '../../Login/UserRoute/UserRoute';
import ManageUserRole from '../ManageUserRole/ManageUserRole';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, role, logout } = useAuth()
    const { window } = props;
    let { path, url } = useRouteMatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box>
                <ListItem>
                    <NavLink to='/'>Home</NavLink>
                </ListItem>
                {
                    role === 'user' && <Box>
                        <ListItem>
                            <NavLink to={`${url}/pay`}>Pay</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to={`${url}/myOrders`}>My Orders</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to={`${url}/review`}>Review</NavLink>
                        </ListItem>
                    </Box>
                }

                {
                    role === 'admin' && <Box>
                        <ListItem>
                            <NavLink to={`${url}/addProduct`}>Add A Product</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to={`${url}/makeAdmin`}>Set user role</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to={`${url}/manageUserRole`}>Manage user role</NavLink>
                        </ListItem>
                        <ListItem> <NavLink to={`${url}/manageProducts`}>Manage Products</NavLink></ListItem>
                    </Box>
                }
                <ListItem>
                    <Button onClick={logout}>Logout</Button>
                </ListItem>
            </Box>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Nokshi
                    </Typography>
                    <Box sx={{flexGrow:1}}/>
                    <h3 >
                        Signed in as <span style={{ color: 'blue', fontWeight:700, padding: '3px 10px', backgroundColor: 'white', borderRadius:"10px" }}>{user.displayName}</span>
                    </h3>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box>
                    <Switch>
                        <UserRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </UserRoute>
                        <UserRoute path={`${path}/myOrders`}>
                            <MyOrder></MyOrder>
                        </UserRoute>
                        <UserRoute path={`${path}/review`}>
                            <Review></Review>
                        </UserRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageUserRole`}>
                            <ManageUserRole></ManageUserRole>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
