import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.init";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user,setUser]=useState(null);
    const [loading, setLoading] =useState(true)

    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
       
    };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log("user in",currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
    })

    const AuthInfo = {
        user,
        createUser,
        loading,
        signIn,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;