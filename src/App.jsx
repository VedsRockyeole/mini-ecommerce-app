import React, { useState } from "react";
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Badge, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartProvider, useCart } from "./context/CartContext";
import ProductList from "./components/ProductList";
import ProductDetailModal from "./components/ProductDetailModal";
import CartDrawer from "./components/CartDrawer";

const AppContent = () => {
  const [detailId, setDetailId] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mini E-Commerce
          </Typography>
          <IconButton color="inherit" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={cart.reduce((n, item) => n + item.qty, 0)} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <ProductList onViewDetails={(id) => setDetailId(id)} />
      </Container>
      <ProductDetailModal open={!!detailId} productId={detailId} onClose={() => setDetailId(null)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;