import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // registering user with email and password
    const registerWithEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log('from register: user is registered');

            })
            .catch((error) => {

            });
    }

    // sign in using login form
    const signInWithEmail = (email, password ) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('from signin: user is logged in');

            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

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