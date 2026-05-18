import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import categoryApi from "api/categoryApi";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

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
    <Box>
      <Typography>DANH MỤC SẢN PHẨM</Typography>
      <ul>
        {categoryList.map((category) => (
          <li
            key={category}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
