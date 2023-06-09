import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub} from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h5 className='fw-bold mb-4'>Login With</h5>

            <Button className='mb-3' variant="outline-primary"> <FaGoogle className='me-3' />Login With Google</Button>
            <Button className='mb-3' variant="outline-primary"> <FaGithub className='me-3' />Login With Github</Button>

            <div>
                <QZone></QZone>
            </div>
        </div>
    );
};

export default RightNav;