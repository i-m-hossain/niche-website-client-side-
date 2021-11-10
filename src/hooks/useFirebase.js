import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // registering user with email and password
    const registerWithEmail = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUserProfile(name)
                const user = userCredential.user;
                console.log('from register: user is registered');
                setIsLoading(false)

            })
            .catch((error) => {

            });
    }
    // updating user profile when user successfully register
    const updateUserProfile =(name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('from update profile: userprofile updated');
        }).catch((error) => {
            console.log('from update profile:',  error.message)
        });
    }

    // sign in using login form
    const signInWithEmail = (email, password ) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('from signin: user is logged in');
                setIsLoading(false)

            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
    // observe user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe;

    },[])

    //user logging out
    const logout = () => {
        signOut(auth).then(() => {
            console.log('from logout: user is logged out');
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        isLoading,
        user,
        registerWithEmail,
        signInWithEmail,
        logout
    }
}

export default useFirebase;