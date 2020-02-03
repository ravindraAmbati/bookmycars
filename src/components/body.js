import React from 'react';
import Form from './form';
import BookCar from './BookCar';

function Body(){
    return(
	<div class="hero-wrap Background-image3"  data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="container">
        <div class="row no-gutters slider-text justify-content-start align-items-center">
          <div class="col-lg-6 col-md-6 d-flex align-items-end">
		  <div class="text">
	            <h1 class="mb-4">Now <span>It's easy for you</span> <span>rent a car</span></h1>
            </div>
		  </div>
          <div class="col-lg-2 col">
		  </div>
          <div class="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
		  	{/* <Form/> */}
			  <BookCar/>
		  </div>
        </div>
      </div>
	</div>
        
    );
}

export default Body;