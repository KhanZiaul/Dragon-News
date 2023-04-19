import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebookF , FaTwitter , FaInstagram} from 'react-icons/fa';


const RightNav = () => {
    return (
        <div>
            <h5 className='fw-bold mb-4'>Login With</h5>

            <Button className='mb-3' variant="outline-primary"> <FaGoogle className='me-3' />Login With Google</Button>
            <Button className='mb-3' variant="outline-primary"> <FaGithub className='me-3' />Login With Github</Button>
            <ListGroup>
                <ListGroup.Item className='mb-3'> <FaFacebookF className='me-3' /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaTwitter className='me-3' /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-3'> <FaInstagram className='me-3' /> Instagram</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RightNav;