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
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      // () =>
      //   console.log(
      //     `form's state updated: name:${this.state.name}\nURL: ${this.state.URL}`,
      //   ),
    );
  };

  onFormSubmit = event => {
    // to prevent page reload on form submit
    event.preventDefault();

    console.log(
      // `onFormSubmit invoked, updated state: ${Object.values(this.state)}`,
      `onFormSubmit invoked, passed state to LinkContainer's handleSubmit: ${JSON.stringify(
        this.state,
        null,
        4,
      )}`,
    );
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
