import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='my-2'>Journalism Without Fear or Favour</p>
                <p className='fs-4 fw-normal'>{moment().format("dddd, MMMM D , YYYY")}</p>
            </div>
            <div className='my-5'>
                <Button variant="danger">Latest</Button>
            </div>
        </div>
    );
};

export default Header;