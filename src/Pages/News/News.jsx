import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { image_url, title, details, total_view, author, rating, _id } = news
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
            </Card>

        </div>
    );
};

export default News;