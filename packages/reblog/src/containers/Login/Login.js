import './Login.scss';

import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {/* <Link color="inherit" href="https://material-ui.com/"> */}
            Reblog
            {/* </Link>{' '} */}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export function Login(props) {

    const controller = props.appStore.userStore.controller;

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        controller.login(formData);
    }

    const handleChangeField = (e, fieldName) => {
        setFormData({...formData, [fieldName]: e.target.value + ''});
    }

    return (
        <Container className="auth-login" component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <Avatar className="avatar">
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className="form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => handleChangeField(e, 'username')}
                        value={formData['username']}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => handleChangeField(e, 'password')}
                        value={formData['password']}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href="#" variant="body2"> */}
                                Forgot password?
                            {/* </Link> */}
                        </Grid>
                        <Grid item>
                            {/* <Link href="#" variant="body2"> */}
                                {"Don't have an account? Sign Up"}
                            {/* </Link> */}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default inject('appStore')(observer(Login));