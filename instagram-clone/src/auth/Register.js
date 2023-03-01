import React, { useEffect } from 'react';
import {useRef , useState , useContext} from 'react';
import { Link} from 'react-router-dom'
// import {db} from './firebase';
import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc , } from "firebase/firestore";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth"
import app from '../firebase';
import { async } from '@firebase/util';


function Register() {
    // const [dataApi ,setDataApi] = useState('');
    //  const {register , signIn , user ,setUser } = useContext(userContext);
   
  ///////////////////////////////////////////
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null) ;
    const fourthInputRef = useRef(null) ;
    ////// USESTATE hooklar en basda olmalidir
    const [value , setValue] = useState({
      firstName: "",
      lastName: "" ,
      email:  "",
      password: "",
  })
  const [errorMsg , setErrorMsg] = useState(null)
  const [submitted , setSubmitted] = useState(false);
  function submitHandler(e) {
    e.preventDefault();
    setValue({
      ...value,
      firstName: firstInputRef.current.value,
      lastName: secondInputRef.current.value,
      email: thirdInputRef.current.value,
      password: fourthInputRef.current.value,
    })  
    
  }

  const auth = getAuth(app);
  const db = getFirestore(app)

  function register2( email , password  ) {
   
    setSubmitted(true);
   return createUserWithEmailAndPassword(auth , email , password)
    
  }

    async  function register(e){

         e.preventDefault();
    await register2(value.email , value.password )
         .then( cred=> {
          const dbRef =  doc(db, "users",cred.user.uid );
             setDoc(dbRef, {
            name: `${value.firstName} ${value.lastName}`,
            id:cred.user.uid,
           })}

         )
         .then(() => setErrorMsg(null))
   .catch(error => setErrorMsg(error.message))


          }
    // async function btnSubmit (e) {
    //    e.preventDefault();
       
    //    if(valid === true){
    //    try {
    //      await register(value.email , value.password ,value.firstName , value.lastName)
    //      .then(cred => {
    //       const newUsersRef =  doc(db, "users",cred.user.uid  );
    //          setDoc(newUsersRef, {
    //         name: `${value.firstName} ${value.lastName}`,
    //         id:cred.user.uid,
    //         
    //     })
    //     })
    //      setErrorMsg('');         
    //  } catch (error) {
    //    setErrorMsg(error.message);
    // }
    // }
    //     setSubmitted(true);          
    // }
    ///////////////////
  
  return (
    <div className='Register-div'>
        <h1> Register</h1>
             <form>
      <div className='formDiv d-flex flex-column gap-4  p-4 px-5'>      
  {/* rendering alert depending on state of submitted or not */}  
    
        {submitted === true && errorMsg === null ? <p  className=' rounded py-3 alert alert-success'>Success</p> : null}
        {submitted === true && errorMsg !== null ? <p  className=' rounded py-3 alert alert-danger'>{errorMsg}</p> : null}
    
            <div className='inputGroup d-flex flex-column'> 
            <input
             value={value.firstName}
             onChange={submitHandler} 
             ref={firstInputRef}
              type="text" id='fname'  placeholder='First Name' className='px-3 py-2'/>
{/* {submitted && !value.firstName ? <span className='text-light bg-danger p-2 my-1 '> Please write a First Name</span>  : null}                      */}
            </div>

            <div className='inputGroup d-flex flex-column'>
            <input 
            value={value.lastName}
             onChange={submitHandler} 
             ref={secondInputRef}
              type="text" id='lname' placeholder='Last Name' className='px-3 py-2'/>
{/* {submitted && !value.lastName ? <span className='text-light bg-danger p-2 my-1 '> Please write a Last Name</span>  : null}                      */}
            </div>

            <div className='inputGroup d-flex flex-column'>
            <input 
            value={value.email}
             onChange={submitHandler} 
             ref={thirdInputRef} type="email" id='email' placeholder='Email' className='px-3 py-2'/>
{/* {submitted &&  !value.email.includes("@") ? <span className='text-light bg-danger p-2 my-1 '> Please write an Email which contains "@" sign</span>  : null}                      */}
            </div>

            <div className='inputGroup d-flex flex-column'>
            <input 
            name='password'
            autoComplete='on'
            value={value.password}
             onChange={submitHandler} 
             ref={fourthInputRef} type="password" id='password' placeholder='Password' className='px-3 py-2'/>
{/* {submitted &&  !value.password ? <span className='text-light bg-danger p-2 my-1 '> Please write a password</span>  : null}                      */}
            </div>

            <button
            onClick={register}
            type='submit' className='px-3 py-2 rounded'>
               Register
            </button>
  
        </div>
          </form>
       <Link to='/'> 
         Sign in
      </Link>
    </div>
  )
}
      export default Register;