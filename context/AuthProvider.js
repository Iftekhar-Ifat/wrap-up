import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../lib/firebase';
import {
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    async function signUp(email, password, username) {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(user, {
                displayName: username,
            });
            return user;
        } catch (error) {
            alert(error.message);
        }
    }

    async function login(email, password) {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    async function logOut() {
        return await signOut(auth);
    }

    async function resetPassword(email) {
        return await sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const userContext = {
        currentUser,
        login,
        signUp,
        logOut,
        resetPassword,
        updateProfile,
    };
    return (
        <AuthContext.Provider value={userContext}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
