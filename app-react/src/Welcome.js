import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name == "John" ? (
          <div>
            <p>Welcome, {this.props.name}</p>
            <Age age={7} />
          </div>
        ) : 
        (
          <div>
            <p>Welcome, {this.props.name}</p>
          </div>
        )
        }
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "User"
};