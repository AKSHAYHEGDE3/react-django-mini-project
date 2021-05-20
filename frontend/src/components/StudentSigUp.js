import './new.css'
import {useState} from 'react'
const StudentSigUp = ({handle_signup,setrole}) => {
    const [username, setusername] = useState([])
   const [password, setpassword] = useState([])

   const submitter=(e)=>{
       e.preventDefault()
       console.log(handle_signup)
       handle_signup(e,{'username':username,'password':password})
       setrole('student')
       localStorage.setItem('role','student')
   }
   
    return (
  
            <div className="container bg-dark p-5 mt-5">
        <form onSubmit={submitter}>
            <div className="formContainer ">
            <h1 className='text-light'>Student Sign Up </h1>

            <hr/>

            <div><input type="text" placeholder="Enter Username" name="username" required className='input' onChange={e=>setusername(e.target.value)}/></div>
            <div><input type="text" placeholder="Enter Email" name="email" required className='input'/></div>
            <div><input type="password" placeholder="Enter Password" name="password" required className='input' onChange={e=>setpassword(e.target.value)}/></div>
            <div><input type="password" placeholder="Repeat Password" name="repeatPassword"
            required className='input'/></div>
     
            <p className="text-light">By creating an account you agree to our <a href="/"
            style={{color:"dodgerblue"}}>Terms & Privacy</a></p>
            <div>
            <button type="submit"  className=' signup button'>Sign Up</button>
            </div>
            </div>
            </form>
     
    </div>
        
    )
}

export default StudentSigUp
