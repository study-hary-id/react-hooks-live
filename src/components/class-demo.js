import React from "react";

export default class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Agata" };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
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
        </form>

        <p>Hello, {this.state.name}!</p>
      </section>
    );
  }
}
