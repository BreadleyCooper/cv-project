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
        this.handleDelete = this.handleDelete.bind(this)
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

    handleDelete = (id) => {
        this.setState({
            skills: this.state.skills.filter((skill) =>
                skill.id !== id
            )
        })
        this.render()
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
                            return <div key={skill.id}><li>{skill.text}</li>
                            <button onClick={() => this.handleDelete(skill.id)}>Delete</button>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills