


const StudentTable = ({subject,add,showAdd,DeleteFormThere,deleteForm,EditFormThere,updateForm}) => {
 
    const marks=subject
  let text=showAdd ? 'Close':'New'
  let EditText=updateForm?'Close':'Edit'
    let DeleteText=deleteForm?'Close':'Delete'

    return (
        <div>
             <div className="TableCont">
    

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-5 col-xs-5 ">
                <h3 style={{margin: "20px",textAlign:'left'}}>Table 1:</h3>
            </div>

            <div className="col-lg-7 col-xs-7">
                <button type="button" className="btn btn-outline-success buttons" onClick={add}>
                    {text}
                </button>
                <button type="button" className="btn btn-outline-success buttons" onClick={EditFormThere}>{EditText}</button>
                <button type="button" className="btn btn-outline-success buttons" onClick={DeleteFormThere}>{DeleteText}</button>
            </div>
        </div>
    </div>
    <div className="table-responsive">
        <table className="table table-bordered table-success">
            <thead>
                <tr>
                <th scope="col" rowSpan="2" >Subject Id</th>
                    <th scope="col" rowSpan="2" >Subject</th>
                    <th scope="col" colSpan="2" style={{textAlign:'center'}}>IA-1</th>
                    <th scope="col" colSpan="2" style={{textAlign:'center'}}>IA-2</th>
                    <th scope="col" colSpan="2" style={{textAlign:'center'}}>Term Work</th>
                    <th scope="col" colSpan="2" style={{textAlign:'center'}}>End Sem exam</th>
                    <th scope="col" colSpan="2" style={{textAlign:'center'}}>Total pointer</th>

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

            {
                marks.map((mark)=>(
                    <tr key={mark.id}>
                        <th >{mark.id}</th>
                    <th scope="row">{mark.subject}</th>
                    <td>{mark.ia1}</td>
                    <td>20</td>
                    <td>{mark.ia2}</td>
                    <td>20</td>
                    <td>{mark.termwork}</td>
                    <td>25</td>
                    <td>{mark.endsem}</td>
                    <td>80</td>
                    <td>{(mark.ia1+mark.ia2+mark.endsem+mark.termwork)*100/145}</td>
                    <td>100</td>
                </tr>
                ))

            }



                
              
            </tbody>
        </table>
    </div>


    

</div>
        </div>
    )
}

export default StudentTable
