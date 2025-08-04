import React from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ open, onClose }) => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width={320} p={2}>
        <Typography variant="h6">Cart</Typography>
        <List>
          {cart.length === 0 && <Typography variant="body2">Cart is empty.</Typography>}
          {cart.map((item) => (
            <ListItem key={item.id} secondaryAction={
              <IconButton edge="end" onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}>
                <DeleteIcon />
              </IconButton>
            }>
              <ListItemText
                primary={`${item.title} x${item.qty}`}
                secondary={`$${item.price.toFixed(2)}`}
              />
            </ListItem>
          ))} 
        </List>
        <Box mt={2}>
          <Typography variant="subtitle1">Total: ${total.toFixed(2)}</Typography>
        </Box>
        <Button fullWidth disabled={cart.length === 0} sx={{ mt: 2 }} variant="contained">
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;