import React from 'react';

class ResultTableComponent extends React.Component {
	onChange(e) {
		if (e.target.checked) {
			this.props.addToCart(this.props.books[e.target.value])
		}
		else {
			this.props.removeFromCart(this.props.books[e.target.value].id)
		}
	}

	render() {
		return (<table className="table">
			<thead className="primary-color white-text">
				<tr>
					<th scope="col">
						<input type="checkbox" id="select-all-checkbox"/>
						<div>Select all</div>
					</th>
					<th scope="col">#</th>
					<th scope="col">Book Name</th>
					<th scope="col">Author</th>
					<th scope="col">Category</th>
				</tr>
			</thead>
			<tbody>
				{
					this.props.books && this.props.books.map((book, index) => <tr key={index}>
						<td>
							<input type="checkbox" value={index} onChange={this.onChange.bind(this)}/>
						</td>
						<th scope="row">{index + 1}</th>
						<td>{book.BookName}</td>
						<td>{book.Author}</td>
						<td>{book.Category}</td>
					</tr>)
				}
			</tbody>
		</table>);
	}
}

export default ResultTableComponent;
