import React, {Component} from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {
  MDBBtn, MDBContainer, MDBModal, MDBModalFooter, MDBModalHeader, NavLink, MDBIcon
} from "mdbreact";
import ResultTableComponent from "./ResultTableComponent";
import HomeView from "./HomeView";
import ExploreView from "./ExploreView";
import FavoriteView from "./FavoriteView";

class App extends Component {
  state = {
    cart: new Map(),
    modal: false,
    navItem: ''
  };

  updateNavItem(item) {
    /**
     * Update the navItem state, which will essentially
     * activate/deactivate active items on the nav bar.
     *
     * @item: a url path of navigation item
     */
    this.setState({navItem: item});
  }

  toggleCartModal = () => {
    /**
     * Toggle the cart modal to view the list of items in cart.
     **/
    this.setState({
      modal: !this.state.modal
    });
  };

  onCartUpdate(book) {
    /**
     * This function has two operations. It either removes a book from cart
     * or add a book to cart.
     *
     * @book: selected book object
     */
    let cart = this.state.cart;

    if (cart.has(book.id)) {
      cart.delete(book.id);
    } else {
      cart.set(book.id, book);
    }

    this.setState({cart: cart});
  }

  onCartAddAll(books) {
    /**
     * Add all corresponding books in cart.
     *
     * @books: books to add
     */
    for (let book of books) {
      let cart = this.state.cart;
      cart.set(book.id, book);
      this.setState({cart: cart});
    }
  }

  onCartRemoveAll(books) {
    /**
     * Remove all corresponding books in cart.
     *
     * @books: books to remove
     */
    for (let book of books) {
      let cart = this.state.cart;
      cart.delete(book.id);
      this.setState({cart: cart});
    }
  }

  render() {
    return (
      <div>
        {/* Nav bar */}
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          {/* Brand button */}
          <NavLink className="navbar-brand" to="/" href="/">Dongle Library</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              {/* Home button */}
              <li className={"nav-item" + (this.state.navItem === '' ? " active" : "")}>
                <NavLink className="nav-link" to="/" href={'/'}
                         onClick={() => this.updateNavItem('')}>Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* Explore button */}
              <li className={"nav-item" + (this.state.navItem === '/explore' ? " active" : "")}>
                <NavLink className="nav-link" to="/explore" href={'/explore'}
                         onClick={() => this.updateNavItem('/explore')}>Explore
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* Favorite button */}
              <li className={"nav-item" + (this.state.navItem === '/favorite' ? " active" : "")}>
                <NavLink className="nav-link" to="/favorite" href={'/favorite'}
                         onClick={() => this.updateNavItem('/favorite')}>Favorite
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>

            <div className="navbar-right">
              <MDBContainer>
                {/* Cart button */}
                <MDBBtn onClick={this.toggleCartModal}>
                  <MDBIcon icon="shopping-cart" className={"mr-2"}/>Cart
                  <span className="badge badge-danger ml-2">
                    {this.state.cart.size > 100 ? "100+" : this.state.cart.size}
                  </span>
                </MDBBtn>

                {/* Cart modal */}
                <MDBModal isOpen={this.state.modal} toggle={this.toggleCartModal} centered size="lg">
                  <MDBModalHeader toggle={this.toggleCartModal}>Cart</MDBModalHeader>
                  <ResultTableComponent books={Array.from(this.state.cart.values())}
                                        cart={this.state.cart}
                                        onCartUpdate={(id) => this.onCartUpdate(id)}
                                        emptyResultString={"Your cart is empty!"}/>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggleCartModal}>Close</MDBBtn>
                    <MDBBtn color="primary" disabled={this.state.cart.size <= 0}>Download Now</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
            </div>
          </div>
        </nav>

        {/* Route to home page */}
        <Route exact path={['/', '/front-end']} render={() => (
          <HomeView cart={this.state.cart}
                    onCartUpdate={(id) => this.onCartUpdate(id)}
                    onCartAddAll={(books) => this.onCartAddAll(books)}
                    onCartRemoveAll={(books) => this.onCartRemoveAll(books)}/>
        )}/>

        {/* Route to explore page */}
        <Route exact path={'/explore'} render={() => (
          <ExploreView cart={this.state.cart}
                       onCartUpdate={(id) => this.onCartUpdate(id)}
                       onCartAddAll={(books) => this.onCartAddAll(books)}
                       onCartRemoveAll={(books) => this.onCartRemoveAll(books)}/>
        )}/>

        {/* Route to favorite page */}
        <Route exact path={'/favorite'} render={() => (
          <FavoriteView cart={this.state.cart}
                        onCartUpdate={(id) => this.onCartUpdate(id)}
                        onCartAddAll={(books) => this.onCartAddAll(books)}
                        onCartRemoveAll={(books) => this.onCartRemoveAll(books)}/>
        )}/>

      </div>
    );
  }
}

export default App;
