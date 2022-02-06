import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocation}) => {

    const [id, setId] = useState('');
   
    const doSearch = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
            .then( res => (
                setLocation(res.data)
      ))
    };

    return (
        <div className='container-search'>
            <input 
                type="text" 
                className='search-input' 
                onChange={(e) => setId(e.target.value)} 
                value={id}
                placeholder='id location'
            /> 
            <button className='button search-button' onClick={doSearch}>Search</button>
        </div>
    );
};

export default SearchBox;