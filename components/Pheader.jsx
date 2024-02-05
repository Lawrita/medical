import logoImg from '../assets/images/logo.png'
import blogImg from  '../assets/images/blog/latest-post-1.jpg'
import blog2Img from '../assets/images/blog/latest-post-2.jpg'
import blog3Img from '../assets/images/blog/latest-post-3.jpg'


const Pheader=()=>{
    return(
<>


			<header id="header" className="header">


			
			    <div className="wsmobileheader clearfix">
			    	<a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
			    	<span className="smllogo"><img src={logoImg} width="180" height="40" alt="mobile-logo"/></span>
			    	<a href="tel:123456789" className="callusbtn"><i className="fas fa-phone"></i></a>
			 	</div>


			 
			 	<div className="headtoppart bg-blue clearfix">
			    	<div className="headerwp clearfix">

			    		
			     		<div className="headertopleft">			     			
			        		<div className="address clearfix"><span><i className="fas fa-map-marker-alt"></i>121 King St,
			            		Melbourne, VIC 3000 </span> <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone"></i>(800)-569-7890</a>
			            	</div>
			     		</div>

			     	
					    <div className="headertopright">
					    	<a className="googleicon" title="Google" href="#"><i className="fab fa-google"></i> <span className="mobiletext02">Google</span></a>
					        <a className="linkedinicon" title="Linkedin" href="#"><i className="fab fa-linkedin-in"></i> <span className="mobiletext02">Linkedin</span></a>
					        <a className="twittericon" title="Twitter" href="#"><i className="fab fa-twitter"></i> <span className="mobiletext02">Twitter</span></a>
					        <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f"></i> <span className="mobiletext02">Facebook</span></a>
				      	</div>

				    </div>
			  	</div>	


			  	
			  	<div className="wsmainfull menu clearfix">
    				<div className="wsmainwp clearfix">

    					
    					<div className="desktoplogo"><a href="demo-1.html"><img src={logoImg}  width="180" height="40" alt="header-logo"/></a></div>

    					
      					<nav className="wsmenu clearfix">
        					<ul className="wsmenu-list">


        						
					        	<li aria-haspopup="true"><a href="#">Home <span className="wsarrow"></span></a>
					           		<ul className="sub-menu">
					              		<li aria-haspopup="true"><a href="demo-1.html">Home Concept #1</a></li>
					              		<li aria-haspopup="true"><a href="demo-2.html">Home Concept #2</a></li>
					              		<li aria-haspopup="true"><a href="demo-3.html">Home Concept #3</a></li>
					              		<li aria-haspopup="true"><a href="demo-4.html">Home Concept #4</a></li>
					              		<li aria-haspopup="true"><a href="demo-5.html">Home Concept #5</a></li>
					              		<li aria-haspopup="true"><a href="demo-6.html">Home Concept #6</a></li>
					              		<li aria-haspopup="true"><a href="demo-7.html">Home Concept #7</a></li>
					              		<li aria-haspopup="true"><a href="demo-8.html">Home Concept #8</a></li>
					              		<li aria-haspopup="true"><a href="demo-9.html">Home Concept #9</a></li>
					              		<li aria-haspopup="true"><a href="demo-10.html">Home Concept #10</a></li>
					              		<li aria-haspopup="true"><a href="demo-11.html">Home Concept #11</a></li>
					              		<li aria-haspopup="true"><a href="demo-12.html">Home Concept #12</a></li>
					           		</ul>
					          	</li>	


					          	
					          	<li aria-haspopup="true"><a href="#">Pages <span className="wsarrow"></span></a>
            						<div className="wsmegamenu clearfix">
             							<div className="container">
               								<div className="row">

               									
               									<ul className="col-lg-3 col-md-12 col-xs-12 link-list">
								                    <li className="title">Standard Pages:</li>
								                    <li><a href="about-us.html">About Us Page</a></li>
								                    <li><a href="who-we-are.html">Who We Are</a></li>
								                    <li><a href="all-services.html">Our Services</a></li>
								                    <li><a href="service-1.html">Service Single #1</a></li>
								                    <li><a href="service-2.html">Service Single #2</a></li>				                             
								                </ul>

								                
               									<ul className="col-lg-3 col-md-12 col-xs-12 link-list">
								                    <li className="title">Medical Pages:</li>
								                    <li><a href="all-departments.html">Our Departments</a></li>								                    
								                    <li><a href="department-single.html">Department Single</a></li>
								                    <li><a href="all-doctors.html">Meet the Doctors</a></li>
								                    <li><a href="doctor-1.html">Doctor's Profile #1</a></li>
								                    <li><a href="doctor-2.html">Doctor's Profile #2</a></li>
								                    <li><a href="timetable.html">Doctors Timetable</a></li>									                    
								                </ul>

								             
               									<ul className="col-lg-3 col-md-12 col-xs-12 link-list">
								                    <li className="title">Special Pages:</li>
								                    <li><a href="pricing-1.html">Pricing Packages #1</a></li>
								                    <li><a href="pricing-2.html">Pricing Packages #2</a></li>								                    
								                    <li><a href="appointment.html">Make an Appointment</a></li>
								                    <li><a href="faqs.html">FAQs Page</a></li>
								                    <li><a href="terms.html">Terms of Use</a></li> 
								                </ul>

								               
               									<ul className="col-lg-3 col-md-12 col-xs-12 link-list">
								                    <li className="title">Auxiliary Pages:</li>
								                    <li><a href="gallery.html">Our Gallery</a></li>
								                    <li><a href="blog-listing.html">Blog Listing Page</a></li>
								                    <li><a href="single-post.html">Single Blog Post</a></li>								                   
								                    <li><a href="contacts-1.html">Contact Us #1</a></li>
								                    <li><a href="contacts-2.html">Contact Us #2</a></li> 						
								                </ul>
								                
							                </div> 	
							            </div> 
							        </div> 	
							    </li>	


					          
					          	<li aria-haspopup="true"><a href="#">Half Menu <span className="wsarrow"></span></a>
					            	<div className="wsmegamenu clearfix halfmenu">
					              		<div className="container-fluid">
					                		<div className="row">

					                			
							                	<ul className="col-lg-6 col-md-12 col-xs-12 link-list">
							                    	<li className="title">For Patients:</li>
								                    <li><a href="#">Meet The Doctors</a></li>							                    
								                    <li><a href="#">Patient Info Sheets</a></li>
								                    <li><a href="#">Online Patients Portal</a></li>
								                    <li><a href="#">Patients Testimonials</a></li>
								                    <li><a href="#">Blog & Latest News</a></li>								                    
							                  	</ul>

							                  
								                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
								                    <li className="title">Quick Links:</li>
								                    <li><a href="#">Terms & Privacy Policy</a></li>
								                    <li><a href="#">Donor Privacy Policy</a></li>
								                    <li><a href="#">Workers Compensation</a></li>
								                    <li><a href="#">Insurance Information</a></li>
								                    <li><a href="#">After Hours Care</a></li>
								                </ul>

					                		</div>
					              		</div>
					            	</div>
					          	</li>	


					          
					          	<li aria-haspopup="true"><a href="#">Mega Menu <span className="wsarrow"></span></a>
            						<div className="wsmegamenu clearfix">
             							<div className="container">
               								<div className="row">


               								
               									<ul className="col-lg-3 col-md-12 col-xs-12 link-list">
								                    <li className="title">Quick Links:</li>
								                    <li><a href="#">For Referring Doctors</a></li>
								                    <li><a href="#">Terms & Privacy Policy</a></li>
								                    <li><a href="#">Donor Privacy Policy</a></li>								                    
								                    <li><a href="#">Patient Info Sheets</a></li>
								                    <li><a href="#">Online Patients Portal</a></li>
								                    <li><a href="#">Insurance Information</a></li>
								                    <li><a href="#">Patients Testimonials</a></li>
								                </ul>


								               
								                <div className="col-lg-5 col-md-12 col-xs-12">

								                	
								                    <h3 className="title">Featured News:</h3>

								                  
								                    <div className="fluid-width-video-wrapper"><img src="images/blog/featured-news.jpg" alt="featured-news" /></div>

								                    
								                    <h5 className="h5-xs"><a href="#">5 Benefits of integrative medicine</a></h5>
								                    <p className="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
								                       tempus feugiat dolor impedit magna purus at pretium gravida donec
								                    </p>

								                </div>


								                <div className="col-lg-4 col-md-12 col-xs-12">

								                	
                    								<h3 className="title">Latest News:</h3>

                    								
                    								<ul className="latest-news">
									
														
														<li className="clearfix d-flex align-items-center">

															
															<img className="img-fluid" src={blogImg} alt="blog-post-preview" />

															
															<div className="post-summary">
																<a href="single-post.html">Etiam sapien risus ante auctor tempus accumsan an empor ...</a>
																<p>43 Comments</p>
															</div>

														</li>
														
														
														<li className="clearfix d-flex align-items-center">

															
															<img className="img-fluid" src={blog2Img} alt="blog-post-preview" />

															
															<div className="post-summary">
																<a href="single-post.html">Blandit tempor a sapien ipsum, porta risus auctor justo ...</a>
																<p>38 Comments</p>
															</div>

														</li>
														
														
														<li className="clearfix d-flex align-items-center">

														
															<img className="img-fluid" src={blog3Img} alt="blog-post-preview" />

															
															<div className="post-summary">
																<a href="single-post.html">Cursus risus auctor tempus risus laoreet turpis auctor varius ...</a>
																<p>29 Comments</p>
															</div>

														</li>
													</ul>
                    							</div>	

								                
							                </div> 	
							            </div>  
							        </div>  
							    </li>	

							    
							   
							    <li className="nl-simple" aria-haspopup="true"><a href="#">Simple Link</a></li>

							   
							    <li className="nl-simple header-btn" aria-haspopup="true"><a href="appointment.html">Make an Appointment</a></li>


        					</ul>
        				</nav>	

    				</div>
    			</div>	


			</header>	
</>
    )
}

export default Pheader