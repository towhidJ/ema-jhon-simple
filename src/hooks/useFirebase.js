import {
        getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";


initializeAuthentication();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleGoogleAuthLogin = () => {
        return signInWithPopup(auth, provider);
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
