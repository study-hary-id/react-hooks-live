import React from "react";

export default class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Agata", location: "Nairobi" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ ...this.state, name: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ ...this.state, location: e.target.value });
  }

  render() {
    return (
      <section>
        <form autoComplete="off">
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </section>
          <section>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
          </section>
        </form>
        <p>Hello {this.state.name} from {this.state.location}</p>
      </section>
    );
  }
}
