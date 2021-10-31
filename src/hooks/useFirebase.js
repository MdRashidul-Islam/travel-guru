import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../components/Login/firebase/firebase.init";

initAuth()


const useFirebase=()=>{
  const [user, setUser]= useState({});
  const [isLoading, setIsLoading]= useState(true);
  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const signInWithGoogle=()=>{
    setIsLoading(true);
   return signInWithPopup(auth, provider) 

  }

  //log out
  const logOut=()=>{
    setIsLoading(true);
    signOut(auth).then(() => {
     
    })
    .finally(()=>setIsLoading(false))
  }
 
//on Auth state change

  useEffect(()=>{
    const unsubscribed= onAuthStateChanged(auth, user=>{
       if(user){
         setUser(user)
       }
       else{
         setUser({})
       }
       setIsLoading(false);
       
     })
     return ()=> unsubscribed;
   },[])
 


  return {
    setIsLoading,
    isLoading,
    user,
    signInWithGoogle,
    logOut
  }
}
export default useFirebase;;
