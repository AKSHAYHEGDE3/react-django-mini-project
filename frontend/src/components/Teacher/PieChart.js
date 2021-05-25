// import React from 'react'
// import {useEffect,useState} from 'react'
// import {Pie, Doughnut} from 'react-chartjs-2';

const PieChart = ({sortList}) => {
//   const [set, setset] = useState({})
//     useEffect(() => {
//         setset({
//             labels: ['Fast learner', 'Average learner', 'Slow learner'],
//             datasets: [
//               {
//                 label: 'To find slow and fast lerner',
//                 backgroundColor: [
//                   '#B21F00',
//                   '#C9DE00',
//                   '#2FDE00',
//                 ],
//                 hoverBackgroundColor: [
//                 '#501800',
//                 '#4B5000',
//                 '#175000',
//                 ],
//                 data: [(!sortList.fast)?0:sortList.fast.length, (!sortList.med)?0:sortList.med.length, (!sortList.slow)?0:sortList.slow.length]
//               }
//             ]
//           }) 
//   }, [])
  
    
       
      return(
            <div className='piechart'>
              {/* <Doughnut/> */}
           {/* <Pie /> */}
                {/* //  height={'100px'}
                // data={set}
                // options={{
                //   title:{
                //   display:true,
                //   fontSize:20
                //   },
                //   legend:{
                //     display:true,
                //     position:'right'
                    
                //   }
                // }} */}
            
          </div>
            )
}

export default PieChart
