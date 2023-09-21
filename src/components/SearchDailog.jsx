import React from 'react'

const SearchDailog = () => {
  return (
    <div className="search-box">
        <input 
            type="search" 
            name="search" 
            id="search" 
            className="form-control w-4/5"
            placeholder="Search..."
        />
    </div>
  )
}

export default SearchDailog
