import React from 'react';
import NavigationVar from '../../Shared/NavigationVar/NavigationVar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    function formHandler(e) {
        e.preventDefault()
        const Name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const Email = e.target.email.value;
        const Password = e.target.password.value;

        console.log(Name, Email, Password, photoURL)

        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                userProfile( userCredential.user , Name , photoURL)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

        e.target.reset()
    }

    function userProfile(user,name,url) {
        updateProfile(user, {
            displayName:name, photoURL:url
        }).then(() => {

        }).catch((error) => {

        });
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center my-5 fw-bold'>Register your account</h2>
                <Form onSubmit={formHandler}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter your photo URL" required/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email address" required/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter your password" required/>
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