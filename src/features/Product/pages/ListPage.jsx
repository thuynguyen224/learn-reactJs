import { Box, Container, Grid, Select, MenuItem, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
ListPageProduct.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    marginTop: "10px",
    paddingBottom: "20px",
    paddingRight: "20px",
  },
}));

function ListPageProduct(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    limit: 10,
    sort: "asc",
  });
  useEffect(() => {
    (async () => {
      try {
        let productListData = [];
        if (filters.category) {
          productListData = await productApi.getByCategory(filters.category, {
            limit: filters.limit,
            sort: filters.sort,
          });
        } else {
          productListData = await productApi.getAll({
            limit: filters.limit,
            sort: filters.sort,
          });
        }
        setProductList(productListData);
      } catch (error) {
        console.log("fail to get list");
      }
      setLoading(false);
    })();
  }, [filters]);

  const handleSortChange = (newSortValue) => {
    setFilters((prev) => ({
      ...prev,
      sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters.sort}
                onChange={handleSortChange}
              />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Select
                  value={filters.limit}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      limit: Number(e.target.value),
                    }))
                  }
                  size="small"
                >
                  {[10, 20, 50, 100].map((size) => (
                    <MenuItem key={size} value={size}>
                      {size} / page
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPageProduct;
