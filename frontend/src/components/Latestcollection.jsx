// LatestCollection Component - Modern Gallery Style
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

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
          <div className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-20'></div>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        </div>
        <p className="max-w-2xl mx-auto mt-6 text-purple-800 font-light leading-relaxed">
          Curated masterpieces that redefine elegance and transform spaces
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 relative'>
        {/* Background Gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/20 rounded-3xl -z-10'></div>

        {latestProducts.map((item, index) => (
          <Link
            key={index}
            to={`/product/${item._id}`}
            className='group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-purple-200/60 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer transform hover:-translate-y-2 block'
          >
            {/* Hover Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-pink-600/0 rounded-3xl group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500'></div>
            
            {/* Quick View Indicator */}
            <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
              <div className='bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-purple-200'>
                <svg className='w-4 h-4 text-purple-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className='text-center mt-16'>
        <Link 
          to="/collections"
          className='inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/30 border border-purple-400/30 hover:shadow-purple-500/50'
        >
          View All Collections
        </Link>
      </div>
    </div>
  )
}

export default Latestcollection
