import React from 'react';
import './App.css';
import {MDBModalBody} from "mdbreact";

function Cart() {
    return (
    	<div className="Cart">
			<MDBModalBody>
				{/*(...)*/}


				<div>
					{/*Card deck*/}
					<div className="card-deck">
						{/*Card*/}
						<div className="card xs-4">

							{/*Card image*/}
							<div className="view overlay">
								<img src="assets/book.png" alt="Default book image" style={{
									height: '24px',
									width: '24px',
									}}/>
									<a href="#!">
										<div className="mask rgba-white-slight"></div>
									</a>
							</div>

							{/*Card content*/}
							<div className="card-body">


								<h4 className="card-title">Card title</h4>

								<p className="card-text">Some quick example text to build on the card title and make up
									the bulk
									of
									the card's content.</p>

							</div>

						</div>



						<div className="card mb-4">


							<div className="view overlay">
								<img className="card-img-top"
									 src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
									 alt="Card image cap"/>
									<a href="#!">
										<div className="mask rgba-white-slight"></div>
									</a>
							</div>


							<div className="card-body">


								<h4 className="card-title">Card title</h4>

								<p className="card-text">Some quick example text to build on the card title and make up
									the bulk
									of
									the card's content.</p>

								<button type="button" className="btn btn-light-blue btn-md">Read more</button>

							</div>

						</div>


					</div>


			</div>
			</MDBModalBody>
		</div>
	);
}

export default Cart;
