import React from 'react';


class ResultTableComponent extends React.Component {

  render() {
    const books = this.props.books;
    const cart = this.props.cart;

    let emptyResultString = "Your list is empty!";
    if (this.props.emptyResultString)
      emptyResultString = this.props.emptyResultString;

    return (
      <div className="m-4">
        {(!books || books.length === 0) &&
        <p className="text-center w-responsive mx-auto mb-3">{emptyResultString}</p>}

        {books && books.length > 0 &&
        <div style={{height: "70vh", overflow: "auto"}}>
          <table id="dtVerticalScrollExample" className="table table-striped">
            <thead className="primary-color white-text">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {books && books.map((book, index) =>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{book.BookName}</td>
                <td>{book.AuthorName}</td>
                <td>{book.Category}</td>
                <td>
                  <h6><a onClick={() => this.props.onCartUpdate(book)}>{cart.has(book.id) ?
                    <span className="badge badge-danger">Remove</span> :
                    <span className="badge badge-success">Add to cart</span>}</a>
                  </h6>
                  <h6><a href={book.Links[0]} target="_blank"><span className="badge badge-info">Download</span></a>
                  </h6>
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>}
      </div>
    );
  }
}

export default ResultTableComponent;