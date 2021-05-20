const Evaluation = ({result}) => {
    let text=''
    let header=''
    let color=''
        
    if(result===0){
    text = 'poor performance'
    header='Sorry!!'
    color='danger'}
    else if(result===1){
    text= 'Good but u can improve'
    header='Good Job !!'
    color='warning'
    }
    else if(result===2){
    text ="Excellent work keep working"
    header="Amazing Mate!!!"
    color='success'
    }
    else{
      text ="Loading"
    header="Loading"
    color='light'
    }
    
    
        return (
            <div>
                <h3 style={{textAlign:'left'} } className='m-3'>Your Evaluation:</h3>
                <div className={`jumbotron jumbotron-fluid p-4 bg-${color}`}>
            <div className='container'>
              <h1 className="display-4">{header}</h1>
              <p className="lead">{text}</p>
            </div>
          </div></div>
            
        )
    }
    
    export default Evaluation