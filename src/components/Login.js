import React, { useState } from 'react';
import { Container, TextField, Button, TextFieldfrom, FormControlLabel, Checkbox, Box, Typography } from "@mui/material";

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        short: '',
        emailVal: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateFields()) {
            return
        } 
    };

    const validateFields = () => {
        let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let error = false
        if (userData.email && regex.test(userData.email) === false) {
            error = true
            setErrors(state => ({ ...state, emailVal: 'Invalid email' }))
        }
        if (userData.password && userData.password.length < 5) {
            error = true
            setErrors(state => ({ ...state, short: 'Password must contain at least 5 characters' }))
        }
        return error
    }

    const handleChange = e => {
        const value = e.target.value
        console.log(value, "value");
        setUserData({
            ...userData,
            [e.target.name]: value,
        })
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={userData.email}
                        error={Boolean(errors?.emailVal)}
                        helperText={errors?.emailVal}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={userData.password}
                        error={errors.short !== ''}
                        helperText={errors.short}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage;
