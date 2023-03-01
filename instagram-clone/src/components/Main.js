import React, { useEffect, useState }  from 'react'
import { Link, useLocation } from 'react-router-dom'
import { doc, getDoc ,getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import DefaultPosts from './DefaultPosts';
import Posts from './Posts';



function Main() {
   const [currentUser , setCurrent] = useState({});

   const location = useLocation();
   const db = getFirestore()
    
     useEffect( () =>{
     
        async function loadData() {
            const docRef = doc(db, "users",location.state.userId);
            const docSnap = await getDoc(docRef);
        if (docSnap) {
          setCurrent(docSnap.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        }

        loadData();
     } ,[])
            
      const auth = getAuth();

      function logOut(){
        signOut(auth);
        
        window.history.pushState(null, document.title, location.href);      }
      
       
  return (
    <div >
      <h1>{currentUser.name}</h1>
      <DefaultPosts />
      <Posts userId={location.state.userId}/>
      
      <Link to='/'>
        <button  onClick={logOut}>Log out</button>
      </Link>
    </div>
  )
}


export default Main




