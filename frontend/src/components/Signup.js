import React from 'react'
import TeacherSignUp from './TeacherSignUp'
import StudentSigUp from './StudentSigUp'
import {useState} from 'react'
const Signup = ({handle_signup,setrole}) => {
    const [toggler, settoggler] = useState(true)
    const [text,settext]=useState('SignUp as Student ?')


    const ChangeState=()=>{
        settoggler(!toggler)
        let text1=(toggler)?'SignUp as Teacher ?':'SignUp as Student ?'
    
        settext(text1)
    
    }
    

    return (
        <div>
           <button className='btn btn-outline-success mb-3' onClick={ChangeState} >{text}</button>
            
            {(toggler)?<TeacherSignUp handle_signup={handle_signup} setrole={setrole}/>:<StudentSigUp setrole={setrole} handle_signup={handle_signup}/>}
            
            {/* <TeacherSignUp/>
            <StudentSigUp/> */}
             
        </div>
    )
}

export default Signup

