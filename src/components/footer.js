import React from 'react';

function Footer(){
    return(
      <div id="indexPageFooter">
        <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About BooKMyCars</h2>
              <p> As a leader in the car rental industry, 
                    BookMyCars (BMC) understands that a traveller needs the best in terms of services that save both time and 
                    money without compromising on comfort and safety. Our car services are designed with the objective to address 
                    all the issues of safety, reliability, comfort, time as well savings so that you can travel worry-free, 
                    wherever you go.</p>
              {/* <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul> */}
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Information</h2>
              <ul class="list-unstyled">
                <li><a href="index.html#indexPageAbout" class="py-2 d-block">About Us</a></li>
                <li><a href="index.html#indexPagePricing" class="py-2 d-block">Pricing</a></li>
                <li><a href="#" class="py-2 d-block">Term and Conditions</a></li>
                {/* <li><a href="#" class="py-2 d-block">Best Price Guarantee</a></li> */}
                {/* <li><a href="#" class="py-2 d-block">Privacy &amp; Cookies Policy</a></li> */}
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Customer Support</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">FAQ</a></li>
                <li><a href="#" class="py-2 d-block">Payment Option</a></li>
                <li><a href="#" class="py-2 d-block">Booking Tips</a></li>
                <li><a href="#" class="py-2 d-block">How it works</a></li>
                <li><a href="index.html#indexPageFooter" class="py-2 d-block">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">BooKMyCars, OU Colony, Shaikpet, Hyderabad, Telangana, India</span></li>
	                <li><a href="tel:+91 888 695 9501"><span class="icon icon-phone"></span><span class="text">+91 888 695 9501</span></a></li>
	                <li><a href="mailto:p_karimulla@hotmail.com"><span class="icon icon-envelope"></span><span class="text">p_karimulla@hotmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | BooKMyCars.in | powered by <b><i>RRA</i></b>.
  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  </p>
          </div>
        </div>
      </div>
    </footer>
    </div>

    );
}

export default Footer;