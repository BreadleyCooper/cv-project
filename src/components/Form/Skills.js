import React, {useState} from "react";
import uniqid from "uniqid"

const Skills = (props) => {
    const [skill, setSkill] = useState(
        {text: "",
        id: uniqid()
        })
    const [skills, setSkills] = useState([])

    const handleChange = (event) => {
        setSkill({
                text: event.target.value,
                id: skill.id
        })
    };

    const onSubmit = (event) => {
        event.preventDefault()
        setSkills(
            skills.concat(skill),
            )
        setSkill ({
            text: "",
            id: uniqid()
        })
    };

    const handleDelete = (id) => {
        setSkills({
            skills: skills.filter((skill) =>
                skill.id !== id
            )
        })
    };

    return (
        <div>
            <h2>{props.title}</h2>
            <form className="skillForm" onSubmit={onSubmit}>
                <label htmlFor="skillInput">Skills</label>
                <input type="text" name="skillInput" value={skill.text} onChange={handleChange} id="skillInput"></input>
                <button type="submit">Add Skill</button>
            </form>
            <div>
                <ul>
                    {skills.map((skill) => {
                        return <div className="skillContainer" key={skill.id}>
                            <li>{skill.text}</li>
                            <button id="skillEditBtn" onClick={() => handleDelete(skill.id)}>Delete</button>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    )
}


// class Skills extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             skill: {text: "",
//                     id: uniqid()
//                     },
//             skills: []
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//         this.handleDelete = this.handleDelete.bind(this)
//     }

//     handleChange = (event) => {
//         this.setState({
//             skill: {
//                 text: event.target.value,
//                 id: this.state.skill.id
//             }
//         })
//     }

//         handleDelete = (id) => {
//         this.setState({
//             skills: this.state.skills.filter((skill) =>
//                 skill.id !== id
//             )
//         })
//         this.render()
//     }

//     onSubmit = (event) => {
//         event.preventDefault()
//         this.setState({
//             skills: this.state.skills.concat(this.state.skill),
//             skill: {
//                 text: "",
//                 id: uniqid()
//             },
//         })
//     }

//     handleDelete = (id) => {
//         this.setState({
//             skills: this.state.skills.filter((skill) =>
//                 skill.id !== id
//             )
//         })
//         this.render()
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <form className="skillForm" onSubmit={this.onSubmit}>
//                     <label htmlFor="skillInput">Skills</label>
//                     <input type="text" name="skillInput" value={this.state.skill.text} onChange={this.handleChange} id="skillInput"></input>
//                     <button type="submit">Add Skill</button>
//                 </form>
//                 <div>
//                     <ul>
//                         {this.state.skills.map((skill) => {
//                             return <div className="skillContainer" key={skill.id}><li>{skill.text}</li>
//                             <button id="skillEditBtn" onClick={() => this.handleDelete(skill.id)}>Delete</button>
//                             </div>
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

export default Skills