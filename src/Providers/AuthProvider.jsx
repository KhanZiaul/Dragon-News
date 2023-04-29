import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const user = {author : 'khan zia'}

    function createUser(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;