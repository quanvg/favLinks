import React, { Component, Fragment } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    /*
            TODO - set initial state for link name and URL
    */
    this.state = {
      name: "",
      url: "",
    };
  }

  handleChange = event => {
    /*
            TODO - Logic for changing state based on form changes
    */
    this.setState({
      name: event.target.value,
      url: event.target.value,
    });
  };

  onFormSubmit = event => {
    // to prevent page reload on form submit
    event.preventDefault();

    /*
            TODO - Logic for calling props to handle submission and setting state changes
    */
    this.props.handleSubmit(this.state);
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
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <label htmlFor="url">URL</label>
          <input type="text" id="url" name="url" />
        </form>
        <button onSubmit={this.onFormSubmit.bind(this)}>Submit</button>
      </Fragment>
    );
  }
}

export default Form;
