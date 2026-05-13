import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

function ProductSkeletonList({ length = 6 }) {
  return (
    <Grid container>
      {Array.from(new Array(length)).map((_, index) => (
        <Grid
          item
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          key={index}
        >
          <Box sx={{ padding: 1 }}>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton sx={{ mt: 1 }} width="80%" />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductSkeletonList;
