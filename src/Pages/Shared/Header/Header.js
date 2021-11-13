import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { FiLogIn } from 'react-icons/fi'
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Button, Divider, Drawer, List, ListItem } from '@mui/material';


const Header = (props) => {
    const { role, user, logout } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const history = useHistory()
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleLoginClick = () => {
        history.push('/login')
    }
    const handleDashboard = () => {

        if (role === 'admin') {
            history.push('/dashboard/manageAllOrders')
        } else {
            history.push('/dashboard/myOrders')
        }
    }
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // drawer
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button >
                    <Link to='/'>Home</Link>
                </ListItem>
                <ListItem button >
                    <Link to='/explore'>Explore</Link>
                </ListItem>
            </List>
            <Divider />

        </div>
    )
    // menu right
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {
                user.email && <Box>
                    <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Box>
            }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
                <Button onClick={logout}> Logout</Button>
            </MenuItem>
        </Menu>
    );

    const drawerWidth = 200;
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)`, md: '100%' },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#F0F1F5'
                }}>
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon sx={{ color: 'black' }}></MenuIcon>

                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to="/">
                            <img src="https://i.ibb.co/bHMkQ8x/2.png" alt="logo" />
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Typography variant="body1" sx={{}}>
                                <NavLink to="/explore">Explore</NavLink>
                            </Typography>
                        </IconButton>

                        {
                            !user.email && <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={handleLoginClick}
                            >

                                <FiLogIn title="Login" style={{ color: 'black' }} />

                            </IconButton>
                        }
                        {
                            user.email && <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle sx={{ color: 'black' }} />
                            </IconButton>
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor="left"
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

            </Box>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}


export default Header;