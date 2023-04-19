import React from 'react';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import bg1 from '../../assets/bg1.png'
import Card from 'react-bootstrap/Card';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const QZone = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item className='mb-3'> <FaFacebookF className='me-3' /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaTwitter className='me-3' /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaInstagram className='me-3' /> Instagram</ListGroup.Item>
            </ListGroup>
            <h3 className='my-4'>Q - Zone</h3>
            <div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div>
                <Card className="text-center text-white ">
                    <Card.Img src={bg1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='fs-2 fw-bold mt-5 mb-3'>Create an Amazing Newspaper</Card.Title>
                        <Card.Text className='mb-3'>
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </Card.Text>
                        <Card.Text><Button variant="danger">Learn More</Button></Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default QZone;