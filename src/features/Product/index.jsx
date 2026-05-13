import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    return (
        <Box sx={{ marginTop: 2 }}>
            <Outlet />
        </Box>
    );
}

export default ProductFeature;