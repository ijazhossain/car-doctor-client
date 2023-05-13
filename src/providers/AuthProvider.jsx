import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            console.log('on auth state changed', currentUser);
            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email
                }

                fetch('https://car-doctor-server-pied.vercel.app/jwt', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('car-access-token', data.token)


                    })
            } else {
                localStorage.removeItem('car-access-token')
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;