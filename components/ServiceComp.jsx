import fluid from '../assets/images/mri_1000x500.jpg'
import author1Img from '../assets/images/review-author-1.jpg'
import quoteImg from '../assets/images/quote.png'
import author2Img from '../assets/images/review-author-2.jpg'
import author3Img from '../assets/images/review-author-3.jpg'
import author4Img from '../assets/images/review-author-4.jpg'
import author5Img from '../assets/images/review-author-5.jpg'
import author6Img from '../assets/images/review-author-6.jpg'
import author7Img from '../assets/images/review-author-7.jpg'
import author8Img from '../assets/images/review-author-8.jpg'
import author9Img from '../assets/images/review-author-9.jpg'
import docImg from '../assets/images/doctor-1.jpg'
import doc2Img from '../assets/images/doctor-2.jpg'
import doc3Img from '../assets/images/doctor-3.jpg'
import doc4Img from '../assets/images/doctor-4.jpg'


const Service=()=>{
    return(
<>


			<div id="breadcrumb" className="division">
				<div className="container">
					<div className="row">						
						<div className="col">
							<div className=" breadcrumb-holder">

								
								<nav aria-label="breadcrumb">
								  	<ol className="breadcrumb">
								    	<li className="breadcrumb-item"><a href="demo-1.html">Home</a></li>
								    	<li className="breadcrumb-item"><a href="all-services.html">Our Services</a></li>
								    	<li className="breadcrumb-item active" aria-current="page">Service Single #1</li>
								  	</ol>
								</nav>

								
								<h4 className="h4-sm steelblue-color">Service Single #1</h4>

							</div>
						</div>
					</div> 
				</div>		
			</div>	




			<div id="service-page" className="wide-60 service-page-section division">
				<div className="container">


					<div className="row">
				 		<div className="col-xl-10 offset-xl-1">
				 			<div className="s1-page content-block text-center">

				 				
								<h3 className="h3-xl blue-color">Magnetic Resonance Imaging</h3>
								<h4 className="h4-md blue-color">Maecenas gravida porttitor nunc, magna luctus tempor viverra</h4>

							
								<p className="p-lg">Neque rhoncus ipsum tempor varius iaculis at luctus, neque rhoncus tempor varius cubilia</p>

				 				
								<p className="p-lg">Ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor
								   id viverra dolor iaculis luctus bibendum luctus neque rhoncus ipsum tempor varius iaculis at
								   luctus neque rhoncus ipsum tempor varius cubilia laoreet augue vitae laoreet augue undo cubilia 
								   feugiat suscipit emper lacus
								</p>

				 			</div>
				 		</div>
				 	</div>  


				 	
				 	<div className="row">
				 		<div className="col-md-12">
							<div className="content-block-img text-center">
								<img className="img-fluid" src={fluid} alt="content-image"/>
							</div>
						</div>
					</div>


					
					<div className="row">
				 		<div className="col-xl-10 offset-xl-1">
				 			<div className="s1-page content-block text-center mb-40">

				 				
								<p className="p-lg">Ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum 
								   auctor id viverra dolor iaculis luctus bibendum luctus neque rhoncus ipsum tempor varius 
								   iaculis at luctus  neque rhoncus ipsum tempor varius cubilia laoreet augue vitae laoreet 
								   augue undo cubilia feugiat suscipit emper lacus cursus
								</p>

								
								<p className="p-lg">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo 
								   integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum
								   vitae laoreet augue posuere and curae integer congue leo metus mollis primis and mauris 
								   iaculis luctus bibendum neque
								</p>

								
								<a href="appointment.html" className="btn btn-md btn-blue blue-hover">Book an Appointment</a>

								
								<h4 className="h4-lg">Service Cost: <span className="blue-color">$145.00</span></h4>
								<h5 className="h5-md">Duration: 0h 23m</h5>

				 			</div>
				 		</div>

				 	</div>  


				</div>	
			</div>	




			<section id="reviews-2" className="bg-lightgrey wide-100 reviews-section division">
				<div className="container">


					
					<div className="row">	
						<div className="col-lg-10 offset-lg-1 section-title">		

							
							<h3 className="h3-md steelblue-color">What Our Patients Say</h3>	

							
							<p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
							   blandit posuere ligula varius congue cursus porta feugiat
							</p>
										
						</div> 
					</div>	 
				
					
					
					<div className="row">
						<div className="col-md-12">					
							<div className="owl-carousel owl-theme reviews-holder">

						
								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>	

										
										<div className="testimonial-avatar">
											<img src={author1Img} alt="testimonial-avatar"/>
										</div>
																
									
										<p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit
										   magna undo tempus aliquet porta vitae
										</p>	

										
										<div className="review-author">
											<h5 className="h5-sm">Scott Boxer</h5>	
											<span>Programmer</span>	
										</div>							
																
									</div>						
								</div>	
						
						
								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>	

										
										<div className="testimonial-avatar">
											<img src={author2Img} alt="testimonial-avatar"/>
										</div>
																
										
										<p>Mauris donec ociis magnisa a sapien etiam sapien congue augue egestas et ultrice
										   vitae purus diam integer congue magna ligula egestas
										</p>										

									
										<div className="review-author">
											<h5 className="h5-sm">Penelopa Peterson</h5>	
											<span>Project Manager</span>	
										</div>

									</div>						
								</div>	
						
						
								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>	

										
										<div className="testimonial-avatar">
											<img src={author3Img} alt="testimonial-avatar"/>
										</div>
																
										
										<p>At sagittis congue augue an egestas magna ipsum vitae purus ipsum primis undo cubilia
										   laoreet augue	   
										</p>

										
										<div className="review-author">
											<h5 className="h5-sm">M.Scanlon</h5>	
											<span>Photographer</span>	
										</div>

									</div>						
								</div>	


								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>

										
										<div className="testimonial-avatar">
											<img src={author4Img} alt="testimonial-avatar"/>
										</div>	
																
										
										<p>Mauris donec ociis magnis sapien etiam sapien congue augue pretium ligula 
										   a lectus aenean magna mauris
										</p>

										
										<div className="review-author">
											<h5 className="h5-sm">Jeremy Kruse</h5>	
											<span>Graphic Designer</span>	
										</div>
					
									</div>						
								</div>	
								
								
								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>	

									
										<div className="testimonial-avatar">
											<img src={author5Img} alt="testimonial-avatar"/>
										</div>
																
										
										<p>An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum
										   primis in augue ulta ligula egestas
										</p>

										
										<div className="review-author">
											<h5 className="h5-sm">Evelyn Martinez</h5>	
											<span>Senior UX/UI Designer</span>	
										</div>						
																
									</div>						
								</div>	
								
							
								<div className="review-2">
									<div className="review-txt text-center">

									
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>

										
										<div className="testimonial-avatar">
											<img src={author6Img} alt="testimonial-avatar"/>
										</div>	
																
									
										<p>An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula
										   vitae and purus ipsum primis
										</p>

									
										<div className="review-author">
											<h5 className="h5-sm">Dan Hodges</h5>	
											<span>Internet Surfer</span>	
										</div>

									</div>						
								</div>	
								
								
								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>	

										
										<div className="testimonial-avatar">
											<img src={author7Img} alt="testimonial-avatar"/>
										</div>
																
										
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
										   and dolor blandit vitae
										</p>

										
										<div className="review-author">
											<h5 className="h5-sm">Isabel M.</h5>	
											<span>SEO Manager</span>	
										</div>

									</div>						
								</div>	


								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>	

									
										<div className="testimonial-avatar">
											<img src={author8Img} alt="testimonial-avatar"/>
										</div>
																
										
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
										   and dolor blandit vitae
										</p>

										
										<div className="review-author">
											<h5 className="h5-sm">Alex Ross</h5>	
											<span>Patient</span>	
										</div>							
																
									</div>						
								</div>	


								
								<div className="review-2">
									<div className="review-txt text-center">

										
										<div className="quote"><img src={quoteImg} alt="quote-img" /></div>

										
										<div className="testimonial-avatar">
											<img src={author9Img} alt="testimonial-avatar"/>
										</div>	
																
										
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
										   magna dolor neque vitae 								   
										</p>

										
										<div className="review-author">
											<h5 className="h5-sm">Alisa Milano</h5>	
											<span>Housewife</span>	
										</div>
						
									</div>						
								</div>	

							
							</div>
						</div>									
					</div>	
							
						
				</div>	  
			</section>	 




			<section id="doctors-1" className="wide-40 doctors-section division">
				<div className="container">


			 		
					<div className="row">	
						<div className="col-lg-10 offset-lg-1 section-title">		

							
							<h3 className="h3-md steelblue-color">Our Medical Specialists</h3>	

							
							<p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, 
							   blandit posuere ligula varius congue cursus porta feugiat
							</p>
										
						</div> 
					</div>	


					<div className="row">


						
						<div className="col-md-6 col-lg-3">
							<div className="doctor-1">								
														
								
								<div className="hover-overlay text-center"> 

									
									<img className="img-fluid" src={docImg} alt="doctor-foto"/>	
									<div className="item-overlay"></div>

									
									<div className="profile-link">
										<a className="btn btn-sm btn-tra-white black-hover" href="doctor-1.html" title="">View More Info</a>
									</div> 

								</div>	

										
								<div className="doctor-meta">

									<h5 className="h5-sm steelblue-color">Jonathan Barnes D.M.</h5>
									<span className="blue-color">Chief Medical Officer</span>

									<p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
									   augue luctus magna dolor luctus ipsum neque
									</p>

								</div>	

							</div>								
						</div>	
						
						
						
						<div className="col-md-6 col-lg-3">
							<div className="doctor-1">	
																						
								
								<div className="hover-overlay text-center"> 

									
									<img className="img-fluid" src={doc2Img} alt="doctor-foto"/>	
									<div className="item-overlay"></div>

											
									<div className="profile-link">
										<a className="btn btn-sm btn-tra-white black-hover" href="doctor-2.html" title="">View More Info</a>
									</div>

								</div>	

								
								<div className="doctor-meta">

									<h5 className="h5-sm steelblue-color">Hannah Harper D.M.</h5>
									<span className="blue-color">Anesthesiologist</span>

									<p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
									   augue luctus magna dolor luctus ipsum neque
									</p>

								</div>	

							</div>					
						</div>	
						
						
						
						<div className="col-md-6 col-lg-3">
							<div className="doctor-1">	
																						
								
								<div className="hover-overlay text-center"> 

									
									<img className="img-fluid" src={doc3Img} alt="doctor-foto"/>	
									<div className="item-overlay"></div>

										
									<div className="profile-link">
										<a className="btn btn-sm btn-tra-white black-hover" href="doctor-1.html" title="">View More Info</a>
									</div>

								</div>		
								
										
								<div className="doctor-meta">

									<h5 className="h5-sm steelblue-color">Matthew Anderson D.M.</h5>
									<span className="blue-color">Cardiology</span>

									<p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
									   augue luctus magna dolor luctus ipsum neque
									</p>

								</div>	

							</div>			
						</div>	
											
						
					
						<div className="col-md-6 col-lg-3">
							<div className="doctor-1">	
																					
								
								<div className="hover-overlay text-center"> 

									
									<img className="img-fluid" src={doc4Img} alt="doctor-foto"/>	
									<div className="item-overlay"></div>

									
									<div className="profile-link">
										<a className="btn btn-sm btn-tra-white black-hover" href="doctor-2.html" title="">View More Info</a>
									</div>

								</div>		
								
								
								<div className="doctor-meta">

									<h5 className="h5-sm steelblue-color">Megan Coleman D.M.</h5>
									<span className="blue-color">Neurosurgeon</span>

									<p className="p-sm grey-color">Donec vel sapien augue integer turpis cursus porta, mauris sed
									   augue luctus magna dolor luctus ipsum neque
									</p>

								</div>	

							</div>			
						</div>


					</div>	   


					
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="all-doctors mb-40">
								<a href="all-doctors.html" className="btn btn-blue blue-hover">Meet All Doctors</a>
							</div>
						</div>
					</div>


				</div>	  
			</section>	
</>
    )
}
export default Service