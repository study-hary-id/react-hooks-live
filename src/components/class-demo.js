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
      <div className="px-4">
        <div className="flex container mx-auto">
          <div className="component">
            <h1 className="mb-4">Class Demo</h1>
            <form autoComplete="off">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="field">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                />
              </div>
            </form>
            <p>
              <span className="text-output">
                Hello {this.state.name} from {this.state.location} &nbsp;
              </span>
              <strong>
                {this.state.resolution.width} x {this.state.resolution.height}
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
