import React, {Component} from 'react';
import './App.css';
import * as DBHelper from "./DBHelper";
import FilterComponent from "./FilterComponent";
import ResultTableComponent from "./ResultTableComponent";
import {MDBBtn, MDBModalFooter} from "mdbreact";

class HomeView extends Component {
  state = {
    books: [],
    query: {"text": "", "language": "en", "format": [], "categories": new Set()},
    modal: false
  };

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

  addAllBooks = () => {
    this.props.onCartAddAll(this.state.books);
  };

  removeAllBooks = () => {
    this.props.onCartRemoveAll(this.state.books);
  };

  queryCategories(category)
  {
    let query = this.state.query;

    if (query.categories.has(category))
      query.categories.delete(category);

    else
      query.categories.add(category);

    this.setState({query: query});
    console.log("QUERYYY"+query.categories)
  }

  render() {
    return (
      <div className="container">
        <div className="row my-5">
          {/* Side bar filter component */}
          <div className="col-md-3">
            <FilterComponent onCategorySelect = {(categories)=>this.queryCategories(categories)}/>
          </div>

          {/* Result list component */}
          <div className="col-md-9">
            {/* Search bar */}
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

            {/* Result table */}
            <ResultTableComponent books={this.state.books}
                                  cart={this.props.cart}
                                  onCartUpdate={(id) => this.props.onCartUpdate(id)}
                                  emptyResultString={""}/>

            {this.state.books && this.state.books.length > 0 &&
            <MDBModalFooter>
              <MDBBtn color="danger" disabled={this.state.books <= 0}
                      onClick={this.removeAllBooks}>Remove all</MDBBtn>
              <MDBBtn color="primary" disabled={this.state.books <= 0}
                      onClick={this.addAllBooks}>Add all</MDBBtn>
            </MDBModalFooter>}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;