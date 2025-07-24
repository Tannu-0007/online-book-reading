

import loc from "../assets/images/loc.png"
import mail from "../assets/images/mail.png"
import img from "../assets/images/img.png"
function Section3() {
	return (
		<>
			<section>
				<div className="container-fluid">
					<div className="row">
						<div className="col-6 ">

							<h2 className="text-primary mt-5 p1"> Book Shop Location</h2>
							<div className=" d-flex pe-2 ms-4 pt-3"><img src={loc} height="22" className="mt-1" />
								<div className="ms-2 p2 ">
									<span> India </span><br />
									<span>1451 Radaur road, BookBar, (India) </span> <br />
									<a href="+1(343)453-0013 " className="text-dark">+1(343)453-0013</a>
								</div>
							</div>


							<div className=" d-flex pe-2 ms-4 pt-3"><img src={loc} height="22" className="mt-1" />
								<div className="ms-2 p2 ">
									<span> India </span><br />
									<span>Sector 23, Model Town,YNR ,Bookstrok (India) </span> <br />
									<a href=" +91 9896570012" className="text-dark"> +91 9896570012</a>
								</div>
							</div>


							<div className=" d-flex pe-2 ms-4 pt-3"><img src={img} height="20" className=" mt-1" />
								<div className="ms-2 p2 ">
									<span> Opening Time</span><br />
									<span> Monday to Saturday </span> <br />
									<span>10:00 AM to 07:30 PM</span>
								</div>
							</div>

							<div className=" d-flex pe-2 ms-4 py-3 "><img src={mail} height="18"
								className="mt-1" />
								<div>
									<span className="ms-2 mt-0 p2">Email Address</span><br />
									<a href="tannu.rana.2408@gamil.com"
										classNameName="text-dark ms-2 ">tannu.rana.2408@gamil.com</a>
								</div>
							</div>


						</div>
						<div className="col-6 border" id="section3">
							<h3 className="text-primary mt-5 p1">Contact us</h3>

							<form className="row g-1 ">
								<div className="col-md-6 ">
									<label for="inputEmail4" className="form-label"></label>
									<input type="email" className="form-control" id="inputname" placeholder="First Name" />
								</div>
								<div className="col-md-6">
									<label for="inputPassword4" className="form-label"></label>
									<input type="email" className="form-control" id="inputlastname" placeholder="Last Name" />
								</div>
								<div className="col-12">
									<label for="inputAddress" className="form-label"></label>
									<input type="text" className="form-control" id="inputAddress" placeholder="Email Address" />
								</div>
								<div className="col-12">
									<label for="inputAddress2" className="form-label"></label>
									<input type="text" className="form-control" id="inputnumber" placeholder="Phone Number" />
								</div>

								<div className="col-12">
									<label for="inputAddress2" className="form-label"></label>
									<input type="text" className="form-control" id="inputmessage" placeholder="Your Message" />
								</div>

								<div>
									<a href="#" className="btn btn-dark  rounded-pill my-3 ">Submit</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<main />






		</>
	);
}


export default Section3;