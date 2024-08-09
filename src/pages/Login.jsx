import React from "react";

const Login = () => {
  return (
    <div className="bg-[#f1f5f9] h-screen flex justify-center items-center">
      <div className="w-[26rem] h-[70vh] p-8 bg-white">
        <div>
          <span className="font-semibold">Login</span>{" "}
          <span className="text-gray-400">or</span>{" "}
          <span className="font-semibold">Signup</span>
        </div>

        <div className="flex my-5 border items-center py-2.5">
          <div className="ms-3 text-xs text-gray-400 flex items-center justify-center">
            +91
          </div>
          <div className="w-0 border-l-[1px] h-[1rem] mx-3 border-gray-300"></div>
          <input
            className="placeholder:text-xs outline-none text-xs"
            type="text"
            placeholder="Mobile Number*"
          />
        </div>

        <div className="text-xs text-gray-500">
          By continuing, I agree to the{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">Terms of Use</span>{" "}
          &amp;{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">Privacy Policy</span>
        </div> 

        <div className="mt-5 cursor-pointer uppercase py-2.5 px-3 font-semibold bg-blue-600 text-center text-white text-sm">
          Continue
        </div>

        <div className="my-5 text-gray-500 text-xs">
          Have trouble logging in?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">Get help</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
