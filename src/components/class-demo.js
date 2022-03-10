import React from "react";

export default class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Agata",
      location: "Nairobi",
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    this.handleResize = this.handleResize.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    document.title = `${this.state.name} from ${this.state.location}`;
  }

  componentDidUpdate() {
    window.addEventListener("resize", this.handleResize);
    document.title = `${this.state.name} from ${this.state.location}`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    document.title = "React Hooks Live";
  }

  handleResize() {
    this.setState({
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
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
        <p>
          Hello {this.state.name} from {this.state.location} &nbsp;
          {this.state.resolution.width} x {this.state.resolution.height}
        </p>
      </section>
    );
  }
}
