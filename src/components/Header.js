// https://mirza-adnan.github.io/cv-builder/ for reference 

import React, {Component} from "react";

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <a href="https://github.com/BreadleyCooper">Created by Jordan Ulmer</a>
            </div>
        )
    }
}

export default Header