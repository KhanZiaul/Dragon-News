import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';


const Categories = () => {
    let { id } = useParams();
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <h2>category data </h2>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;