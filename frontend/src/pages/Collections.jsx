import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IconArrowLeftDashed } from '@tabler/icons-react';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {
    const { products, search, showsearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterproducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState([]);


    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subcategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    const applyfilter = () => {
        let productsCopy = products.slice();
        if (showsearch && search) {
            productsCopy - productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        if (subcategory.length > 0) {
            productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory))
        }
        setFilterProducts(productsCopy)
    }
    const sortProduct = () => {
        let fpCopy = filterproducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyfilter();
                break;
        }
    }

    useEffect(() => {
        applyfilter();
    }, [category, subcategory, search, showsearch, products])

    useEffect(() => {
        sortProduct();
    }, [sortType])


    return (
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-12 pt-10 border-t border-gray-300 ml-10'>

            {/* Filter option */}
            <div className='min-w-[240px]'>
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className='text-xl font-semibold mb-2 flex items-center cursor-pointer gap-2 select-none'
                >
                    FILTERS
                    <IconArrowLeftDashed
                        stroke={2}
                        className={`sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
                    />
                </p>

                {/* Category filter */}
                <div className={`border border-gray-300 pl-5 pt-4 pb-4 rounded-md shadow-sm ${showFilter ? '' : 'hidden'}`}>
                    <p className='mb-3 text-sm font-semibold text-gray-800'>CATEGORIES</p>
                    <div className='flex flex-col gap-3 text-sm font-light text-gray-600'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Lamps'} onChange={toggleCategory} />
                            Lamps
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Sculptures'} onChange={toggleCategory} />
                            Sculptures
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Wall Frames'} onChange={toggleCategory} />
                            Wall Frames
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Plants'} onChange={toggleCategory} />
                            Plants
                        </label>
                    </div>
                </div>

                {/* SubCategory filter */}
                <div className={`border border-gray-300 pl-5 pt-4 pb-4 mt-6 rounded-md shadow-sm ${showFilter ? '' : 'hidden'}`}>
                    <p className='mb-3 text-sm font-semibold text-gray-800'>TYPE</p>
                    <div className='flex flex-col gap-3 text-sm font-light text-gray-600'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Modern'} onChange={toggleSubCategory} />
                            Modern
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Classic'} onChange={toggleSubCategory} />
                            Classic
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" className='w-4 h-4' value={'Abstract'} onChange={toggleSubCategory} />
                            Abstract
                        </label>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className='flex-1'>
                <div className='flex justify-between text-3xl items-center mb-6 pr-10'>
                    <Title text1={'All '} text2={'Collections'} />
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className='border border-gray-300 text-sm px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        <option value="Relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low-High</option>
                        <option value="high-low">Sort by: High-Low</option>
                    </select>
                </div>

                {/* Product grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10'>
                    {
                        filterproducts.map((item, index) => (
                            <ProductItem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Collections
