import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firbase.initialize";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleGoogleAuthLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };



    return {
        logout,
        handleGoogleAuthLogin,
        user,
    };
};

export default useFirebase;
