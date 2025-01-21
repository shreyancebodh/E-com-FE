import React from 'react'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/auth/authSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.auth);

  function handleClick(){
    dispatch(logoutUser());
    
    setTimeout(() => {
      navigate("/products");
    }, 200);
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-[url('/home-bg.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>

        <div className="fixed w-full p-5  z-20 top-0 text-white">
          <div className="max-w-[1200px] mx-auto flex justify-between">
            <a className="text-xl md:text-2xl" href="#">E-Commerce</a>
            <div className="font-bold flex gap-4 items-center">
              <Link to={"/"} className="hidden md:inline-block text-[16px] hover:cursor-pointer border-b-[3px] hover:border-white hover:border-b-[3px]">Home</Link>
              <Link to={"/products"} className="text-[16px] hover:cursor-pointer border-transparent border-b-[3px] hover:border-white hover:border-b-[3px]">Products</Link>
             {!isAuthenticated ?
               <>
                <Link to={"/login"} className="text-[16px] hover:cursor-pointer border-transparent border-b-[3px] hover:border-white hover:border-b-[3px]">Login</Link>
                <Link to={"/register"} className="text-[16px] hover:cursor-pointer border-transparent border-b-[3px] hover:border-white hover:border-b-[3px]">Signup</Link>
               </>
               :
               <>
                <Link onClick={handleClick} className="text-[16px] hover:cursor-pointer border-transparent border-b-[3px] hover:border-white hover:border-b-[3px]">Logout</Link>
               </>
             }
            </div>
          </div>
        </div>


          <div className="absolute z-10 w-full h-full flex items-center justify-center">
            <div className="text-center text-white px-3">
              <h1 className="text-4xl font-semibold mb-3">Shopping Cart</h1>
              <p className="font-light text-lg">Welcome to Shopping Cart!</p>
              <p className="font-light text-lg">Jump right in and explore our many products.</p>
              <p className="font-light text-lg mb-3">Feel free to add some of your own and comment on others!</p>
              <Button onClick={()=> navigate('/products')}>View Products</Button>
            </div>
          </div>
      </div>
  )
}

export default Home