import React from 'react';

function nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sticky-Nav" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="index.html">BookMy<span>Cars</span></a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
	          <li class="nav-item"><a href="index.html#indexPageAbout" class="nav-link">About Us</a></li>
	          <li class="nav-item"><a href="index.html#indexPagePricing" class="nav-link">Pricing</a></li>
	          {/* <li class="nav-item"><a href="car.html" class="nav-link">Our Car</a></li> */}
	          {/* <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li> */}
	          <li class="nav-item"><a href="index.html#indexPageFooter" class="nav-link">Contact Us</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    );
}

export default nav;