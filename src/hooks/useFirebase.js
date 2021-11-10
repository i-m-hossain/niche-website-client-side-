import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    // registering user with email and password
    const registerWithEmail = (email, password, name, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateUserProfile(name)
                const url = '/dashboard'
                history.push(url)
                setIsLoading(false)
                console.log('from register: user is registered');
            })
            .catch((error) => {
                setAuthError(error.message)
            });
    }
    // updating user profile when user successfully register
    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('from update profile: userprofile updated');
        }).catch((error) => {
            console.log('from update profile:', error.message)
            setAuthError(error.message)
        });
    }

    // sign in using login form
    const signInWithEmail = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log('from sign in: user is logged in');
                setIsLoading(false)
                const url = location?.state?.from || '/dashboard'
                history.push(url)
            })
            .catch((error) => {
                setAuthError(error.message)
            });
    }
    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;

    }, [])

    //user logging out
    const logout = () => {
        signOut(auth).then(() => {
            console.log('from logout: user is logged out');
        }).catch((error) => {
            setAuthError(error.message)
        });
    }

    return {
        isLoading,
        user,
        authError,
        registerWithEmail,
        signInWithEmail,
        logout
    }
}

export default useFirebase;