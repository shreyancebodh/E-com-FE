import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import Cart from "./components/Cart";
import { useState } from "react";
import Login from "./pages/Login";
import ProductForm from "./pages/ProductForm";
import ProtectedRoute from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    console.log(showCart);
    setShowCart((prev) => !prev);
  }

  return (
    <div>
      <Cart toggleShowCart={toggleShowCart} showCart={showCart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Layout toggleShowCart={toggleShowCart}>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/products/new"
          element={
            <Layout toggleShowCart={toggleShowCart}>
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Layout toggleShowCart={toggleShowCart}>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout toggleShowCart={toggleShowCart}>
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
