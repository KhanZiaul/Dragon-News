import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebookF , FaTwitter , FaInstagram} from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'


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
            <h3 className='my-4'>Q - Zone</h3>
            <div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;