import React, { Component } from "react"
import Header from "./components/Header"
import Personal from "./components/Form/Personal";
import Skills from "./components/Form/Skills";
import Education from "./components/Form/Education";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <Header title="CV Creator App" />
      <Personal title="Personal Informaion" />
      <Skills title="Skills" skills=""/>
      <Education title = "Education" />
    </div>
    )
  };
}



export default App

{/* https://mirza-adnan.github.io/cv-builder/ */}