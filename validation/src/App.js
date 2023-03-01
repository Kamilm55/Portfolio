import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';

function App() {

  const firstInputRef = useRef(null)
  const secondInputRef = useRef(null)
  const thirdInputRef = useRef(null) 
  ///////////////////////////
  const [valid , setValid] = useState(false)
  ///////////////////////
  const [submitted , setSubmitted] = useState(false)
  function btnSubmit (e) {
     e.preventDefault();
    
      setSubmitted(true)

      if(value.firstName && value.lastName && value.email && value.email.includes("@")){
        setValid(true)
      }     
  }
  ///////////////////
  const [value , setValue] = useState({
      firstName: null,
      lastName: null ,
      email:  "",
  })
  function submitHandler(e) {
    e.preventDefault();
    setValue({
      ...value,
      firstName: firstInputRef.current.value,
      lastName: secondInputRef.current.value,
      email: thirdInputRef.current.value,
    })  
  }

  return (
    <div className="App">
          <form>
      <div className='formDiv d-flex flex-column gap-4 bg-success p-4 px-5'>      
  {/* rendering alert depending on state of submitted or not */}  
    { submitted && valid  ? <div className='succes-message alert bg-primary my-0 text-light '> Success! Thank you for registering</div>  : null }  
            <div className='inputGroup d-flex flex-column'> 
            <input
             disabled={submitted}
             value={value.firstName}
             onChange={submitHandler} 
             ref={firstInputRef} type="text" id='fname'  placeholder='First Name' className='px-3 py-2'/>
{submitted && !value.firstName ? <span className='text-light bg-danger p-2 my-1 '> Please write a First Name</span>  : null}                     
            </div>

            <div className='inputGroup d-flex flex-column'>
            <input 
            disabled={submitted}
            value={value.lastName}
             onChange={submitHandler} 
             ref={secondInputRef} type="text" id='lname' placeholder='Last Name' className='px-3 py-2'/>
{submitted && !value.lastName ? <span className='text-light bg-danger p-2 my-1 '> Please write a Last Name</span>  : null}                     
            </div>

            <div className='inputGroup d-flex flex-column'>
            <input 
            disabled={submitted}
            value={value.email}
             onChange={submitHandler} 
             ref={thirdInputRef} type="email" id='email' placeholder='Email' className='px-3 py-2'/>
{submitted && /* !value.email && */ !value.email.includes("@") ? <span className='text-light bg-danger p-2 my-1 '> Please write an Email which contains "@" sign</span>  : null}                     
            </div>

            <button
            onClick={btnSubmit}
            type='submit' className='px-3 py-2 '> Register</button>
        </div>
          </form>
    </div>
  );
}

export default App;
