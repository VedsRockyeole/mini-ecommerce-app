import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, CircularProgress } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({ onViewDetails }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress data-testid="loading-indicator" />;

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} onViewDetails={onViewDetails} />
        </Grid>
      ))} 
    </Grid>
  );
};

export default ProductList;