import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext=createContext({
    user:null,
    token:""
});

const AuthContextProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    });
   //this will use to set the previous location of page so that after logout when we again login i redirect the same page. 
    const [prevLocation,setPrevLocation]=useState("");
    useEffect(()=>{
       const parseData=JSON.parse(localStorage.getItem('auth'));
       if(parseData){
       setAuth({...auth,user:parseData.user,token:parseData.token});
       }
    },[]);

    axios.defaults.headers.common["Authorization"]=auth?.token;

    return(
        <AuthContext.Provider value={{auth,setAuth,prevLocation,setPrevLocation}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;