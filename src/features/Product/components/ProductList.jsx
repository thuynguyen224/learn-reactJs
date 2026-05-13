import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Product from "./Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [] }) {
  return (
    <Grid container>
      {data.map((product, index) => (
        <Grid
          item
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          key={product.id}
        >
            <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
