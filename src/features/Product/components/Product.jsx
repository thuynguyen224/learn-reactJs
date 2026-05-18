import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { THUMNAIL_URL } from "constants";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumnailUrl = product.image ?? THUMNAIL_URL;
  
  return (
    <Box sx={{ padding: 1 }}>
      <Box sx={{ padding: 1 }}>
        <img src={thumnailUrl} alt={product.name} width="100%" height={200} />
      </Box>
      <Typography variant="body2">{product.title}</Typography>

      <Typography variant="body2">
        <Box component='span' sx={{ fontSize: '16px', fontWeight : 'bold' }}>
           {Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(product.price)}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;
