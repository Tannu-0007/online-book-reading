import { useEffect, useState } from "react";
import author from "../assets/images/author.png"
// import { useState } from "react"
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";


function Author() {
	// const [color, setColor] = useState("dark")
	// const handleclick = () => {
	// 	setColor("primary")

	const [state, setState] = useState("")
	const getuser = () => {

		axios.get("https://openlibrary.org/people/mekBot/books/want-to-read.json")
			.then((response) => {
				console.log("tannu", response.data['reading_log_entries'])
				// const myarr = Object.entries(response.data)
					// console.log(myarr)
				setState(response.data['reading_log_entries'])
			})

			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		getuser();
	}, [])
	return (

		<>

			<section className="bg-primary py-5 mt-5 main-section">
				<div className="container ">
					<div className="bg-dark rounded-4 p-4 text-light text-style" id="author">
						<h1 className="d-flex justify-content-center p1 mt-3 "> Author</h1>

						<div className="row  g-3  ">
							{state ? state.map((item, index) => (
							index < 4 &&	<div className="col-3">
									<div className="bg-white p-2 pt-3 mt-4 rounded-4 text-dark service-hover-effect">
										<img src={author} alt="" className=" card-img-top mt-3" width="50" />
										<h3 className="mt-2">{item['work']['author_names'][0]}</h3>
										<h5 className="mt-2">{item['work']['first_publish_year']}</h5>
										{/* <h5 className="mt-2">{item['work']['author_keys']}</h5> */}


										<p >He is a British privately owned stock photography agency launched in September 1999.
											It is an online supplier of stock images, videos, and other image material.</p>
									</div>
								</div>
							)) : <h1>No Auther Found</h1>}

						</div>
					</div>
				</div>
			</section>



		</>

	);
}
export default Author;