import React from 'react'
import PropTypes from 'prop-types';


import {useState} from 'react'
const Login = ({handle_login,setrole}) => {

const [username, setusername] = useState([])
const [password, setpassword] = useState([])

const Teachersubmitter=(e)=>{
  e.preventDefault();
  console.log({'username':username,'password':password})
  handle_login(e,{'username':username,'password':password})
  setrole('teacher')
  localStorage.setItem('role','teacher')

}

const Studentsubmitter=(e)=>{
  e.preventDefault();
  console.log({'username':username,'password':password})
  handle_login(e,{'username':username,'password':password})
  setrole('student')
  localStorage.setItem('role','student')
}

    return (

      <div  >
        
<h1
      style={{
        textAlign: 'center',
        
        marginTop: '10px',
        marginBottom: '0px'
      }}
    >
      Login
    </h1>


<div style={{marginTop: '40px'}} className="container login-container p-0">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Teachers</h3>
            <form onSubmit={Teachersubmitter}>
          
              <div className="form-group my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                  name="username"
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  id="password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Login"
                  id="submit1"
                />
              
              </div> 
               <div className="form-group my-2">
                 <a href="/" className="ForgetPwd">Forget Password?</a> 
             </div>
            </form>
          </div>




         
          <div className="col-md-6 login-form-2 ">
            <h3>Students</h3>
            <form onSubmit={Studentsubmitter}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  id="username2"
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="form-group my-2" >
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  id="password2"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Login"
                  id="submit2"
                />
              </div>
              <div className="form-group">
                <a href="/" className="ForgetPwd" value="Login">Forget Password?</a>
              </div>
            </form>
          </div> 
        </div>
      </div>


      </div>
    )
}

export default Login
Login.propTypes = {
  handle_login: PropTypes.func.isRequired
};