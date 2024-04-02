import React from "react"

export class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      age: 0,
      name: "",
    }
  }

  componentDidMount() {
    console.log("Hi")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("Render")
    }

    if (prevState.name !== this.state.name || prevState.age !== this.state.age) {
      console.log(`My name is ${this.state.name} and I am ${this.state.age} years old.`)
      document.removeEventListener("click", this.handleDocumentClick)
      document.addEventListener("click", this.handleDocumentClick)
    }

    if (prevState.name !== this.state.name) {
      if(this.nameTimeOut != null) clearTimeout(this.nameTimeOut)
      this.nameTimeOut = setTimeout(() => {
        document.title = this.state.name
        console.log("This is delayed by one second")
      }, 1000)
    }
  }

  componentWillUnmount() {
    if(this.nameTimeOut != null) clearTimeout(this.nameTimeOut)
    console.log("Bye")
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age - 1 }
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState(state => {
              return { age: state.age + 1 }
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    )
  }
}
