import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import GridWrapper from './GridWrapper';

const Dashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#cfe8fc', height:'90vh',padding:'10px' , marginTop:'30px'}}>
            <Typography variant="h5" sx={{ textAlign:'center ' }}>
               Employee Data Charts
            </Typography>
            <Box>
                <GridWrapper />
            </Box>
        </Container>
    )
}

export default Dashboard