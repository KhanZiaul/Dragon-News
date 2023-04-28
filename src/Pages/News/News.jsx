import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from './EditorsInsight';

const News = () => {
    const news = useLoaderData()
    const { image_url, title, details, category_id} = news
    return (
        <div>
            <h2>Dragon News</h2>

            <Card className='my-5'>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='my-4' variant="top" src={image_url} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Link to={`/category/${category_id}`}><Button className='w-50 ms-3 mb-4' variant="danger"> <FaArrowLeft /> All news in this category</Button></Link>
            </Card>

            <h2 className='mb-3'>Editors Insight</h2>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;