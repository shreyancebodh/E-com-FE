import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import Cart from "./components/Cart";
import { useState } from "react";
import Login from "./pages/Login";

function App() {

  const [showCart, setShowCart] = useState(false);

  function toggleShowCart(){
    console.log(showCart)
    setShowCart(prev => !prev)
  }

  return (
    <div>
      <Cart toggleShowCart={toggleShowCart} showCart={showCart}/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Layout toggleShowCart={toggleShowCart}><Products/></Layout>}></Route>
        <Route path="/products/:id" element={<Layout toggleShowCart={toggleShowCart}><Product/></Layout>}></Route>
        <Route path="/login" element={<Layout toggleShowCart={toggleShowCart}><Login/></Layout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
