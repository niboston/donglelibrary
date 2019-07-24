import React, {Component} from 'react';
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

class Cart extends Component {
	constructor(props) {
		super(props);
		const dict_cart_items = this.props.cart_items
		const cart_items = Object.keys(dict_cart_items).map(function(key) {
				return dict_cart_items[key];
			})
		this.state = {
			cart_items: cart_items
		};
	}

	renderCart() {
		const items = this.state.cart_items
		let retVal = [];

		for (let i = 0; i < items.length; i += 3) {
			retVal.push(<MDBRow key={i}>
				{this.renderCartItem(i)}
				{this.renderCartItem(i + 1)}
				{this.renderCartItem(i + 2)}
			</MDBRow>)
		}
		return retVal;
	}

	renderCartItem(i) {
		const items = this.state.cart_items
		if (i >= items.length) {
			return (null);
		}

		return (<MDBCol md="4">
			<MDBCard>
				<button type="button" className="close cart-delete-button" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<MDBCardBody>
					<MDBCardTitle>{items[i].BookName}</MDBCardTitle>
					<MDBCardText>
						Some quick example text t
					</MDBCardText>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>)
	}

	render() {


		return (<div className="Cart">
			<MDBModalBody>
				<div>
					<MDBContainer>
						{
							this.renderCart()
						}
					</MDBContainer>
				</div>
			</MDBModalBody>
		</div>);
	}
}
export default Cart;
