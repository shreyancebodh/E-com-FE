import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children, toggleShowCart }) => {
  const location = useLocation();
  
  return (
    <>
      <Navbar toggleShowCart={toggleShowCart} />
      <div className={`${location.pathname === '/login' ? "" : "mx-auto mt-28 max-w-[1400px]"}`}>{children}</div>
    </>
  );
};

export default Layout;
