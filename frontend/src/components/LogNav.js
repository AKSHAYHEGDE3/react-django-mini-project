import React from 'react'
import {Link,useHistory} from 'react-router-dom'
const LogNav = ({display_form,about}) => {
  const history = useHistory();
   
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('log');
        localStorage.removeItem('role');
        history.push('/')
    };



   const logged_out_nav=(
    <ul className="navbar-nav ms-auto mb-lg-0">
    <li className="nav-item mx-4">
              <Link
               
                className="nav-link"
                onClick={() => history.push('/about')}
              >
                About
              </Link>
    </li>
    <li className="nav-item mx-4">
          
            
              <Link className="nav-link" onClick={() => history.push('/')}>Home</Link>
    </li>  

    
  <li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();display_form('login')}}>
 
  <Link className="nav-link" onClick={() => history.push('/')}>SignIn</Link>

</li>
<li className="nav-item mx-4" onClick={(e)=>{e.preventDefault();display_form('signup')}}>

  <Link className="nav-link" onClick={() => history.push('/')}>SignUp</Link>
</li>  
 
    
    
  </ul>
       
   )
   const logged_in_nav=(
   <ul className="navbar-nav ms-auto mb-lg-0">       
   <li className="nav-item mx-4">
              

   <Link className="nav-link" onClick={() => history.push('/about')}>About</Link>
    </li>
    <li className="nav-item mx-4">
    
    <Link className="nav-link" onClick={() => history.push('/')}>Home</Link>
              
    </li>
   <li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();handleLogout()}}>
    
     <Link className="nav-link" onClick={() => history.push('/')}>LogOut</Link>
   </li>
   
 </ul>
 )
   
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-light">

    <a className=" mx-3 navbar-brand" href="/"><h3>StudEval</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
       {localStorage.getItem('log')?logged_in_nav:logged_out_nav}
    </div>

</nav> 
            
            
        </div>
    )
}

export default LogNav
