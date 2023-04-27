import React from 'react';
import Card from 'react-bootstrap/Card';

const Category = ({category}) => {
    const {image_url} = category
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Img variant="top" src={image_url} />
                
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Header>Featured</Card.Header>
        </Card>
    );
};

export default Category;