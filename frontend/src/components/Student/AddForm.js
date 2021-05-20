import {useState} from 'react'

const AddForm = ({onAdd}) => {
  const [ia1, setia1] = useState([])
const [ia2, setia2] = useState([])
const [termwork, settermwork] = useState([])
const [endsem, setendsem] = useState([])
const [subject, setsubject] = useState([])
let owner=localStorage.getItem('id')

const addSubject=(e)=>{
  e.preventDefault()
if(ia1===''){
  alert('enter the marks buddy')
  return
}

  onAdd({owner,subject,ia1,ia2,endsem,termwork})
  setia1('')
  setia2('')
  setendsem('')
  setsubject('')
  settermwork('')
}


    return (
      <div className='container-fluid p-3 border border-success' style={{width:'80%'}}>
            <div className='container-fluid p-3' >
        <h2 className='m-2 text-center'>Add Subject</h2>
        <h5 className='' style={{textAlign:'left'}}>Enter the following info:</h5>
         <form className='justify-content-center' onSubmit={addSubject}>
  <div className="form-row row">
  <div className="form-group col-md-6 m-2">  
      <input type='text'  className="form-control" placeholder="Subject Name" value={subject}
          onChange={(e) => setsubject(e.target.value)}/>
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
  <button type="submit" className="m-3 btn btn-success">Add</button>
</form>
     </div>
        </div>
    )
}

export default AddForm
