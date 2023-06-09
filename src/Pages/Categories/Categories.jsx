import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';


const Categories = () => {
    const categories = useLoaderData()
    return (
        <div>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;