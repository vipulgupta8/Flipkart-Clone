import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchResult = ({result}) => {
    const navigate = useNavigate();

    // const handleProductClick = (id) => {
    //     navigate(`http://localhost:3006/product/${id}`);
    // };
  return (
    <div className='p-1 hover:bg-[#efefef] cursor-pointer z-10'>
      {result.title}
    </div>
  )
}

export default SearchResult
