import React from 'react';
import { Box, Container } from '@mui/material';
import GridWrapper from './GridWrapper';

const Dashboard = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <GridWrapper />
            </Box>
        </Container>
    )
}

export default Dashboard