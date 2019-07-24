import React, {Component} from 'react';
import './App.css';
import * as DBHelper from "./DBHelper";
import FilterComponent from "./FilterComponent";
import ResultTableComponent from "./ResultTableComponent";

class HomeView extends Component {
  state = {
    query: {"text": "", "language": "en", "format": [], "categories": []},
    modal: false
  };

  onSearchClicked(e) {
    e.preventDefault();
    let ctx = this, cart = this.props.cart;
    DBHelper.search(this.state.query).then(function (books) {
      console.log(books);
      if (books) {
        if (cart.size > 0) {
          for (let book of books) {
            if (cart.has(book.id)) {
              book.isAdded = true;
            }
          }
        }
        ctx.props.updateBooks(books);
      }
    });
  }

  updateQueryText = (queryText) => {
    let query = this.state.query;
    query.text = queryText;
    this.setState({query: query});
  };

  render() {
    return (
      <div className="container">
        <div className="row my-5">
          {/* Side bar filter component */}
          <div className="col-md-3">
            <FilterComponent/>
          </div>

          {/* Result list component */}
          <div className="col-md-9">
            <form className="form-inline mx-4 mb-4">
              <input className="form-control" style={{width: "100%"}} type="search"
                     aria-label="Search"
                     placeholder="Search by title or author"
                     value={this.state.query.text}
                     onChange={(event) => this.updateQueryText(event.target.value)}/>
              <button className="btn btn-primary btn-md ml-4 my-2 my-sm-0"
                      onClick={(e) => this.onSearchClicked(e)}>Search
              </button>
            </form>

            <ResultTableComponent books={this.props.books} onAdded={(id) => this.props.onAdded(id)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
