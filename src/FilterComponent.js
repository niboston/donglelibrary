import React from 'react';


class ResultTableComponent extends React.Component {

  render() {
    const {books} = this.props;
    return (
      <div>
        <h2>Filter</h2>
        <section className="my-4">
          <h4>Language</h4>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="language1"
                   name="inlineDefaultRadiosExample"/>
            <label className="custom-control-label" htmlFor="language1">English</label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="language2"
                   name="inlineDefaultRadiosExample"/>
            <label className="custom-control-label" htmlFor="language2">Hindi</label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="language3"
                   name="inlineDefaultRadiosExample"/>
            <label className="custom-control-label" htmlFor="language3">Spanish</label>
          </div>
        </section>

        <section className="my-4">
          <h4>Format</h4>
          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="format1"/>
            <label className="custom-control-label" htmlFor="format1">pdf</label>
          </div>

          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="format2"/>
            <label className="custom-control-label" htmlFor="format2">epub</label>
          </div>

          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="format3"/>
            <label className="custom-control-label" htmlFor="format3">txt</label>
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
            <label className="custom-control-label" htmlFor="source1">Something</label>
          </div>
          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="source2"/>
            <label className="custom-control-label" htmlFor="source2">Something-2</label>
          </div>

          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="source3"/>
            <label className="custom-control-label" htmlFor="source3">Something-3</label>
          </div>
        </section>
      </div>
    );
  }
}

export default ResultTableComponent;