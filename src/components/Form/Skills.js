import React, {Component} from "react";
import uniqid from "uniqid"

class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skill: {text: "",
                    id: uniqid()
                    },
            skills: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            skill: {
                text: event.target.value,
                id: this.state.skill.id
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            skills: this.state.skills.concat(this.state.skill),
            skill: {
                text: "",
                id: uniqid()
            },
        })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="skillInput">Skills</label>
                    <input type="text" name="skillInput" value={this.state.skill.text} onChange={this.handleChange} id="skillInput"></input>
                    <button type="submit">Add Skill</button>
                </form>
                <div>
                    <ul>
                        {this.state.skills.map((skill) => {
                            return <li key={skill.id}>{skill.text}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills