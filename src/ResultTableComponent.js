import React from 'react';


class ResultTableComponent extends React.Component {

  render() {
    const {books} = this.props;
    return (
      <table className="table">
        <thead className="primary-color white-text">
        <tr>
          <th scope="col"/>
          <th scope="col">Book Name</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Add to cart</th>
        </tr>
        </thead>
        <tbody>
        {books && books.map((book, index) =>
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{book.BookName}</td>
            <td>{book.Author}</td>
            <td>{book.Category}</td>
            <td><h6><a onClick={() => this.props.onAdded(index)}>{book.isAdded ?
              <span className="badge badge-danger">"Remove"</span> :
              <span className="badge badge-success">"Add"</span>}</a></h6></td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

export default ResultTableComponent;