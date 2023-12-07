import React, { useState } from "react";
import axios from 'axios';
import withStyles from '@mui/styles/withStyles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';;
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SearchBar from "./SearchBar";

const styles = theme => ({
  container: {
    padding: '16px 8px 16px 8px',
  }
})
const NavBar = (props) => {
  const { classes, actionButton } = props;
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

  return (
    <AppBar position="sticky">
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Typography
            variant={"h6"}
            noWrap
            component={"a"}
            href={"/"}
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="https://i.imgur.com/fHltqt7.png" alt="logo" height={80} />
            <Box sx={{display: {xs: "none", md: 'flex'}}}>
              LifeList
            </Box>
          </Typography>
        </Grid>
        {/* <Grid item xs={3}>
          {actionButton && (
            <Box>
              {actionButton()}
            </Box>
          )}
        </Grid> */}
        <Grid item xs={8}>
          <SearchBar
            placeholder="search"
          />
        </Grid>
        <Grid item xs={2} pr="20px">
          <Grid container justifyContent='flex-end' alignItems='center'>
            <Grid item>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
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
