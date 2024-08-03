import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggleShowCart}) => {
  return (
    <nav className="fixed w-full px-4 py-5 bg-blue-600 z-20 top-0 text-white">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to={"/"} className="text-2xl mr-5 tracking-wider">
            E-Commerce
          </Link>

          <Link to={"/"} className="font-semibold uppercase text-[15px] tracking-wider">
            Home
          </Link>

          <Link to={"/products"} className="font-semibold uppercase text-[15px] tracking-wider">
            Products
          </Link>

          <Link to={"/new"} className="font-semibold uppercase text-[15px] tracking-wider">
            New
          </Link>
        </div>

        <div className="flex items-end justify-center gap-6">
          {/* <ArrowLongRightIcon className="size-6"/>
          <Link to={"/login"}>Login</Link> */}

          <Link to={"#"} className="flex flex-col justify-center items-center gap-[2px]">
            <UserIcon className="size-6"/>
            <span className="text-sm font-semibold">Profile</span>
          </Link>

          <Link to={"#"} className="flex flex-col justify-center items-center gap-[2px]">
            <HeartIcon className="size-6"/>
            <span className="text-sm font-semibold">Wishlist</span>
          </Link>

          <div onClick={toggleShowCart} className="flex flex-col justify-center items-center gap-[2px]">
            <ShoppingCartIcon className="size-6" />
            <span className="text-sm font-semibold">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
