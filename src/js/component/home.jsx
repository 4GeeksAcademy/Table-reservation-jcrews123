import React , {useState} from "react";
class Reservation {
	constructor(name, email, seats, service) {
	  this.name = name;
	  this.email = email;
	  this.seats = seats;
	  this.service = service;
	}
  }
 
const Home = () => {
const [currentReservation,setCurrentReservation] = useState({})
const [reservationList,setReservationList] = useState([])
const strUser = e.options[e.selectedIndex].text;
return (
	<div className="text-center">
		<div>
			<input
				type="text"
				onChange={(event) => 
					currentReservation.name = event.target.value}
				value={currentReservation.name}
				placeholder="Full Name">
			</input>
			<input
				type="text"
				onChange={(event) => 
					currentReservation.email = event.target.value}
				value={currentReservation.email}
				placeholder="Email">
			</input>
			<input
				type="text"
				onChange={(event) => 
					currentReservation.email = event.target.value}
				value={currentReservation.email}
				placeholder="Email">
			</input>
			<div class="input-group mb-3">
  				<select class="form-select" id="inputGroupSelect01">
   					<option value="regular">Regular</option>
    				<option value="vip">Vip</option>
  				</select>
			</div>
		</div>
		<button 
			className="button button-secondary" 
			onClick={(event) => 
				{
					reservationList.push(currentReservation)
					setCurrentReservation(new Reservation ("","","",""))
				}
			}>
			Set Reservation
		</button>
		<table>
  			<tr>
    			<th>Full Name</th>
   				<th>Email</th>
    			<th>Seats</th>
				<th>Service</th>
  			</tr>
				{reservationList.map((eachReservation,index) =>(
					<tr key={index}>
						<td>{eachReservation.name}</td>
						<td>{eachReservation.email}</td>
						<td>{eachReservation.seats}</td>
						<td>{strUser}</td>
					</tr>

					
				))}
		</table>
	</div>
	);
};

export default Home;
