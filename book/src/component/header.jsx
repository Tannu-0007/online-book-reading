import logo from "../assets/images/logo.png"
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";


// import { useEffect, useState } from "react";
// import axios from "axios";
// function Header() {
// 	// const [state, setState] = useState("")
// 	const [reading, setReading] = useState("")

// 	const handleclick = () => {

// 		console.log("button clicked")
// 		setReading("primary")
// 	}

// 	const getuser = () => {
// 		axios.get("https://openlibrary.org/people/mekBot/books/want-to-read.json")
// 			.then((response) => {
// 				console.log("tanu",response.data["reading_log_entries"])
// 				const myarr = Object.entries(response.data["reading_log_entries"])
// 				console.log(myarr)
// 				setReading(myarr)
// 			})
// 			.catch((error) => {
// 				console.log(error)
// 			})
// 	}


// 	useEffect(() => {
// 		getuser();
// 	}, [])
function Header() {
	const { pathname } = useLocation()
	const [active, setActive] = useState('/')


	return (
		<>
			<header className="bg-primary">

				<div className="container-fluid">
					<nav className="navbar navbar-expand-sm navbar-dark ">
					<a className="navbar-brand" href="javascript:void(0)"><img src={logo}
							className="px-1 py-1 m-o " /></a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse " id="mynavbar">
							<ul className="navbar-nav mx-auto font-size">
								<li className="nav-item service-hover-effect ">

									<a className="nav-link text-light " href="javascript:void(0)"  >Home
</a>
								</li>
								<li className="nav-item service-hover-effect">
									<a className="nav-link text-light " href="#section1">About Us</a>
								</li>

								<div class="btn-group">
									<button type="button" className="btn btn-dark dropdown-toggle, text service-hover-effect" data-bs-toggle="dropdown" >
										Author
									</button>
									<ul class="dropdown-menu">
										<li><a className="dropdown-item " href="#section2">Rabindranath Tagore</a></li>
										<li><a className="dropdown-item" href="#section2">R.K. Narayan</a></li>
										<li><a className="dropdown-item" href="#section2">Stephen King</a></li>
										<li><a className="dropdown-item" href="#section2"></a></li>
									</ul>
								</div>

								{/* <li className="nav-item service-hover-effect">
									<a className="nav-link text-light" href="#section2">Authors</a>
								</li> */}
								<li className="nav-item service-hover-effect">
									<a className="nav-link text-light" href="#section3">Request</a>
								</li>
							</ul>
							<div className="input-group p-5  w-25  ">

								<input className="form-control " type="text" name="" placeholder="Search..." />
								<i className=" bg-white p-2 pt-2 rounded-end " aria-hidden="true"><FaSearch />

								</i>
							</div>
						</div>
					</nav>
				</div>
			</header>
			{/* {reading.map((item,index)=>(
                       <h2 key={index}>{item[1].logged_edition}</h2>
			))}  */}
		</>

	);
}
export default Header;