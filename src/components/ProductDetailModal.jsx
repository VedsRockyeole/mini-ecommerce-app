import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, CircularProgress, Box } from "@mui/material";

const ProductDetailModal = ({ open, onClose, productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (open && productId) {
      setProduct(null);
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then(setProduct);
    }
  }, [open, productId]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {product ? (
        <>
          <DialogTitle>{product.title}</DialogTitle>
          <DialogContent>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
              <img src={product.image} alt={product.title} width={120} style={{ objectFit: "contain" }} />
              <Box>
                <Typography variant="body1">{product.description}</Typography>
                <Typography color="text.secondary">Category: {product.category}</Typography>
                <Typography>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</Typography>
                <Typography variant="h6">${product.price}</Typography>
              </Box>
            </Box>
          </DialogContent>
        </>
      ) : (
        <Box m={2} textAlign="center">
          <CircularProgress />
        </Box>
      )} 
    </Dialog>
  );
};

export default ProductDetailModal;