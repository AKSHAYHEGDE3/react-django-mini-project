// // import {useEffect,useState} from 'react'
import {Pie} from 'react-chartjs-2';
const SortedTable = ({sortList}) => {

    // const options = {
    //     maintainAspectRatio: false	// Don't maintain w/h ratio
    //   }
    const state1 = {
        labels: ['Fast learner', 'Average learner', 'Slow learner'],
        datasets: [
          {
            label: 'To find slow and fast lerner',
            backgroundColor: [
              '#28a745',
              '#ffc107',
              '#dc3545',
            ],
            hoverBackgroundColor: [
            '#175000',
            '#4B5000',
            '#501800',
            ],
            data: [(!sortList.fast)?0:sortList.fast.length, (!sortList.med)?0:sortList.med.length, (!sortList.slow)?0:sortList.slow.length]
          }
        ]
      }


    // const [sortList, setsortList] = useState([])


    // useEffect(() => {
    //     const fetchSorted=async()=>{
    //         const sorted= await getSortList()
    //         setsortList(sorted)
    //     }
       
    //     fetchSorted()
       
    // }, [])


    // const getSortList= async()=>{
    //     const sortlist= fetch('http://localhost:8000/api/sort').then((res)=>res.json())
    //     return sortlist
    // }

return (
<div >
    <h4 style={{margin: "20px",textAlign:'left'}}>Sorted Students :</h4>
         
<div className="container-fluid">
    <div className="row">
<div className="col-md-4  table-responsive"><table className='table bg-danger text-center table-hover'>

<thead><tr><th>Slow Learners</th></tr></thead>
<tbody>
{(!sortList.slow)?<tr><td>loading</td></tr>:sortList.slow.map((roll)=>(<tr key={roll}><td>{roll}</td></tr>))}
</tbody>

</table></div>




<div className="col-md-4  table-responsive"><table className='table bg-warning text-center table-hover'>

<thead><tr><th>Average Learners</th></tr></thead>
<tbody>
{(!sortList.med)?<tr><td>loading</td></tr>:sortList.med.map((roll)=>(<tr key={roll}><td>{roll}</td></tr>))}
</tbody>

</table></div>

<div className="col-md-4  table-responsive"><table className='table bg-success text-center table-hover'>

<thead><tr><th>Fast Learners</th></tr></thead>
<tbody>
{(!sortList.fast)?<tr><td>loading</td></tr>:sortList.fast.map((roll)=>(<tr key={roll}><td>{roll}</td></tr>))}
</tbody>

</table></div>


    </div>
</div>
<article className='className="canvas-container"'>
<div className='piechart'>
          <Pie
          // options={options}
             height={'100px'}
            data={state1}
            options={{
              title:{
              display:true,
              fontSize:20
              },
              legend:{
                display:true,
                position:'right'
                
              }
            }}
          />
      </div>

</article>




</div>

    )
}

export default SortedTable
// {(!sortList.fast)?<tr><td>loading</td></tr>:sortList.fast.map((roll)=>(<tr key={roll.id}><td>{roll}</td></tr>))}



   
 