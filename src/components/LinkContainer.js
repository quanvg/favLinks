import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    /* 
        TODO - Create state object for storing favLinks
    */
    this.state = {
      favLinks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeLink = this.removeLink.bind(this);
  }

  handleSubmit = favLink => {
    /*
        TODO - Create logic to setState and add new favLink to favLinks array in state
    */
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

  removeLink = index => {
    /*
        TODO - Create logic to setState and removes an item favLink to favLinks array in state
    */
    this.setState(
      prevState => ({
        favLinks: prevState.favLinks.filter((_, i) => i !== index),
      }),
      () =>
        console.log(
          `removeLink() removed/updated state: ${JSON.stringify(
            this.state,
            null,
            4,
          )}`,
        ),
    );
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*
            TODO - Add Table Component
          */}
        <Table linkData={this.state.favLinks} removeLink={this.removeLink} />
        <br />

        <h3>Add New</h3>
        {/*
            TODO - Add Form Component
          */}
        <Form onHandleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
