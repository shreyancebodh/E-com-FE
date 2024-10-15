import React, { useState } from 'react'
import { addProduct } from '../features/products/productsThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    imageSrc: [],
  });

  const handleChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addProduct(productData));
        navigate("/products")
      }} className="max-w-[36rem] mx-auto">
        {/* Title */}
        <div className="relative z-0 w-full mb-5 group">
            <input onChange={(e) => handleChange(e)} type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Title</label>
        </div>

        {/* Price */}
        <div className="relative z-0 w-full mb-5 group">
            <input onChange={(e) => handleChange(e)} type="number" name="price" id="floating_price" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
        </div>

        {/* Image URL 1 and 2 */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input onChange={e => {
                const images = [...productData.imageSrc];
                images[0] = e.target.value;
                setProductData({...productData, imageSrc: images})
              }} type="text" id="image_url_1" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
              <label htmlFor="image_url_1" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image-1 URL</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input onChange={e => {
                const images = [...productData.imageSrc];
                images[1] = e.target.value;
                setProductData({...productData, imageSrc: images})
              }} type="text" id="image_url_2" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="image_url_2" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image-2 URL</label>
          </div>
        </div>

        {/* Image URL 3 and 4 */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input onChange={e => {
                const images = [...productData.imageSrc];
                images[2] = e.target.value;
                setProductData({...productData, imageSrc: images})
              }} type="text" id="image_url_3" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="image_url_3" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image-3 URL</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input onChange={e => {
                const images = [...productData.imageSrc];
                images[3] = e.target.value;
                setProductData({...productData, imageSrc: images})
              }} type="text" id="image_url_4" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="image_url_4" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image-4 URL</label>
          </div>
        </div>

        {/* Description */}
        <div className="relative z-0 w-full mt-1 mb-5 group">
          <label htmlFor="message" className="block mb-2 text-md text-gray-400">Product Description</label>
          <textarea onChange={(e) => handleChange(e)} id="message" name='description' rows="6" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-sm border-2 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Write here..."></textarea>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-md w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
      </form>
    </div>
  )
}

export default ProductForm