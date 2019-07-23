import React from 'react';
import './Cart.css';
import {
    MDBModalBody,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from "mdbreact";

function Cart() {
    return (
		<div className="Cart">
            <MDBModalBody>
                <div>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="4">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text t
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
							<MDBCol md="4">
								<MDBCard>
									<MDBCardBody>
										<MDBCardTitle>Card title</MDBCardTitle>
										<MDBCardText>
											Some quick example text to build on the card title and make
											up the bulk of the card&apos;s content.
										</MDBCardText>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
							<MDBCol md="4">
								<MDBCard>
									<MDBCardBody>
										<MDBCardTitle>Card title</MDBCardTitle>
										<MDBCardText>
											Some quick example text to build on the card title and make
											up the bulk of the card&apos;s content.
										</MDBCardText>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </MDBModalBody>
        </div>
    );
}

export default Cart;
