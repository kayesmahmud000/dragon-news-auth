import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)

    const createNewUser=( email ,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)

    }


    const loginUser=(email , password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const logOut=()=>{
        signOut(auth)
    }
    console.log(user)

    const authInfo={
       user,
       setUser,
       createNewUser,
       loginUser,
       logOut

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {
            children
        }
       </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.element
}

export default AuthProvider;