import React, {Component} from 'react';
import './App.css';
import ResultTableComponent from "./ResultTableComponent";
import {
  MDBBtn, MDBContainer, MDBModal, MDBModalFooter, MDBModalHeader, NavLink,
} from "mdbreact";
import HomeView from "./HomeView";
import {Route} from "react-router-dom";
import ExploreView from "./ExploreView";

class App extends Component {
  state = {
    books: [],
    cart: new Map(),
    modal: false,
    navItem: ''
  };

  componentDidMount() {

  }

  updateBooks(books) {
    this.setState({books: books});
  }

  toggleCartModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onAdded(book) {
    let cart = this.state.cart;

    if (cart.has(book.id)) {
      cart.delete(book.id);
    } else {
      cart.set(book.id, book);
    }

    console.log(cart);
    this.setState({cart: cart});
  }

  updateNavItem(item) {
    this.setState({navItem: item});
  }

  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          <NavLink className="navbar-brand" to="/" href="/">Dongle Library</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              <li className={"nav-item" + (this.state.navItem === '' ? " active" : "")}>
                <NavLink className="nav-link" to="/" href={'/'}
                         onClick={() => this.updateNavItem('')}>Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className={"nav-item" + (this.state.navItem === '/explore' ? " active" : "")}>
                <NavLink className="nav-link" to="/explore" href={'/explore'}
                         onClick={() => this.updateNavItem('/explore')}>Explore
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
            <div className="navbar-right">
              <MDBContainer>
                <MDBBtn onClick={this.toggleCartModal}>Cart <span
                  className="badge badge-danger ml-2">{this.state.cart.size > 20 ? "20+" : this.state.cart.size}</span>
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggleCartModal} centered size="lg">
                  <MDBModalHeader toggle={this.toggleCartModal}>Cart</MDBModalHeader>
                  <ResultTableComponent books={Array.from(this.state.cart.values())}
                                        cart={this.state.cart}
                                        onAdded={(id) => this.onAdded(id)}/>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggleCartModal}>Close</MDBBtn>
                    <MDBBtn color="primary" disabled={this.state.cart.size <= 0}>Download Now</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
            </div>
          </div>
        </nav>

        <Route exact path={['/', '/front-end']} render={() => (
          <HomeView books={this.state.books}
                    cart={this.state.cart}
                    onAdded={(id) => this.onAdded(id)}
                    updateBooks={(books) => this.updateBooks(books)}/>
        )}/>

        <Route exact path={'/explore'} render={() => (
          <ExploreView cart={this.state.cart}
                       onAdded={(id) => this.onAdded(id)}/>
        )}/>

      </div>
    );
  }
}

export default App;