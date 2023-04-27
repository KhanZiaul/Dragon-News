import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { image_url, title, details } = category
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? details : <>{details.slice(0,250)}... <Link className='text-decoration-none text-danger fw-bold'>Read more</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Header>Featured</Card.Header>
        </Card>
    );
};

export default Category;