import React from 'react'
import {useState,useEffect} from 'react'
import Login from './Login'



import {useHistory} from 'react-router-dom'
import Signup from './Signup'
import LogNav from './LogNav'
import Welcome  from './Welcome'
const Loginer = () => {
   const [role, setrole] = useState('log')
const history=useHistory();
    useEffect((loggedState) => {

      setrole(localStorage.getItem('role'))
        if(loggedState){
            fetch('http://localhost:8000/api/current_user/', {
                        headers: {
                          Authorization: `JWT ${localStorage.getItem('token')}`
                        }
                      })
                        .then(res => res.json())
                        .then(json => {
                          console.log(json)
                          setusername(json.username)
                          setid(localStorage.getItem('id'))
                        });
        }
        setid(localStorage.getItem('id'))
    }, [])
    const [display, setdisplay] = useState([])
    const [loggedState, setloggedState] = useState(localStorage.getItem('token') ? true : false)
    const [username, setusername] = useState('')
    const [id, setid] = useState(0)
    const handleLogin=(e,data)=>{
        e.preventDefault();
     
        fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
          .then(
           
              json => {
                if(json.token===undefined)
                {alert("Enter correct credentials or Signup")}
                else
                {
                localStorage.setItem('token', json.token);
                localStorage.setItem('id', json.user.id);
                localStorage.setItem('log',true)
                console.log(json)
                setloggedState(true);
                setdisplay('');
                setusername(json.user.username)
                setid(json.user.id)}
                
            }
     
          );
            

    }

    const handleSignup=(e,data)=>{
        e.preventDefault();
        
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        localStorage.setItem('id', json.id);
        localStorage.setItem('log',true)

            setloggedState(true);
            setdisplay('');
            setid(json.id)
            console.log(id)
            setusername(json.username)
            console.log(username)
      });
    }
    
    const handleLogout = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('id');

            setloggedState(false)
            setusername('')  
        };
        
    const displayForm = form => {
      
            setdisplay(form)
          };

              let form;
    switch (display) {
      case 'login':
        form = <Login handle_login={handleLogin} setrole={setrole}/>;
        break;
      case 'signup':
        form = <Signup handle_signup={handleSignup} setrole={setrole}/>;
        break;
      default:
        form = null;
    }


    return (
        <div className="App">
      
        <LogNav logged_in={loggedState}
          display_form={displayForm}
          handle_logout={handleLogout}/>
        {form}
        <h3>
          
          {
            
          loggedState

            ? 
            role==='teacher'?
             history.push('/Teacher'):
            //  <Redirect username={username} to="/Teacher"/>:
             role==='student'?
             history.push('/Student'):<></>
             :
            <Welcome/>
            }
            
        </h3>
      </div>
    )
}

export default Loginer
