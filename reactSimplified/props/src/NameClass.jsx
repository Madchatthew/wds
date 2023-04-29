import React from "react"
import { render } from "react-dom"

export class NameClass extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>

        {this.props.children}
      </div>
    )
  }
}
