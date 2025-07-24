




import { useEffect, useState } from "react";
import RR from "../assets/images/RR.png"
import book from "../assets/images/book.png"
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { NavLink } from "react-router-dom";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
function Section() {

	const [reading, setReading] = useState("")
	const [harry, setHarry] = useState("")
	const [auther, setAuther] = useState([])


	const getHarry = () => {

		axios.get("https://potterapi-fedeperin.vercel.app/en/books")
			.then((response) => {
				console.log("tanu", response.data.data)
				// const myarr = Object.entries(response.data)
				// console.log(myarr)
				setHarry(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}
	const getauther = async () => {

		await axios.get("http://localhost:1234/fetchAuthor")
			.then((response) => {
				console.log("auther", response.data)
				setAuther(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}


	const getuser = () => {

		axios.get("https://stephen-king-api.onrender.com/api/villains")
			.then((response) => {
				console.log("tanu", response.data)
				const myarr = Object.entries(response.data)
				console.log(myarr)
				setReading(response.data.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}


	useEffect(() => {
		getuser();
		getauther()
		getHarry();
	}, [])

	return (

		<>
			{
				console.log(reading, "set")

			}

			{
				console.log(harry, "harry")

			}
			{auther.length > 0 ? JSON.stringify(auther) : ""}
			<section className="bg-primary py-5 main-section">
				<div className="container">
					<div className="d-flex justify-content-center  mb-5 ">
						<img src={RR} width="800px" className="rounded-1" />
					</div>
				</div>

				<div className="my-4 container-fluid">
					<h1 className="text-light d-flex justify-content-center mt-5 mb-3 p1 ">Read Free</h1>
					<div className="row g-1">

						{harry ? harry.map((item, index) => (
							<div className="col-3  ">
								<div className="card m-2 " style={{ width: '18rem', height: '37rem' }}>
									<img src={item.cover} className="card-img-top m-3 w-75 " alt="..." />

									<div className="card-body">
										<p className="card-title">i'd ={item.number}</p>
										<p className="card-title"> Title ={item.originalTitle}</p>

										<div className="d-flex justify-content-between">
											<p className="card-text-center mt-1">Pages= {item.pages}</p>
											<p className="card-text-center mt-1">Index=	{item.index}</p>
										</div>
										<NavLink to={`readmore/${item?.number}`} className="btn btn-primary mb-2">Read now</NavLink>
										<button type="button" data-mdb-button-init data-mdb-ripple-init
											className="btn btn-danger btn-sm mb-2 mx-1" data-mdb-tooltip-init
											title="Move to the wish list " >
											<CiHeart />
										</button>
										<button type="button" data-mdb-button-init data-mdb-ripple-init
											className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item">
											<MdDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						)) : <h1>no books </h1>}

						{reading ? reading.map((item, index) => (
							index < 0 && <div className="col-3  " key={index}>
								<div className="card m-2 " style={{ width: '18rem', height: '37rem' }}>
									<img src={item.url} className="card-img-top m-3 w-75 " alt="..." />
									<div className="card-body">
										<p className="card-title">i'd ={item.id}</p>
										<p className="card-title"> Title ={item.name}</p>

										<a href="#" className="btn btn-primary mb-2">Read now</a>
										<button type="button" data-mdb-button-init data-mdb-ripple-init
											className="btn btn-danger btn-sm mb-2 mx-1" data-mdb-tooltip-init
											title="Move to the wish list " >
											<CiHeart />
										</button>
										<button type="button" data-mdb-button-init data-mdb-ripple-init
											className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item">
											<MdDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						)) : <h1>no books </h1>}




					</div>
				</div>
			</section>

		</>

	);
}
export default Section;