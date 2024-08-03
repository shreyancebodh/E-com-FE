import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children, toggleShowCart }) => {
  
  return (
    <>
      <Navbar toggleShowCart={toggleShowCart} />
      <div className="mt-28 max-w-[1400px] mx-auto">{children}</div>
    </>
  );
};

export default Layout;
