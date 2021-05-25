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
