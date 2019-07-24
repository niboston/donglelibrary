import React from 'react';


class ResultTableComponent extends React.Component {

  render() {
    const {books} = this.props;
    return (
      <table className="table">
        <thead className="primary-color white-text">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Book Name</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
        </tr>
        </thead>
        <tbody>
        {books && books.map((book, index) =>
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{book.BookName}</td>
            <td>{book.Author}</td>
            <td>{book.Category}</td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

export default ResultTableComponent;