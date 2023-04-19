import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div className='container my-5'>
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
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#">career</Nav.Link>
                        </Nav>
                        <div className="d-flex gap-5 align-items-center">
                           <p>Profile</p>
                            <Button variant="dark">Login</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;