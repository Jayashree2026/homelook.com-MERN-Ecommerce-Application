import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { IconSearch, IconStar } from '@tabler/icons-react';
import Relatedproducts from '../components/Relatedproducts';


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productdata, setProductData] = useState({});
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')




const fetchProductData = () => {
  const product = products.find(item => item._id === productId);
  if (product) {
    setProductData(product);
    setImage(product.image[0]);
  }
}

useEffect(() => {
  fetchProductData();
}, [productId, products]);

return productId ? (
  <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-6 sm:px-20'>
    <div className='flex flex-col sm:flex-row gap-12'>

      <div className='flex-1 flex flex-col-reverse gap-4 sm:flex-row sm:ml-20'>

        <div className='flex sm:flex-col overflow-y-auto max-h-[400px] justify-between sm:justify-start sm:w-[18.7%] w-full gap-3'>
          {
            productdata.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className={`cursor-pointer rounded-md border ${item === image ? 'border-orange-500' : 'border-transparent'} w-[15%] sm:w-full sm:mb-3 object-cover`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))
          }
        </div>

        <div className='w-full sm:w-[70%] rounded-md overflow-hidden shadow-md'>
          {image && (
            <img
              className='w-full h-auto object-contain'
              src={image}
              alt='product preview'
            />
          )}
        </div>
      </div>

      <div className='flex flex-col w-full sm:w-[40%] items-start justify-start'>
        <h1 className='font-semibold text-3xl mt-2 text-gray-900'>{productdata.name}</h1>

        <div className='flex items-center gap-2 mt-2 text-yellow-500'>
          {[...Array(5)].map((_, i) => (
            <IconStar  alt="star" className="w-5 h-5" />
          ))}
          <p className='pl-2 text-gray-600 text-sm'>(122 reviews)</p>
        </div>

        <p className='mt-5 text-3xl font-bold text-black'>{currency}{productdata.price}</p>

        <p className='mt-5 mb-12 text-gray-500 w-full sm:w-4/5 leading-relaxed'>{productdata.description}</p>

        <div className='flex flex-col gap-4 w-full'>
          {productdata.sizes && productdata.sizes.length > 0 && (
            <>
              <p className='text-gray-700 font-medium'>Select Size:</p>
              <div className='flex gap-3 flex-wrap'>
                {productdata.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`py-2 px-5 rounded-md border cursor-pointer transition-colors duration-300 ${item === size
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => addToCart(productdata._id, size)}
          disabled={!size}
          className={`mt-8 w-full sm:w-auto px-8 py-3 rounded-md text-white font-semibold transition-colors ${size ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          ADD TO CART
        </button>

        <hr className='mt-8 mb-8 sm:w-4/5 border-gray-300' />

        <div className='text-sm text-gray-400 space-y-1'>
          <p>Additional info paragraph 1...</p>
          <p>Additional info paragraph 2...</p>
          <p>Additional info paragraph 3...</p>
        </div>
      </div>
    </div>

    <div className='mt-20 flex border-b border-gray-300'>
      <button className='px-5 py-3 text-sm font-semibold border-b-2 border-orange-500 text-orange-600'>
        Description
      </button>
      <button className='px-5 py-3 text-sm text-gray-400'>
        Reviews
      </button>
    </div>

    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 leading-relaxed'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dignissimos quidem molestias aperiam aspernatur fugiat soluta rem dolorum, distinctio dolore numquam voluptates earum pariatur libero sed atque, repellendus, facilis aut!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero magni nam deleniti maiores quaerat vel, enim exercitationem optio dolor architecto, blanditiis cumque vitae ut voluptatibus nisi excepturi ab! Voluptates.
      </p>
    </div>

    <Relatedproducts
      category={productdata.category}
      subcategory={productdata.subcategory}
    />
  </div>
) : <div className='opacity-0'></div>
}
export default Product