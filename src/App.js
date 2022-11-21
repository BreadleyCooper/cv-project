import React, { Component } from "react"
import Header from "./components/Header"
import Personal from "./components/Form/Personal";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <Header title="CV Creator App" />
      <Personal title="Personal Informaion" />
    </div>
    )
  };
}



export default App