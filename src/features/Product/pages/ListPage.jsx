import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
ListPageProduct.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));

function ListPageProduct(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
        try {
          const productListData = await productApi.getAll({limit: 10});
          setProductList(productListData);
          console.log(productListData);
        } catch (error) {
          console.log('fail to get list');
        }
        setLoading(false);
    })()
  },[]);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left colum</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
                {loading ? <ProductSkeletonList/ > : <ProductList data={productList} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPageProduct;
