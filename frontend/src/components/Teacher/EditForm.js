import React from 'react'
import {useState} from 'react'

const EditForm = ({onUpdate}) => {

    const [ia1, setia1] = useState([])
    const [ia2, setia2] = useState([])
    const [termwork, settermwork] = useState([])
    const [endsem, setendsem] = useState([])
    const [student_roll, setstudent_roll] = useState([])
    const [student_name, setstudent_name] = useState([])
    const [studentId, setstudentId] = useState([])
   

    // let owner=localStorage.getItem('id')
const onSubmit = (e) => {
  e.preventDefault()

  
  onUpdate(studentId,{ia1,ia2,termwork,endsem,student_roll,student_name})
// onAdd({student_name,student_roll,ia1,ia2,termwork,endsem,owner})
setia1('')
setia2('')
settermwork('')
setendsem('')
setstudent_name('')
setstudent_roll('')
// setstudent_roll('')
  
}

return (
     <div className='container-fluid p-3 border border-success' style={{width:'80%'}} >
        <h2 className='m-2 text-center'>Edit Student</h2>
        <h5 className='' style={{textAlign:'left'}}>Enter the following info:</h5>
         <form className='justify-content-center' onSubmit={onSubmit}>
  <div className="form-row row">
    
    <div className="form-group col-md-6 m-2">  
      <input type="number" className="form-control" placeholder="Student Id" value={studentId}
          onChange={(e) => setstudentId(e.target.value)}/>
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='20'className="form-control" placeholder="Roll no" value={student_roll}
          onChange={(e) => setstudent_roll(e.target.value)}/>
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='20'className="form-control" placeholder="Student Name" value={student_name}
          onChange={(e) => setstudent_name(e.target.value)}/>
    </div>
    
  
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='20'className="form-control" placeholder="Internal Assesment 1" value={ia1}
          onChange={(e) => setia1(e.target.value)}/>
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='20' className="form-control" placeholder="Internal Assesment 2" value={ia2}
          onChange={(e) => setia2(e.target.value)}/>
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='80' className="form-control"  placeholder="End Sem" value={endsem}
          onChange={(e) => setendsem(e.target.value)}/>
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='25 'className="form-control"  placeholder="TermWork" value={termwork}
          onChange={(e) => settermwork(e.target.value)}/>
    </div>
 
  </div>
  <div className='text-center'>
  <button type="submit" className="m-3 btn btn-success ">Save</button>
  </div>
  
</form>
     </div>)
}

export default EditForm
