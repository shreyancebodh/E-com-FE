import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authThunk";
import { PulseLoader } from "react-spinners";
import { getCart } from "../features/cart/cartThunk";

const Login = () => {
  const { loading, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    dispatch(loginUser({ email, password })).unwrap().then(()=>{
      dispatch(getCart())
    })
  }

  return (
    <div className="bg-[#f1f5f9] h-screen flex justify-center items-center">
      <div className="w-[26rem] h-[70vh] p-8 bg-white shadow-md">
        <>
          <div className="flex justify-center text-4xl mb-8">
            <span className="font-light">Login</span>{" "}
            {/* <span className="text-gray-400">or</span>{" "}
            <span className="font-semibold">Signup</span> */}
          </div>

          <div className="flex my-5 border items-center p-2.5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-xs outline-none text-sm w-full"
              type="email"
              placeholder="Email*"
            />
          </div>

          <div className="flex my-5 border items-center p-2.5">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-xs outline-none text-sm w-full"
              type="password"
              placeholder="Password*"
            />
          </div>

          <div className="text-xs text-gray-500">
            By continuing, I agree to the{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Terms of Use
            </span>{" "}
            &amp;{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Privacy Policy
            </span>
          </div>

          <div
            onClick={handleClick}
            className="mt-5 cursor-pointer uppercase py-2.5 px-3 font-semibold bg-blue-600 text-center text-white text-sm"
          >
            {loading ? <PulseLoader color="#ffffff" size={8} /> : "Continue"}
          </div>

          <div className="my-5 text-gray-500 text-xs">
            Have trouble logging in?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Get help
            </span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
