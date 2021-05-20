import React from 'react'
import {useState} from 'react'

const DeleteForm = ({onDelete}) => {
  
    const [subjectid, setsubjectid] = useState([])
    const onSubmit=(e)=>{
  e.preventDefault()
      console.log("hi")

        onDelete(subjectid)
      alert('Subject '+subjectid+' deleted')
        setsubjectid('')  
    }
    return (
      <div className='container-fluid p-3 border border-success' style={{width:'80%'}}>
            <h3 className='m-4'>Delete Subject</h3>
            <form className='justify-content-center' onSubmit={onSubmit}>
  <div className="form-row row">
    <div className="form-group col-md-6 m-2">  
      <input type="number" className="form-control" placeholder="Subject Id." value={subjectid}
          onChange={(e) => setsubjectid(e.target.value)}/>
    </div>
   
  </div>
  <button type="submit" className="m-3 btn btn-success">Delete</button>
</form>
        </div>
    )
}

export default DeleteForm
