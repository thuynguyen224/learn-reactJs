import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    currentSort: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (event, newValue) =>{
        if (onChange) {
            onChange(newValue)
        }
    }
    return (
        <Tabs
            value={currentSort}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleSortChange}
            aria-label='disabled tabs example'
        >
            <Tab label="ID thấp tới cao" value='asc'></Tab>
            <Tab label='ID cao xuống thấp' value='desc'></Tab>
        </Tabs>
    );
}

export default ProductSort;