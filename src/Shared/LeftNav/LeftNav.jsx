import React, { useEffect, useState } from 'react';
import './LeftNav.css'

const LeftNav = () => {
    const[categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/datas')
        .then(res => res.json())
        .then(datas => setCategories(datas))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            {
                categories.map(categoriy => <p className='categoriy p-2'>{categoriy.name}</p>)
            }
        </div>
    );
};

export default LeftNav;