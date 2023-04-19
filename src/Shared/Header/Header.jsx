import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='container mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='my-2'>Journalism Without Fear or Favour</p>
                <p className='fs-4 fw-normal'>{moment().format("dddd, MMMM D , YYYY")}</p>
            </div>
            <div className='my-5 d-flex align-items-center'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={130} className='fw-bold'>
                    Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain — as it happened   !
                </Marquee>
            </div>
        </div>
    );
};

export default Header;