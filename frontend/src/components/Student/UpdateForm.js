import React from 'react'
import {useState} from 'react'

const UpdateForm = ({onUpdate}) => {

    const [subjectid, setsubjectid] = useState([])

    const [ia1, setia1] = useState([])
    const [ia2, setia2] = useState([])
    const [termwork, settermwork] = useState([])
    const [endsem, setendsem] = useState([])
    const [subject_name, setsubject_name] = useState([])
   

    let owner=localStorage.getItem('id')
const onSubmit = (e) => {
  e.preventDefault()

  if (ia1==='') {
    alert('Please add a marks')
    return
  }
  onUpdate()
// onAdd({student_name,subject_name,ia1,ia2,termwork,endsem,owner})
setia1('')
setia2('')
settermwork('')
setendsem('')
setsubject_name('')
  
}

return (
  <div className='container-fluid p-3 border border-success' style={{width:'80%'}}>
        <h2 className='m-2 text-center'>Edit Student</h2>
        <h5 className='' style={{textAlign:'left'}}>Enter the following info:</h5>
         <form className='justify-content-center' onSubmit={onSubmit}>
  <div className="form-row row">
  <div className="form-group col-md-6 m-2">  
      <input type="number" className="form-control" placeholder="Subject ID" value={subjectid}
          onChange={(e) => setsubjectid(e.target.value)}/>
    </div>


    <div className="form-group col-md-6 m-2">  
      <input type="number" className="form-control" placeholder="Subject Name" value={subject_name}
          onChange={(e) => setsubject_name(e.target.value)}/>
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
  <button type="submit" className="m-3 btn btn-success">Save</button>
</form>
     </div>)
}

export default UpdateForm
