import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()

  async function handleClick() {
    if (!phone || phone.length != 10) return alert("Enter Valid Phone Number");
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
        {phone}
      );
      console.log(res);
  
      localStorage.setItem('loginToken', JSON.stringify(res.data.result.Authorization));
      localStorage.setItem('user', JSON.stringify({phone: res.data.result.user.phone, _id: res.data.result.user._id}));
  
      navigate('/products');
    } catch (error) {
      alert('Something went wrong! Please try again later.')
    }
  }

  return (
    <div className="bg-[#f1f5f9] h-screen flex justify-center items-center">
      <div className="w-[26rem] h-[70vh] p-8 bg-white shadow-md">
        <>
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
              onChange={(e) => setPhone(e.target.value)}
              className="placeholder:text-xs outline-none text-xs"
              type="tel"
              placeholder="Mobile Number*"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
            Continue
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
