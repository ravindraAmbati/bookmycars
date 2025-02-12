import React from 'react';

function form(){
    return(
        <form action="#" class="request-form">
          	<h2>Make your trip</h2>
			<div class="form-group">
	    		<label for="" class="label">Pick-up location</label>
	    		<input type="text" class="form-control" placeholder="City, Airport, Station, etc"/>
	    	</div>
	    	<div class="form-group">
	    		<label for="" class="label">Drop-off location</label>
	    		<input type="text" class="form-control" placeholder="City, Airport, Station, etc"/>
	    	</div>
	    	<div class="d-flex">
	    		<div class="form-group mr-2">
	        	    <label for="" class="label">Pick-up date</label>
	                <input type="text" class="form-control" id="book_pick_date" placeholder="Date"/>
	            </div>
	            <div class="form-group ml-2">
	                <label for="" class="label">Drop-off date</label>
	                <input type="text" class="form-control" id="book_off_date" placeholder="Date"/>
	            </div>
            </div>
			<div class="form-group">
				<label for="" class="label">Pick-up time</label>
				<input type="text" class="form-control" id="time_pick" placeholder="Time"/>
			</div>
			<div class="form-group">
				<label for="" class="label">Name</label>
				<input type="text" class="form-control" id="name" placeholder="Name"/>
			</div>
			<div class="form-group">
				<label for="" class="label">Phone Number</label>
				<input type="text" class="form-control" id="ph_number" placeholder="Phone Number"/>
			</div>
			<div class="form-group">
				<input type="submit" value="Book Car" class="btn btn-primary py-3 px-4"/>
			</div>
	    	</form>
    );
}

export default form