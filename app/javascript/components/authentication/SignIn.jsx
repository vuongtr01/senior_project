import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Box>
                {/* <LockOutlinedIcon /> */}
                <img src="https://i.imgur.com/4Yq5pRM.png" alt="logo" height={80} />
            </Box>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box
                component="form"
                className='new_user'
                action='/users/sign_in'
                noValidate sx={{ mt: 1 }}
                acceptCharset='UTF-8'
                method='POST'
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user_email"
                    label="Email Address"
                    name="user[email]"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="user[password]"
                    label="Password"
                    type="password"
                    id="user_password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="1" name="user[remember_me]" color="primary" id="user_remember_me"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    name="commit"
                    value="Log in"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    </Grid>
                    <Grid item>
                        <Link href="/users/sign_up" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
  );
}

export default SignIn;
