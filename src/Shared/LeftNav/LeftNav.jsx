import React, { useEffect, useState } from 'react';
import './LeftNav.css'
import { Link } from 'react-router-dom';
import LeftNvaInsight from './LeftNvaInsight';

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
                    categories.map(categoriy => <p key={categoriy.id} ><Link to={`/category/${categoriy.id}`} className='categoriy p-2 text-decoration-none text-black mb-2'>{categoriy.name}</Link> </p> )
                }
            </div>
            <LeftNvaInsight></LeftNvaInsight>
        </div>
    );
};

export default LeftNav;