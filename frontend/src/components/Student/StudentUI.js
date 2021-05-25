import {useState,useEffect} from 'react'
// import Navbar from '../Navbar'
import LogNav from '../LogNav'

import StudentTable from './StudentTable'
import Evaluation from './Evaluation'
import AddForm from './AddForm'
import Graph from './Graph'
import DeleteForm from './DeleteForm'
import UpdateForm from './UpdateForm'
const StudentUI = () => {
const [displayForm, setdisplayForm] = useState(false)
const [updateForm, setupdateForm] = useState(false)
  const [deleteForm, setdeleteForm] = useState(false)
    const [subject, setsubject] = useState([])
    const [result, setresult] = useState('')

    useEffect(() => {
        const getSubject= async()=>{
            const subjects=await fecthSubject()
            setsubject(subjects)
        }   
    getSubject()

    const geteval=async()=>{
        await feteval();
    const re=await feteval();
        setresult(re)
    }
    geteval()
},[] )
    

    const fecthSubject = async()=>{
        const data =fetch('http://localhost:8000/api/student?owner='+localStorage.getItem('id')).then((res)=>res.json())
        return data
    }
    const feteval=async ()=>{
        const dat=await fetch('http://localhost:8000/api/eval?owner='+localStorage.getItem('id')).then((res)=>res.json())
        return dat;
    }

    const addNewSubject = async(sub)=>{
        const res =await fetch('http://localhost:8000/api/studenttable/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(sub)
        })
        const data=await res.json()
       
        setsubject([...subject,data])
    }

  

    
    



    const toggler=(e)=>{setdisplayForm(!displayForm)}
    const EditFormThere=()=>{setupdateForm(!updateForm)}
    const DeleteFormThere=()=>{console.log("delete");setdeleteForm(!deleteForm)}


const updateSubject=async (id1,data)=>{
    const res = await fetch('http://localhost:8000/api/student?id='+id1,{
    method:'PATCH',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(data)

  })
  const upstu=res.json()
  console.log(upstu)
  window.location.reload();
}
// const deleteSubject=(subjectId)=>{ fetch('http://localhost:8000/api/studenttable/'+subjectId, { method: 'DELETE' });
// window.location.reload();
// }

const deleteSubject=(studentId)=>{

    fetch('http://localhost:8000/api/studenttable/'+studentId, { method: 'DELETE' })
    // window.location.reload();
   //  const getMarks = async () => {
   //   const tasksFromServer = await fetchStudents()
   //   setStudent(tasksFromServer)
   // }
     //getMarks()
   }

    return (
        <div>
            <LogNav/>
            <h1 className="Title" style={{textAlign:'left'}}>Welcome To StudEval</h1>

<br/>

            <h3 style={{margin:'20px',textAlign:'left',color:'green'}}>Your Records</h3>
<br/>
            
            {displayForm&&<AddForm onAdd={addNewSubject}/>}
         
      {updateForm&&<UpdateForm onUpdate={updateSubject}/>}
      {deleteForm&&<DeleteForm onDelete={deleteSubject}/>}

            <StudentTable subject={subject} add={toggler} showAdd={displayForm} 
            updateForm={updateForm} EditFormThere={EditFormThere}
            deleteForm={deleteForm} DeleteFormThere={DeleteFormThere}
            />
            
            
            <Evaluation result={result}/>
            
            <Graph subject={subject}/>
            {/* <Line1/> */}
        </div>
    )

    }
export default StudentUI