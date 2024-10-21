import React, { Fragment, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, getCart } from "../features/cart/cartThunk";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";

const clickTypes = {
  deleteItemFromCart: "deleteItemFromCart",
};

const Cart = ({ showCart, toggleShowCart }) => {
  const dispatch = useDispatch();
  const {
    totalPrice,
    loading,
    items: cartItems,
    error,
  } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) dispatch(getCart());
  }, [dispatch]);

  function handleClick(type, payload) {
    if (type === clickTypes.deleteItemFromCart) {
      dispatch(deleteItemFromCart(payload));
    }
  }

  return (
    // <div className='w-[400px] h-[calc(100%-86px)] bg-green-400 opacity-30 absolute top-[86px] right-0'>
    <div
      className={
        "fixed w-screen z-40 bg-opacity-75 top-[86px] h-screen bg-gray-900 transition-all duration-500 " +
        (!showCart ? "opacity-0 pointer-events-none" : "bg-opacity-75")
      }
    >
      <div
        className={
          "overflow-auto w-[400px] h-[calc(100%-88px)] bg-white fixed z-50 right-0 transition-all ease-in-out duration-500  " +
          (!showCart ? "translate-x-full" : "translate-x-0")
        }
      >
        <div className="px-4">
          {/* cart Header */}
          <div className="flex justify-between sticky top-0 bg-white py-5">
            <h2 className="text-xl">Shopping Cart</h2>
            <span onClick={toggleShowCart} className="hover:cursor-pointer">
              <XMarkIcon className="size-6" />
            </span>
          </div>

          {!isAuthenticated && (
            <div className="h-full flex justify-center items-center">
              <div
                onClick={() => {
                  // <Navigate to="/login"/>
                  navigate("/login");
                  toggleShowCart();
                }}
                className="-translate-y-16 text-blue-500 font-semibold uppercase mt-3 border border-gray-200 py-3 px-4 inline-block cursor-pointer hover:border-blue-500"
              >
                Login/Signup
              </div>
            </div>
          )}

          {isAuthenticated && (
            <div className="overflow-auto">
              {/* cart Items */}
              {cartItems.map((item, ind) => (
                <Fragment key={item.product._id}>
                  <div className="flex gap-3">
                    <img
                      className="h-24 w-24 p-2 border rounded-lg"
                      src={item.product.imageSrc[0]}
                      alt=""
                    />
                    <div className="flex flex-col flex-1">
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h1 className="text-[16px]">{item.product.name}</h1>
                          <p className="text-[16px]">${item.product.price}</p>
                        </div>
                        {/* <p className="text-gray-500 text-sm">Salmon</p> */}
                      </div>

                      <div className="flex justify-between">
                        <p className="text-gray-500 text-sm">
                          Qty {item.quantity}
                        </p>
                        <p
                          onClick={() =>
                            handleClick(
                              clickTypes.deleteItemFromCart,
                              item.product
                            )
                          }
                          className="text-sm text-blue-600 hover:cursor-pointer"
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  {ind < cartItems.length - 1 ? (
                    <>
                      <br /> <hr /> <br />
                    </>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}
            </div>
          )}

          {isAuthenticated && (
            <div className="sticky bottom-0 pt-4 py-3 bg-white">
              <div className="flex justify-between my-2">
                <span className="text-xl">Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-end my-1">
                <Button className="text-sm">Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
