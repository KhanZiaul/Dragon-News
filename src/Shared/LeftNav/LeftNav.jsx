import React, { useEffect, useState } from 'react';
import './LeftNav.css'
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/datas')
            .then(res => res.json())
            .then(datas => setCategories(datas))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2 className='mb-3'>All Category</h2>
            <div>
                {
                    categories.map(categoriy => <p><Link to={`categoriy/${categoriy.id}`} key={categoriy.id} className='categoriy p-2 text-decoration-none text-black mb-2'>{categoriy.name}</Link> </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;