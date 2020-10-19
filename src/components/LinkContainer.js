import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

export default class LinkContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favLinks: [],
    };
  }

  handleSubmit = favLink => {
    this.setState(
      {
        favLinks: this.state.favLinks.concat(favLink),
      },
      () =>
        console.log(
          // "handleSubmit updated state favLinks:", this.state.favLinks,
          // `handleSubmit invoked, updated state: ${JSON.parse(
          //   JSON.stringify(this.state),
          // )}\n`,
          `handleSubmit invoked, updated state: ${JSON.stringify(
            this.state,
            null,
            4,
          )}\n`,
          this.state.favLinks,
        ),
    );
  };

  render() {
    return (
      <div>
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData={this.state.favLinks} removeLink={this.removeLink} />
        <br />
        <h3>Add New</h3>
        <Form onHandleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
