import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onViewDetails }) => {
  const { dispatch } = useCart();

  return (
    <Card>
      <CardMedia
        component="img"
        image={product.image}
        height="200"
        alt={product.title}
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onViewDetails(product.id)}>
          View Details
        </Button>
        <Button size="small" onClick={() => dispatch({ type: "ADD_TO_CART", product })}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;