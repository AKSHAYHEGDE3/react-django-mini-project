import React from 'react'
import {useState} from 'react'
const DeleteForm = ({onDelete}) => {
    const [studentId, setstudentId] = useState([])
    const onSubmit=(e)=>{
       e.preventDefault()
       //setstudentId('')
      //  alert("Student "+studentId+" deleted")
        onDelete(studentId)
    }
    return (
      <div className='container-fluid p-3 border border-success' style={{width:'80%'}}>
            <h3 className='m-4'>Delete Student</h3>
            <form className='justify-content-center' onSubmit={onSubmit}>
  <div className="form-row row">
    <div className="form-group col-md-6 m-2">  
      <input type="number" className="form-control" placeholder="Student ID" value={studentId}
          onChange={(e) => setstudentId(e.target.value)}/>
    </div>
   
  </div>
  <div className='text-center'><button type="submit" className="m-3 btn btn-success">Delete</button></div>
  
</form>
        </div>
    )
}

export default DeleteForm
