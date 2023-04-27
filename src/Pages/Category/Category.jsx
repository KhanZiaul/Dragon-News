import React from 'react';
import {useParams , useLoaderData} from 'react-router-dom';

const Category = () => {
    let { id } = useParams();
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <h2>category data </h2>
        </div>
    );
};

export default Category;