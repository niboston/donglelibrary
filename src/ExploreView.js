import React from 'react';
import './App.css';

function ExploreView() {
  return (
    <div className="container">
      {/*Card deck*/}
      <div className="card-deck">
        <div className="card xs-4">
          <div className="view overlay">
            <img className="card-img-top"
                 src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                 alt="Card image cap"/>
            <a href="#!">
              <div className="mask rgba-white-slight"/>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up
              the bulk
              of
              the card's content.</p>
            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>

        <div className="card xs-4">
          <div className="view overlay">
            <img className="card-img-top"
                 src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                 alt="Card image cap"/>
            <a href="#!">
              <div className="mask rgba-white-slight"/>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up
              the bulk
              of
              the card's content.</p>
            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>

        <div className="card xs-4">
          <div className="view overlay">
            <img className="card-img-top"
                 src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                 alt="Card image cap"/>
            <a href="#!">
              <div className="mask rgba-white-slight"/>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up
              the bulk
              of
              the card's content.</p>
            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreView;
