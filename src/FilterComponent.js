import React from 'react';


class FilterComponent extends React.Component {

  searchCategory(event)
  {
    var index = event.nativeEvent.target.selectedIndex;
    this.props.onCategorySelect(event.nativeEvent.target[index].text)

  }

  render() {
    return (
      <div>
        <h2>Filter</h2>
        <section className="my-4">
          <h4>Language</h4>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" id="language1"
                   name="inlineDefaultRadiosExample" defaultChecked={true}/>
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
            <input type="checkbox" className="custom-control-input" id="format1" defaultChecked={true}/>
            <label className="custom-control-label" htmlFor="format1">pdf</label>
          </div>

          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="format2" defaultChecked={true}/>
            <label className="custom-control-label" htmlFor="format2">epub</label>
          </div>

          <div className="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" className="custom-control-input" id="format3" defaultChecked={true}/>
            <label className="custom-control-label" htmlFor="format3">txt</label>
          </div>
        </section>

        <section className="my-4">
          <h4>Categories</h4>
          <select className="custom-select" style={{height: "220px"}} multiple>
            <option value="2">Fiction</option>
            <option value="3">Poetry</option>
            <option value="4">Science</option>
            <option value="5">Economics</option>
            <option value="6">Psychology</option>
            <option value="7">History</option>
            <option value="8">Sociology</option>
            <option value="9">Mathematics</option>
            <option value="1">Geography</option>
            <option value="10">Computers</option>
          </select>
        </section>

      </div>
    );
  }
}

export default FilterComponent;