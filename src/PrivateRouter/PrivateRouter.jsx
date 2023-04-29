import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRouter = ({ children }) => {
    const location = useLocation()

    const { user , loading } = useContext(AuthContext)

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRouter;