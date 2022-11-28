import React, { Component } from "react"
import Header from "./components/Header"
import Personal from "./components/Form/Personal";
import Skills from "./components/Form/Skills";
import Education from "./components/Form/Education";
import Experience from "./components/Form/Experience";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="container">
        <div className="cvContainer">
        <Header title="CV Creator App" />
        <Personal title="Personal Information" />
        <Skills title="Skills" skills=""/>
        <Education title = "Education" />
        <Experience title = "Experience" /></div>
        
      </div>

    
    )
  };
}



export default App

{/* https://mirza-adnan.github.io/cv-builder/ */}