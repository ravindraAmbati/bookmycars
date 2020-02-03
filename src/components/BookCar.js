import React from 'react';
import axios from 'axios'

class BookCar extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
		  from : '',
		  to : '',
		  fromDate : '',
		  toDate : '',
		  time : '',
		  name : '',
		  number : ''
		}
	  }
	
	
	onChangeHandler = e => {
		this.setState({[e.target.name]:e.target.value})
	  }
	
	onSubmitHandler = e =>{
		e.preventDefault()
		console.log(this.state)
		// axios.get('http://localhost:5000/adminLogin/test')
		// axios.post('http://localhost:5000/adminLogin/validate',{"username":"admin","password":"bookmycars"},{headers: {"Access-Control-Allow-Origin": "*"}})	
		axios.post('http://bookmycars-test.ap-south-1.elasticbeanstalk.com/booking/bookAndReturnId',
		{
			"source":this.state.from,
			"destination":this.state.to,
			"startDate":this.state.fromDate,
			"endDate":this.state.toDate,
			"pickupTime":this.state.time,
			"name":this.state.name,
			"contactNo":this.state.number
		},
		{headers: {"Access-Control-Allow-Origin": "*"}}
		)
		.then(response => {
		  console.log(response);
		  this.setState({
			from : '',
			to : '',
			fromDate : '',
			toDate : '',
			time : '',
			name : '',
			number : ''
		  });
		  alert(response.data);
		})
		.catch(error => {
		  console.log(error);
		  this.setState({
			from : '',
			to : '',
			fromDate : '',
			toDate : '',
			time : '',
			name : '',
			number : ''
		  });
		  alert("Something went wrong try again!!!");
		})
		
	  }
	
	  personForm = () => {
		  return(
			<div><h1>Person Form</h1></div>
		  );
	  }
	  render(){
		const {from,to,fromDate,toDate,time,name,number} = this.state;
		
		return(
			<form onSubmit={this.onSubmitHandler} class="request-form">
				  <h2>Make your trip</h2>
				<div class="form-group">
					<label for="" class="label">Pick-up location</label>
					<input type="text" class="form-control" placeholder="City, Airport, Station, etc" name="from" value={from}
					 onChange = {this.onChangeHandler}/>
				</div>
				<div class="form-group">
					<label for="" class="label">Drop-off location</label>
					<input type="text" class="form-control" placeholder="City, Airport, Station, etc" name="to" value={to}
					 onChange = {this.onChangeHandler}/>
				</div>
				<div class="d-flex">
					<div class="form-group mr-2">
						<label for="" class="label">Pick-up date</label>
						<input type="text" class="form-control" id="book_pick_date" placeholder="Date" name="fromDate" 
						value={fromDate} onChange = {this.onChangeHandler}/>
					</div>
					<div class="form-group ml-2">
						<label for="" class="label">Drop-off date</label>
						<input type="text" class="form-control" id="book_off_date" placeholder="Date" name="toDate" 
						value={toDate} onChange = {this.onChangeHandler}/>
					</div>
				</div>
				<div class="form-group">
					<label for="" class="label">Pick-up time</label>
					<input type="text" class="form-control" id="time_pick" placeholder="Time" name="time" 
					value={time} onChange = {this.onChangeHandler}/>
				</div>
				<div class="form-group">
					<label for="" class="label">Name</label>
					<input type="text" class="form-control" id="name" placeholder="Name" name="name" 
					value={name} onChange = {this.onChangeHandler}/>
				</div>
				<div class="form-group">
					<label for="" class="label">Phone Number</label>
					<input type="text" class="form-control" id="ph_number" placeholder="Phone Number" name="number" 
					value={number} onChange = {this.onChangeHandler}/>
				</div>
				<div class="form-group">
					<input type="submit" value="Book Car" class="btn btn-primary py-3 px-4"/>
				</div>
				</form>
		);
	}
	
}


export default BookCar