import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleShowCart }) => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full px-4 bg-blue-600 z-20 top-0 text-white">
      <div className="max-w-[1400px] h-20 mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to={"/"} className="text-2xl mr-5 tracking-wider">
            E-Commerce
          </Link>

          <Link
            to={"/"}
            className="font-semibold uppercase text-[15px] tracking-wider"
          >
            Home
          </Link>

          <Link
            to={"/products"}
            className="font-semibold uppercase text-[15px] tracking-wider"
          >
            Products
          </Link>

          <Link
            to={"/products/new"}
            className="font-semibold uppercase text-[15px] tracking-wider"
          >
            New
          </Link>
        </div>

        <div className="hover:cursor-pointer flex items-end justify-center gap-6 mt-5">
          {/* <ArrowLongRightIcon className="size-6"/>
          <Link to={"/login"}>Login</Link> */}

          <div
            onMouseEnter={() => setShowProfile((prev) => !prev)}
            onMouseLeave={() => setShowProfile((prev) => !prev)}
            className="hover:cursor-pointer flex flex-col justify-center items-center gap-[2px]"
          >
            <UserIcon className="size-6" />
            <span className="text-sm font-semibold mb-5">Profile</span>

            {showProfile && (
              <div className="hover:cursor-default absolute top-full w-72 border bg-white text-black p-4 text-xs shadow-lg">
                <h2 className="font-semibold text-sm">Welcome</h2>
                <p className="text-gray-500 mt-1">
                  To access account and manage orders
                </p>
                <div onClick={()=> navigate("/login")} className="text-blue-500 font-semibold uppercase mt-3 border border-gray-200 py-3 px-4 inline-block cursor-pointer hover:border-blue-500">
                  Login/Signup
                </div>
              </div>
            )}
          </div>

          <div className="hover:cursor-pointer flex flex-col justify-center items-center gap-[2px]">
            <HeartIcon className="size-6" />
            <span className="text-sm font-semibold mb-5">Wishlist</span>
          </div>

          <div
            onClick={toggleShowCart}
            className="hover:cursor-pointer flex flex-col justify-center items-center gap-[2px]"
          >
            <ShoppingCartIcon className="size-6" />
            <span className="text-sm font-semibold mb-5">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
