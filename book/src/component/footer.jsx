import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import linkdin from "../assets/images/linkdin.png"


function Footer() {
	return (
		<>
			<footer className="p-3 bg-dark text-light">
				<div className="container-fluid">
					<div>
						<h3 className="d-flex justify-content-center">Rapid Reading</h3>
						<p className="d-flex justify-content-center">A writer only begins a book. A reader finished it. </p>
						<div className=" d-flex justify-content-center p-2">
							<img src={facebook} alt="" className="me-2"/>
								<img src= {insta} alt="" className="me-2"/>
									<img src={linkdin} alt=" " className="me-2"/>
									</div>

									<div className=" d-flex justify-content-center ">
										<nav className="navbar navbar-expand-sm navbar-dark  ">

											<button className="navbar-toggler " type="button" data-bs-toggle="collapse"
												data-bs-target="#mynavbar">
												<span className="navbar-toggler-icon"></span>
											</button>
											<div className="collapse navbar-collapse" id="mynavbar">
												<ul className="navbar-nav mx-auto   ">
													<li className="nav-item ">
														<a className="nav-link text-light" href="javascript:void(0)">Home</a>
													</li>
													<li className="nav-item">
														<a className="nav-link text-light" href="javascript:void(0)">About</a>
													</li>
													<li className="nav-item">
														<a className="nav-link text-light" href="javascript:void(0)">Author</a>
													</li>
													<li className="nav-item">
														<a className="nav-link text-light" href="javascript:void(0)">Request</a>
													</li>

												</ul>
											</div>

										</nav>
									</div>

									<hr/>
										<div className="row">
											<div className="col-9 ">
												<span>Copyright ©2024 Rapid Reading | All Rights Reserved.</span>
											</div>
											<div className=" col-3    d-flex justify-content-end">
												<span>Privacy Policy | Terms & Conditions</span>
											</div>
										</div>
									</div>
								</div>

							</footer>




						</>
						);
}
						export default Footer;
