import React from 'react'
import img1 from '../img1.jpg'

const Welcome = () => {
    return (
        <div>
              
    

       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1}  className="d-block w-100 imgcaro" alt="..."/>
      <div className="carousel-caption ">
      <h1 className='mt-5 md-2 caption' >Welcome to <span style={{color:'green'}}>StudEval</span></h1>
      <h6 className='caption'>A convenient way for teachers and students to manage their their data and get also to get a self generated evaluation of the same</h6>
      
      </div>
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <h6>Some representative placeholder content for the second slide.</h6>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <h6>Some representative placeholder content for the third slide.</h6>
      </div>
    </div> */}
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>


<div className="container-fluid connect text-light pb-3" style={{backgroundColor:'#121212'}}>
	<div className="row padding text-center">
		<div className="col-12">
<h2>Connect</h2>
		</div>
<div className="col-12 social padding">
	<a href="https://www.facebook.com/tejas.kolwankar"><i className="fab fa-facebook"></i></a>
	<a href="https://twitter.com/KolwankarTejas"><i className="fab fa-twitter"></i></a>
	<a href="tejaskowlankar021@gmail.com"><i className="fab fa-google-plus-g"></i></a>
	<a href="https://www.instagram.com/tej_k_021/" ><i className="fab fa-instagram"></i></a>
	<a href="/" ><i className="fab fa-youtube"></i></a>
</div>

	</div>
</div>



<footer className="container-fluid padding  text-light m-0">
	<div className="row padding text-center">
    <div className="col-md-4">

<h4  style={{color:'green'}}>StudEval</h4>
<hr />
      <h6>952-710-5923</h6>
      <h6>305,Jairaj co.op</h6>
      <h6>100 ft road.</h6>
    </div>

    <div className="col-md-4">

<h4>Our Help</h4>
<hr className="light"/>
      <h6>952-710-5923</h6>
      <h6>305,Jairaj co.op</h6>
      <h6>100 ft road.</h6>
    </div>

    <div className="col-md-4">

<h4>Welcome</h4>
<hr className="light"/>
<h6>952-710-5923</h6>
<h6>305,Jairaj co.op</h6>
<h6>100 ft road.</h6>
    </div>
<hr className="light-100"/>
    <div className="col-12">
	<h5>&copy;StudEval</h5>
    </div>


	</div>
</footer>


        </div>
    )
}

export default Welcome