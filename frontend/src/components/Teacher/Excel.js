import React from 'react'
import { ExcelRenderer} from 'react-excel-renderer';
const Excel = ({onUpload}) => {
  let json1=[]
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
  

    ExcelRenderer(fileObj, (err, resp) => {
     
     resp.rows.map(row=>{
        json1.push({'student_name':row[1],'student_roll':row[0],'ia1':row[2],'ia2':row[3],'termwork':row[4],'endsem':row[5],'owner':localStorage.getItem('id')})
     })
       console.log(json1)
       console.log('Excel part')    
    });               
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    onUpload(json1)
    

  }
    
    return (
        <div className='container-fluid p-3 border border-success' style={{width:'80%'}}>
            <h3 className='m-4 text-center'>Excel Upload </h3>
            <form className='justify-content-center ' onSubmit={e=>onSubmit(e)}>
  <div className="form-row row">
    <div className="form-group col-md-6 m-2">  
    <input type="file" onChange={(e)=>fileHandler(e)} style={{"padding":"10px"}} />
    </div>
   
  </div>
  <div className='text-center'>
  <button type="submit" className="m-3 btn btn-success">Upload</button>
  </div>
  
</form>
        </div>
    )
}

export default Excel


// import React, { Component } from 'react'
// import {OutTable, ExcelRenderer} from 'react-excel-renderer';

// export class Excel extends Component {
//     fileHandler = (event) => {
//         let fileObj = event.target.files[0];
//       let json1=[]
//         //just pass the fileObj as parameter
//         ExcelRenderer(fileObj, (err, resp) => {
//          console.log(resp.rows[0])
//          resp.rows.map(row=>{
//             json1.push({'ia1':row[0],'ia2':row[1]})
//          })
//            console.log(json1)
//             if(err){
//             console.log(err);            
//           }
//           else{
//             this.setState({
//               cols: resp.cols,
//               rows: resp.rows
//             });
//           }
//         });               
    
//       }
   
//     render() {
//         return (
//             <div>


//             <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
//             {/* <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
//             <h3 className='m-4'>Delete Student</h3>
//             <form className='justify-content-center'>
//   <div className="form-row row">
//     <div className="form-group col-md-6 m-2">  
//     <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
//     </div>
   
//   </div>
//   <button type="submit" className="m-3 btn btn-success">Delete</button>
// </form>
//         </div>
//         )
//     }
// }

// export default Excel


