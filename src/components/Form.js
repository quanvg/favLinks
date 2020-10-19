import React, { Component, Fragment } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      URL: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onHandleSubmit(this.state);
  };

  render() {
    return (
      <Fragment>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="URL">URL</label>
          <input
            type="text"
            name="URL"
            value={this.state.URL}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.onFormSubmit}>Submit</button>
      </Fragment>
    );
  }
}
