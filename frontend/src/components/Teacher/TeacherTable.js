import React from 'react'



const TeacherTable = ({marks,renderForm,addForm,updateForm,EditFormThere,deleteForm,DeleteFormThere,uploadForm,UploadFormThere}) => {
    
    let text=addForm?'Close':'New'
    let EditText=updateForm?'Close':'Edit'
    let DeleteText=deleteForm?'Close':'Delete'
    let UploadText=uploadForm?'Close':'Upload'
    return (
        
        <div>
            <div className="TableCont">



            <div className="container-fluid">
        <div className="row">
            <div className="col-lg-5 col-xs-5 ">
                <h4 style={{margin: "20px",textAlign:'left'}}>Table 1:</h4>
            </div>

            <div className="col-lg-7 col-xs-7">
                <button type="button" className="btn btn-outline-success buttons" onClick={renderForm} >
                   {text}
                </button>
                <button type="button" className="btn btn-outline-success buttons" onClick={EditFormThere}>{EditText}</button>
                <button type="button" className="btn btn-outline-success buttons" onClick={DeleteFormThere} >
                  {DeleteText}
                </button>
                <button type="button" className="btn btn-outline-success buttons" onClick={UploadFormThere} >
                  {UploadText}
                </button>
            </div>
        </div>
    </div>



            <div className="table-responsive">
    <table className="table   table-info table-hover" >
      <thead>
        <tr>
        <th scope="col" rowSpan="2">Student Id</th>
          <th scope="col" rowSpan="2">Roll no</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>IA-1</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>IA-2</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>Term Work</th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>
            End Sem exam
          </th>
          <th scope="col" colSpan="2" style={{textAlign: "center"}}>
            Total pointer
          </th>
        </tr>
      </thead>
      <thead>
        <tr>

         <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
          <th scope="col">scored</th>
          <th scope="col">o/f</th>
        </tr>
      </thead>
     <tbody>       
{/* {console.log()} */}
     {
     marks.map((data) => (
        // <th style={{color:'white',background:'black'}}>{data.id}</th>
        
        <tr key={data.id}>
        <th >{data.id}</th>
        <th >{data.student_roll}</th>
      <td>{data.ia1}</td>
      <td>20</td>
      <td>{data.ia2}</td>
      <td>20</td>
      <td>{data.termwork}</td>
      <td>25</td>
      <td>{data.endsem}</td>
      <td>80</td>
      <td>{data.ia1}</td>
      <td>{data.ia1}</td>
     </tr>
     ))}
         
         
         
         
         
         
         </tbody>
    
    
    
    </table>
  </div>
            </div>
                       

        </div>
    )
}

export default TeacherTable
