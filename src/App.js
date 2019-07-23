import React, {Component} from 'react';
import * as DBHelper from './DBHelper'
import './App.css';
import ResultTableComponent from "./ResultTableComponent";
import FilterComponent from "./FilterComponent";
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import Cart from "./Cart";

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    DBHelper.getAll().then((books) => {
      if (books) {
        this.setState({books: books});
        console.log(this.state.books)
      }
    }).catch((e) => {
      console.log(e);
    })
  }

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
                <input className="form-control" style={{width: "600px"}} type="search" placeholder="Search"
                       aria-label="Search"/>
                <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
              </form>
              <MDBContainer>
                <MDBBtn onClick={this.toggle}>Cart</MDBBtn>
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
              <div className="col-md-4">
                <FilterComponent/>
              </div>

              {/* Result list component */}
              <div className="col-md-8">
                <ResultTableComponent books={this.state.books}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;