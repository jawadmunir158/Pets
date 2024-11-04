import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null); // Initialize image state variable
  const [size, setSize] = useState(null); // Initialize size state variable

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = products.find((item) => item._id === productId);
        if (product) {
          setProductData(product);
          if (product.image && product.image.length > 0) {
            setImage(product.image[0]); // Set the default image
          }
          if (product.sizes && product.sizes.length > 0) {
            setSize(product.sizes[0]); // Set the default size
          }
        } else {
          setProductData(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0" />;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ------Product Images--------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index} // Add key prop
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* --------Product Info-------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'>{productData.price}{currency}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-300 ${item === size ? 'border-orange-500 ' : ''}`}
                  key={index} 
                >

                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 ' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
            <p className=''>100% Original Product</p>
            <p>Cash on Delivery is available on this Product</p>
            <p>Easy Return and Exchange Policy within 7 days. </p>
          </div>
        </div>
      </div>
      {/* ---------Description and Review Section   */}
      <div className='mt-20'>
        <div className='flex'>
        <p className='border px-5 py-3 text-sm'> Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis accusantium alias cum iusto modi officiis distinctio, corporis itaque corrupti dicta animi dolores ipsam eum nostrum iste culpa temporibus facere?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vel itaque laudantium corrupti. Dolores accusantium provident tempora quam ab in assumenda. Suscipit voluptate eveniet nesciunt nostrum, aperiam dolores officiis tempora.</p>
        </div>
      </div>
      {/* ----------display Related Products */}
      <div className='mt-20'>
        <h2 className='text-2xl font-medium'>Related Products</h2>
        <div className='flex flex-wrap gap-4'>
          <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
        </div>
      </div>
    </div>
  );
};

export default Product;