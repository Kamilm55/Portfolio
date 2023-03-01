import React, { useEffect } from 'react';
import {useRef , useState , useContext} from 'react';
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth"
import app from '../firebase';
import {Link , useNavigate} from 'react-router-dom';


function SignIn() {

    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
 
    ////// USESTATE hooklar en basda olmalidir
    const [value , setValue] = useState({
      email:  "",
      password: "",
  })
    const [errorMsg , setErrorMsg] = useState(null)
    const [submitted , setSubmitted] = useState(false);
    ////////////
  function submitHandler(e) {
    e.preventDefault();
    setValue({
      ...value,
      email: firstInputRef.current.value,
      password: secondInputRef.current.value,
    })  
    
  }
  const auth = getAuth(app);
  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault();
    setSubmitted(true);
    return (
        signInWithEmailAndPassword(auth , value.email , value.password)
        .then((cred) =>{
          setErrorMsg(null);
          navigate('/main', {
            state: {
             userId:cred.user.uid,
              
            }
          }
          );
          
        }  )
        .catch(error => setErrorMsg(error.message))
    )

      }
  
  return (
    <div>
        <h1> SignIn</h1>
        {submitted === true && errorMsg === null ? <p  className=' rounded py-3 alert alert-success'>Success</p> : null}
        {submitted === true && errorMsg !== null ? <p  className=' rounded py-3 alert alert-danger'>{errorMsg}</p> : null}
        
             <form onSubmit={signIn} >
      <div className='formDiv d-flex flex-column gap-4  p-4 px-5'>      
  {/* rendering alert depending on state of submitted or not */}  
    
            <div className='inputGroup d-flex flex-column'>
            <input 
            value={value.email}
             onChange={submitHandler} 
             ref={firstInputRef} type="email" id='email' placeholder='Email' className='px-3 py-2'/>
{/* {submitted &&  !value.email.includes("@") ? <span className='text-light bg-danger p-2 my-1 '> Please write an Email which contains "@" sign</span>  : null}                      */}
            </div>

            <div className='inputGroup d-flex flex-column'>
            <input 
            name='password'
            autoComplete='on'
            value={value.password}
             onChange={submitHandler} 
             ref={secondInputRef} type="password" id='password' placeholder='Password' className='px-3 py-2'/>
{/* {submitted &&  !value.password ? <span className='text-light bg-danger p-2 my-1 '> Please write a password</span>  : null}                      */}
            </div>

            <Link >
            <button
            onClick={signIn}
            className='px-3 py-2 rounded btn btn-light'>
               SignIn
               </button>
            </Link>

  {/* <Link to="/" className='nav-item' >Sign In</Link> */}

        </div>
          </form>
          <p>If you do not have account</p>
          <Link to='/register'> 
            Sign up
          </Link>
    </div>
  )
}

export default SignIn