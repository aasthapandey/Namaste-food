import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            //Never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h3>Location: {location}</h3>
        <h3>Contact: @aasthapandey</h3>
      </div>
    );
  }
}

export default UserClass;
