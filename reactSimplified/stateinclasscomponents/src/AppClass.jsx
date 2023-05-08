import React from "react"

export default class AppClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Chad",
      age: 46,
    }
  }

  render() {
    const handleClick = () => {
      this.setState({ name: "Sally" })
      this.setState((currentState) => {
        return { age: currentState.age + 1 }
      })
    }

    return (
      <h1 onClick={handleClick}>
        Hi {this.state.name} {this.state.age}
      </h1>
    )
  }
}

// In class components set state has to be set all in one object. Function components states can be sperate
