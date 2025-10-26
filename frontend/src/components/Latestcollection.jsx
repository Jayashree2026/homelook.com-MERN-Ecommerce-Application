// LatestCollection Component - Modern Gallery Style
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className='my-24 px-6'>
      {/* Header */}
      <div className='text-center mb-20'>
        <div className='relative inline-block text-3xl'>
          <div className='  absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-20'></div>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        </div>
        <p className="max-w-2xl mx-auto mt-6 text-purple-800 font-light leading-relaxed bg-gradient-to-r from-white to-purple-200 bg-clip-text ">
          Curated masterpieces that redefine elegance and transform spaces
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 relative'>
        {/* Background Gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/20 rounded-3xl -z-10'></div>

        {latestProducts.map((item, index) => (
          <div
            key={index}
            className='group relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20'
          >
            {/* Hover Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-pink-600/0 rounded-3xl group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500'></div>

            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Latestcollection