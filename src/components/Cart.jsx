import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Cart = ({ showCart, toggleShowCart }) => {
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
          "w-[400px] h-[calc(100%-88px)] bg-white fixed z-50 right-0 transition-all ease-in-out duration-500  " +
          (!showCart ? "translate-x-full" : "translate-x-0")
        }
      >
        {/* cart Header */}
        <div className="px-4 py-6">
          <div className="flex justify-between mb-8">
            <h2 className="text-lg">Shopping Cart</h2>
            <span className="hover:cursor-pointer">
              <XMarkIcon className="size-6" />
            </span>
          </div>

          {/* cart Items */}
          <div className="flex gap-3">
            <img
              className="h-24 w-24 p-2 border rounded-lg"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwMP5BlpGGoDv1zvg62b93NPjEYBGKs_CW0gjiCwnPtnIZK-z6Od6lOYQYf3uygvIUZftsjrWvdYLZw48IXTHAiM7GZUQTJWokJ9hPOYi9iABB2KVAvJdl&usqp=CAE"
              alt=""
            />
            <div className="flex flex-col flex-1">
              <div className="flex-1">
                <div className="flex justify-between">
                  <h1 className="text-[16px]">Throwback Hip Bag</h1>
                  <p className="text-[16px]">$90.00</p>
                </div>
                <p className="text-gray-500 text-sm">Salmon</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Qty 1</p>
                <p className="text-sm text-blue-600 hover:cursor-pointer">Remove</p>
              </div>
            </div>
          </div>

          <br /> <hr /> <br />

          <div className="flex gap-3">
            <img
              className="h-24 w-24 p-2 border rounded-lg"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwMP5BlpGGoDv1zvg62b93NPjEYBGKs_CW0gjiCwnPtnIZK-z6Od6lOYQYf3uygvIUZftsjrWvdYLZw48IXTHAiM7GZUQTJWokJ9hPOYi9iABB2KVAvJdl&usqp=CAE"
              alt=""
            />
            <div className="flex flex-col flex-1">
              <div className="flex-1">
                <div className="flex justify-between">
                  <h1 className="text-[16px]">Throwback Hip Bag</h1>
                  <p className="text-[16px]">$90.00</p>
                </div>
                <p className="text-gray-500 text-sm">Salmon</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Qty 1</p>
                <p className="text-sm text-blue-600">Remove</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    // <dialog open={true} className='bg-red-200 backdrop:bg-slate-700'>
    //   <div className='p-8'>
    //     <h1>Lorem ipsum dolor sit amet.</h1>
    //   </div>
    // </dialog>
  );
};

export default Cart;
