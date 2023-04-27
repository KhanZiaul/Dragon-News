import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FaEye } from 'react-icons/fa';


const Category = ({ category }) => {
    const { image_url, title, details, total_view } = category
    return (
        <Card className='my-5'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-4' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? details : <>{details.slice(0, 250)}... <Link className='text-decoration-none text-danger fw-bold'>Read more</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Header className='d-flex justify-content-between px-3 align-items-center'>
                <div>

                </div>
                <div className='d-flex align-items-center gap-2 fw-bold'>
                    <p> <FaEye /> </p>
                    <p>{total_view}</p>
                </div>
            </Card.Header>
        </Card>
    );
};

export default Category;