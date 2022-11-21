import React, { Component } from "react"
import Header from "./components/Header"

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <Header title="CV Creator App" />
    </div>
    )
  };
}



export default App