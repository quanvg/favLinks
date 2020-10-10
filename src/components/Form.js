import React, { Component, Fragment } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    /*
            TODO - set initial state for link name and URL
    */
    this.state = {
      name: "",
      URL: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange = event => {
    /*
            TODO - Logic for changing state based on form changes
    */
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

    /*
            TODO - Logic for calling props to handle submission and setting state changes
    */
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
          {/* 
            TODO - Logic for returning a form element with labels and inputs for link name and URL
          */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="URL">URL</label>
          <input
            type="text"
            id="URL"
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

export default Form;
