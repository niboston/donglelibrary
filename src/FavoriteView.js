import React, {Component} from 'react';
import './App.css';
import ResultTableComponent from "./ResultTableComponent";
import {
  MDBBtn, MDBModal, MDBModalFooter, MDBModalHeader,
} from "mdbreact";
import * as DBHelper from "./DBHelper";

class FavoriteView extends Component {
  state = {
    isModalOpen: false,
    collection: {name: null, books: []}
  };

  toggleCollectionModal = (collectionName) => {
    if (collectionName) {
      let ctx = this;
      DBHelper.search({text: "*"}).then(function (books) {
        console.log(books);
        if (books) {
          if (ctx.props.cart.size > 0) {
            for (let book of books) {
              if (ctx.props.cart.has(book.id)) {
                book.isAdded = true;
              }
            }
          }
          let collection = {name: collectionName, books: books};
          ctx.setState({
            isModalOpen: true,
            collection: collection
          });
        }
      }).catch((e) => {
        console.log(e);
        alert("Failed to retrieve collection!");
      });
    } else {
      this.setState({
        isModalOpen: false,
        collection: {name: null, books: []}
      });
    }
  };

  addAllBooks = () => {
    this.props.onCartAddAll(this.state.collection.books);
  };

  removeAllBooks = () => {
    this.props.onCartRemoveAll(this.state.collection.books);
  };

  closeCollectionModal = () => {
    this.toggleCollectionModal(null)
  };

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">My Favorites</h1>
        <p className="text-center">Your favorite collections</p>
        <div className="row mt-4 mb-5">
          {/*Card deck*/}
          <div className="card-deck">
            <div className="card xs-4">
              <div className="view overlay">
                <img className="card-img-top"
                     src={process.env.PUBLIC_URL + "/assets/rocket.jpg"}
                     alt="Rocket ship"/>
                <a>
                  <div className="mask rgba-white-slight"/>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Sci-fi Literature</h4>
                <h6>Curated by <a>Jurels Neve</a></h6>
                <p>Language: English, Francais</p>
                <p className="card-text">Blast off with extraordinary tales featuring time travel, parallel universes, space exploration, extraterrestrial life and more!.</p>
                <button type="button" className="btn btn-primary btn-md"
                        onClick={() => this.toggleCollectionModal("Sci-fi Literature")}>Open collection
                </button>
              </div>
            </div>

            <div className="card xs-4">
              <div className="view overlay">
                <img className="card-img-top"
                     src={process.env.PUBLIC_URL + "/assets/childrens_books.jpg"}
                     alt="A stack of children's books"/>
                <a>
                  <div className="mask rgba-white-slight"/>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Hindi Children's Books</h4>
                <h6>Curated by <a>Bindi Soohk</a></h6>
                <p>Language: Hindi</p>
                <p className="card-text">यह सारांश हिंदी में है। मुझे कोई हिंदी नहीं आती इसलिए आपको इस बुरी तरह से अनुवादित पाठ को पढ़ना होगा।

इस भयानक वर्णन के लिए क्षमा करें, लेकिन यह सबसे अच्छा है जिसे आप यहाँ प्राप्त करने जा रहे हैं।</p>
                <button type="button" className="btn btn-primary btn-md"
                        onClick={() => this.toggleCollectionModal("Hindi Children's Books")}>Open collection
                </button>
              </div>
            </div>

            <div className="card xs-4">
              <div className="view overlay">
                <img className="card-img-top"
                     src={process.env.PUBLIC_URL + "/assets/danish.jpg"}
                     alt="A guy stands at the bow of a ship"/>
                <a>
                  <div className="mask rgba-white-slight"/>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Scandinavian History</h4>
                <h6>Curated by <a>Khang Vu</a></h6>
                <p>Language: Dansk, Suomalainen, Svenska</p>
                <p className="card-text">Dette resume er på dansk. Jeg kender ingen dansk. Så du bliver bare nødt til at læse denne dårligt oversatte tekst.
								Undskyld for denne forfærdelige beskrivelse, men dette er det bedste, du kommer hertil. Jeg kender heller ikke nogen af de andre sprog, der er anført i beskrivelsesfeltet. Tak.</p>
                <button type="button" className="btn btn-primary btn-md"
                        onClick={() => this.toggleCollectionModal("Scandinavian History")}>Open collection
                </button>
              </div>
            </div>
          </div>
        </div>

        <MDBModal isOpen={this.state.isModalOpen} toggle={this.closeCollectionModal} centered size="lg">
          <MDBModalHeader toggle={this.closeCollectionModal}>{this.state.collection.name}</MDBModalHeader>
          <ResultTableComponent books={this.state.collection.books}
                                cart={this.props.cart}
                                onCartUpdate={(id) => this.props.onCartUpdate(id)}
                                emptyResultString={"Collection result is empty!"}/>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.closeCollectionModal}>Close</MDBBtn>
            <MDBBtn color="danger" disabled={this.state.collection.books <= 0}
                    onClick={this.removeAllBooks}>Remove all</MDBBtn>
            <MDBBtn color="primary" disabled={this.state.collection.books <= 0}
                    onClick={this.addAllBooks}>Add all</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default FavoriteView;
