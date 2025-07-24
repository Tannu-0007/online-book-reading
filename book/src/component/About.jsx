//npm start


import library from "../assets/images/library.png"
function About(){
return(
	<>
	<section className="bg-white ">
			<div className="container-fluid  " id="section1">
				<h1 className=" d-flex justify-content-center  mt-5 mb-3 text-primary p1 ">About Us</h1>
				<div className="row g-1">

					<div className="col-6 ">
						<div className="my-1 p-2 p2">
							<h3> Welcome to RR - Your Ultimate Reading Companion</h3>
							<p> Are you Bibliophile? Do you ever struggler to find e-books for reading? You're
								not
								alone.</p>
							<p> We are a group of creator and authors on a mission to provide both paid and
								unpaid
								e-books for reading. </p>
						</div>
						<div className="my-1 p-2 p2">
							<h3>Our Mission</h3>
							<p>RR provides most of the books that will be available for reading. Both paid &
								unpaid are
								availabe at one place.</p>
						</div>
						<div className="my-1 p-2 p2">
							<h3>Why Choose RR?</h3>
							<p>All-in-one: Fairy Tale,Drama, Action & Adventure, Mystery & Thriller, Biographics
								&
								History ,Fantasy ,Horor etc.</p>
						</div>
						<div className="my-1 p-2 p2">
							<h3>Join-Us</h3>
							<p>We invite you be a part of RR. <br/>
								Let's all become Bookworm....</p>
						</div>
					</div>

					<div className="col-6   ">
						<div className=" d-flex justify-content-end m-0 p-0  ">
							<img src={library} width="850px" height="500px" className="rounded-5"/>
						</div>
					</div>
				</div>
			</div>
		</section>


	</>
);
}
export default About;