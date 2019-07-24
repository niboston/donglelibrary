import React, {Component} from 'react';
import * as DBHelper from './DBHelper'
import './App.css';
import ResultTableComponent from "./ResultTableComponent";
import FilterComponent from "./FilterComponent";
import {MDBBtn, MDBContainer, MDBModal, MDBModalFooter, MDBModalHeader} from "mdbreact";
import Cart from "./Cart";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
	    books: [],
	    modal: false,
			cart_items: {}
		};
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
	}

	addToCart(item) {
		const items = this.state.cart_items
		items[item.id] = item
		this.setState({cart_items: items})

		console.log(this.state.cart_items)
	}

	removeFromCart(id) {
		const items = this.state.cart_items
		delete items[id]
		this.setState({cart_items: items})

		console.log(this.state.cart_items)
	}

  componentDidMount() {
  }

  updateQuery = (query) => {
    this.setState({query: query});
    const ctx = this;

    if (this.timeout)
      clearTimeout(this.timeout);

    DBHelper.search(query).then(function (books) {
      console.log(books);
      if (books) {
        ctx.setState({books: books});
      }
    })
  };

  toggleCart = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          <a className="navbar-brand" href="#">Dongle Library</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div className="navbar-right">
              <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control" style={{width: "600px"}} type="search"
                       aria-label="Search"
                       placeholder="Search by title or author"
                       value={this.state.query}
                       onChange={(event) => this.updateQuery(event.target.value)}/>
                <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
              </form>
              <MDBContainer>
                <MDBBtn onClick={this.toggleCart}>Cart</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggleCart} size="lg" centered>
                  <MDBModalHeader toggle={this.toggleCart}>Cart</MDBModalHeader>
                  <Cart cart_items={this.state.cart_items}/>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggleCart}>Close</MDBBtn>
                    <MDBBtn color="primary">Download Now</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row my-5">
            {/* Side bar filter component */}
            <div className="col-md-4">
              <FilterComponent/>
            </div>

            {/* Result list component */}
            <div className="col-md-8">
              <ResultTableComponent books={this.state.books} addToCart={(e) => this.addToCart(e)} removeFromCart={this.removeFromCart}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
