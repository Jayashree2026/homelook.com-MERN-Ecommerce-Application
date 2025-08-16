import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IconSearch ,IconX} from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { search, setSearch, showsearch, setShowSearch } = useContext(ShopContext);
  const  location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('collections')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // if (!(showsearch && visible)) return null;

  return showsearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className=' inline-flex items-center justify-center border border-gray-400 py-2 my-5 mx-3 rounded-full w-1/2 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='Search'
          className='ml-10 w-full flex-1 outline-none bg-inherit text-sm'
        />
        <IconSearch
          onClick={() => setShowSearch(true)}
          className='mr-10 cursor-pointer ml-2'
          stroke={2}
        />
      </div>
      {/* Optional close button */}
      <IconX
        onClick={() => setShowSearch(false)}
        className='inline w-5 cursor-pointer'
        stroke={2}
      />
    </div>
  ):null
}

export default Searchbar;
