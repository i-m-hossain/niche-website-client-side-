import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import axios from 'axios'
initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [role, setRole] = useState('user')

    // registering user with email and password
    const registerWithEmail = (email, password, name, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //save user to the database
                const newUser = { displayName: name, email: email, role: 'user' }
                setUser(newUser)
                setRole('user')
                saveUser(newUser)
                //updating user profiles name
                updateUserProfile(name)
                const url = '/'
                history.push(url)
                console.log('from register: user is registered');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => { setIsLoading(false) });
    }
    const saveUser = (user) => {
        axios.post(`http://localhost:5000/users`, user)
            .then(res => console.log('from save user:', res))
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
    // check the authenticated user status
    useEffect(() => {
        console.log(user.email);
        const url = `http://localhost:5000/users/role?email=${user?.email}`
        axios.get(url)
            .then(res => {
                console.log('res',res.data.role);
                setRole(res.data.role)
            })

    }, [user.email])
    console.log(role);
    return {
        role,
        isLoading,
        user,
        authError,
        registerWithEmail,
        signInWithEmail,
        logout
    }
}

export default useFirebase;