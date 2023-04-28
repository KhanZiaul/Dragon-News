import React from 'react';
import NavigationVar from '../../Shared/NavigationVar/NavigationVar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <NavigationVar></NavigationVar>
            <div className='w-50 mx-auto'>
                <h2 className='text-center my-5 fw-bold'>Register your account</h2>
                <Form >
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="text" name='image-url' placeholder="Enter your photo URL" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email address" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" />
                    </Form.Group>

                    <Button className='w-100' variant="dark" type="submit">
                        Register
                    </Button>
                    <Form.Group className="my-4 text-center" controlId="formBasicCheckbox">
                        <span className='fw-bold'> Already Have An Account ?</span> <Link to='/login' className='fw-bold text-danger text-decoration-none'>Login</Link>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Register;