import React from 'react';
import {Bar} from 'react-chartjs-2';

const Graph = ({subject}) => {

let data = [];
let labels=[];
  (!subject[0])?
  labels=data=[]
  :
  subject.map((sub)=>{
      data.push(((sub.ia1+sub.ia1+sub.termwork+sub.endsem)/145)*100)
      labels.push(sub.subject)
      return 1
  })

    const state = {
   labels:labels,
        datasets: [
          {
            label: 'Performance',
            backgroundColor: 'green',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data
          },
        ]
      }
      

    
      return (
        <div >
            <Bar
       

          data={state}
          options={{
            title:{
              display:true,
              text:'Students Performance',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        
        </div>
        
          )
 }
        
export default Graph


//   const a = (!subject[0]) ? 0 : (subject[0]).ia1 + (subject[0]).ia2 + (subject[0]).termwork + (subject[0]).endsem
//   const b = (!subject[1]) ? 0 : (subject[1]).ia1 + (subject[1]).ia2 + (subject[1]).termwork + (subject[1]).endsem
//   const c = (!subject[2]) ? 0 : (subject[2]).ia1 + (subject[2]).ia2 + (subject[2]).termwork + (subject[2]).endsem
//   const d = (!subject[3]) ? 0 : (subject[3]).ia1 + (subject[3]).ia2 + (subject[3]).termwork + (subject[3]).endsem
//   const e = (!subject[4]) ? 0 : (subject[4]).ia1 + (subject[4]).ia2 + (subject[4]).termwork + (subject[4]).endsem
//   const f = (!subject[5]) ? 0 : (subject[5]).ia1 + (subject[5]).ia2 + (subject[5]).termwork + (subject[5]).endsem
    
//   const lab=(!subject[0])?[1,2,3,4,5,6]: [(subject[0]).subject, (subject[1]).subject, (subject[2]).subject,
//   (subject[3]).subject, (subject[4]).subject, (subject[5]).subject]
