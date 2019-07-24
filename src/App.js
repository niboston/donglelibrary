import React, {Component} from 'react';
import * as DBHelper from './DBHelper'
import './App.css';
import ResultTableComponent from "./ResultTableComponent";
import FilterComponent from "./FilterComponent";
import {MDBBtn, MDBContainer, MDBModal, MDBModalFooter, MDBModalHeader} from "mdbreact";
import Cart from "./Cart";

class App extends Component {
  state = {
    query: {"text": "", "language": "en", "format": [], "categories": []},
    books: [],
    cart: new Set(),
    modal: false
  };

  componentDidMount() {

  }

  onSearchClicked(e) {
    e.preventDefault();
    let ctx = this;
    DBHelper.search(this.state.query).then(function (books) {
      console.log(books);
      if (books) {
        ctx.setState({books: books});
      }
    });
  }

  updateQueryText = (queryText) => {
    let query = this.state.query;
    query.text = queryText;
    this.setState({query: query});
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onAdded(index) {
    let books = this.state.books;
    let cart = this.state.cart;
    if (books[index].isAdded) {
      books[index].isAdded = false;
      cart.delete(books[index])
    } else {
      books[index].isAdded = true;
      cart.add(books[index]);
    }
    console.log(cart);
    this.setState({books: books, cart: cart});
  }

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
                       value={this.state.query.text}
                       onChange={(event) => this.updateQueryText(event.target.value)}/>
                <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
                        onClick={(e) => this.onSearchClicked(e)}>Search
                </button>
              </form>
              <MDBContainer>
                <MDBBtn onClick={this.toggle}>Cart <span
                  className="badge badge-danger ml-2">{this.state.cart.size > 20 ? "20+" : this.state.cart.size}</span>
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
                  <MDBModalHeader toggle={this.toggle}>Cart</MDBModalHeader>
                  <Cart/>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
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
            <div className="col-md-3">
              <FilterComponent/>
            </div>

            {/* Result list component */}
            <div className="col-md-9">
              <ResultTableComponent books={this.state.books} onAdded={(index) => this.onAdded(index)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;