import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box sx={{ padding: 1 }}>
      <Skeleton variant="rectangular" width="100%" height={180} />
      <Typography variant="body2">{product.title}</Typography>
      <Typography variant="body2">{product.price}</Typography>
    </Box>
  );
}

export default Product;
