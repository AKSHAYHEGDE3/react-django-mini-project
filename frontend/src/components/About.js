import React from 'react'
import LogNav from './LogNav'
import profile from '../profile.jpg'
import img2 from '../img2.jpg'
const About = () => {
    return (
<div>
  <LogNav about={true}/>
  <div className="container-fluid">

<h1 className="heading my-2" style={{textAlign:'center',color:'green'}}>About Us</h1> 

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active bg-success">
      <img src={img2} style={{height:"500px"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item bg-success">
      <img src={img2} style={{height:"500px"}}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item bg-success">
      <img src={img2} style={{height:"500px"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h2 className='m-2 text-center ' style={{color:'green'}}>Web Application to find out fast and slow learner</h2>

<h3 className='mt-10' style={{color:'green'}}>Team:</h3>



<div className='row px-5 ' style={{justifyContent:'center'}}>
    
    <div className="card col-md-3 m-5 py-3 ">
    <img src={profile} className="profimg card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-text">Name: Akshay Hegde<br/>Roll no: 14<br/>S.E.I.T</p>
    </div>
    </div>
    <div className="card col-md-3 m-5 py-3 " >
    <img src={profile}  className="profimg card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-text">Name: Tejas Kolwankar<br/>Roll no: 21<br/>S.E.I.T</p>
    </div>
    </div>
    <div className="card col-md-3 m-5 py-3">
    <img src={profile} className="profimg card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-text">Name: Bhargav Kashya<br/>Roll no: 19<br/>S.E.I.T</p>
    </div>
</div>

</div>
</div>
</div>

        
     
    )
}

export default About
