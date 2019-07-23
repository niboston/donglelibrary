import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

      <Link to="/cart/">Cart</Link>

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
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <input className="form-control" style={{width: "600px"}} type="search" placeholder="Search"
                   aria-label="Search"/>
            <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
          </form>
        </div>

      </nav>


      <div className="container">
        <div className="row my-5">
          <div className="col-md-4">
            <h2>Filter</h2>
            <section className="my-4">
              <h4>Language</h4>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="language1"
                       name="inlineDefaultRadiosExample"/>
                <label className="custom-control-label" for="language1">English</label>
              </div>

              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="language2"
                       name="inlineDefaultRadiosExample"/>
                <label className="custom-control-label" for="language2">Hindi</label>
              </div>

              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="language3"
                       name="inlineDefaultRadiosExample"/>
                <label className="custom-control-label" for="language3">Spanish</label>
              </div>
            </section>

            <section className="my-4">
              <h4>Format</h4>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" className="custom-control-input" id="format1"/>
                <label className="custom-control-label" for="format1">pdf</label>
              </div>

              <div className="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" className="custom-control-input" id="format2"/>
                <label className="custom-control-label" for="format2">epub</label>
              </div>

              <div className="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" className="custom-control-input" id="format3"/>
                <label className="custom-control-label" for="format3">txt</label>
              </div>
            </section>

            <section className="my-4">
              <h4>Categories</h4>
              <select className="custom-select" multiple>
                <option value="1">Fairy Tales</option>
                <option value="2">Math</option>
                <option value="3">Science</option>
                <option value="4">Arts & Music</option>
                <option value="5">Biographies</option>
                <option value="6">Business</option>
                <option value="7">Finance</option>
                <option value="8">Economics</option>
                <option value="9">Computers & Tech</option>
              </select>
            </section>

            <section className="my-4">
              <h4>Source</h4>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" className="custom-control-input" id="source1"/>
                <label className="custom-control-label" for="source1">Something</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" className="custom-control-input" id="source2"/>
                <label className="custom-control-label" for="source2">Something-2</label>
              </div>

              <div className="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" className="custom-control-input" id="source3"/>
                <label className="custom-control-label" for="source3">Something-3</label>
              </div>
            </section>
          </div>

          <div className="col-md-8">
            <table className="table">
              <thead className="primary-color white-text">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book Name</th>
                <th scope="col">Author</th>
                <th scope="col">Source</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
