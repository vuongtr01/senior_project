import React, { useState } from "react";
import axios from 'axios';
import withStyles from '@mui/styles/withStyles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SearchBar from "./SearchBar";

const styles = theme => ({
  container: {
    padding: '16px 8px 16px 8px',
  },
  leftButton: {
    paddingBottom: '8px',
  },
  rightButton: {
    paddingLeft: '8px',
    paddingBottom: '8px',
  }
})
const NavBar = (props) => {
  const { classes } = props;
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickLogout = () => {
    const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    setAnchorElUser(null);
    axios({
        url: "/users/sign_out",
        method: "DELETE",
      }).then((response) => {
        window.location.href = '/users/sign_in';});
  }

  const handleOpenNotification = () => {
    console.log('noti');
  }

  return (
    <AppBar position="sticky">
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Typography
            variant={"h6"}
            sx={{
              display: { md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.1rem',
              color: 'inherit',
              // textDecoration: 'none',
            }}
          >
            <a href="/" style = {{textDecoration: 'none'}}
            >
              <img src="https://i.imgur.com/4Yq5pRM.png" alt="logo" height={80} />
            </a>
            {/* <Box sx={{display: {xs: "none", md: 'flex'}, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip'}}>
              LifeList
            </Box> */}
          </Typography>
        </Grid>
        {/* <Grid item xs={3}>
          {actionButton && (
            <Box>
              {actionButton()}
            </Box>
          )}
        </Grid> */}
        <Grid item xs={8} pl={1}>
          <SearchBar
            placeholder="search"
          />
        </Grid>
        <Grid item xs={2} pr="20px">
          <Grid container justifyContent='flex-end' alignItems='center'>
            <Grid item className={classes.leftButton}>
              <IconButton onClick={handleOpenNotification} sx={{ p: 0 }}>
                <NotificationsActiveIcon />
              </IconButton>
            </Grid>
            <Grid item className={classes.rightButton}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon />
              </IconButton>
            </Grid>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key="logout" onClick={handleClickLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default withStyles(styles)(NavBar);
