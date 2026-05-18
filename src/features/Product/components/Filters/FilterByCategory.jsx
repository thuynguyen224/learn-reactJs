import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import {makeStyles} from '@mui/styles';
import categoryApi from "api/categoryApi";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px',
    
  },
  menu: {
    padding: 0,
    margin: 0, 
    listStyleType: 'none',
     
    '& > li' : {
      marginTop: '10px',
      transition: 'all .25s',
      '&:hover' : {
        color: 'blue',
        cursor: 'pointer',

      }
    }
  }
}))


FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(list);
      } catch (error) {
        console.log("Failed to fetch category list", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography>DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li
            key={category}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            <Typography variant="body2" >{category}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
