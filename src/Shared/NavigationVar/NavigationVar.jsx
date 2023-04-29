import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import './NavigationVar.css'
import { FaRegUser } from 'react-icons/fa';

const NavigationVar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0 d-flex gap-4"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/' className='text-decoration-none text-black fw-bold' href="#action1">Home</NavLink>
                            <NavLink className='text-decoration-none text-black fw-bold' href="#action2">About</NavLink>
                            <NavLink className='text-decoration-none text-black fw-bold' href="#">career</NavLink>
                        </Nav>
                        <div className="d-flex gap-3 align-items-center">
                            {
                                user ? <img className='profile rounded-circle' src={user.photoURL} alt="" /> : <FaRegUser/>
                            }
                            <Link to='/login'><Button variant="dark">Login</Button></Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationVar;