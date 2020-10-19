import React, { Component, Fragment } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      URL: "",
    };
  }

  render() {
    return (
      <Fragment>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.name} />
          <label htmlFor="URL">URL</label>
          <input type="text" name="URL" value={this.state.URL} />
        </form>
        <button>Submit</button>
      </Fragment>
    );
  }
}
