import React, {Component} from "react";
import uniqid from "uniqid"

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experience: {
                experienceId: uniqid(),
                position: "",
                company: "",
                location: "",
                dateFrom: "",
                dateTo: "",
            },
            experiences: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChange = (event) => {
        const target = event.target
        const value = target.value;
        const name = target.name
        this.setState({
            experience: {
                ...this.state.experience,
                [name]: value,
                id: this.state.experience.id
            }
        })
    }
    

    handleSubmit =(event) => {
        event.preventDefault();
        this.setState({
            experiences: [...this.state.experiences, this.state.experience],
            experience: {
                experienceId: uniqid(),
                position: "",
                company: "",
                location: "",
                dateFrom: "",
                dateTo: "",
            },
        })
    }

    handleDelete = (id) => { //THIS ISNT WORKING
        this.setState({
            experiences: this.state.experiences.filter((experience) => 
                experience.experienceId !== id
            )
        })
        this.render()
    }
    render() {
        return (
            <div className="experienceForm">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" value={this.state.experience.position} onChange={this.handleChange}  id="position" placeholder="Position"></input>

                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" value={this.state.experience.company} onChange={this.handleChange}  id="company" placeholder="Company"></input>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" value={this.state.experience.location} onChange={this.handleChange}  id="location" placeholder="Location"></input>

                    <div className="dateContainer">
                        <label htmlFor="dateFrom">From</label>
                        <input type="date" name="dateFrom" value={this.state.experience.dateFrom} onChange={this.handleChange}  id="dateFrom" placeholder="From"></input>
                    
                        <label htmlFor="dateTo">To</label>
                        <input type="date" name="dateTo" value={this.state.experience.dateTo} onChange={this.handleChange}  id="dateTo" placeholder="To"></input>
                    </div>
                    <button id="eButton"type="submit">Add</button>
                </form>
                <div>
                    {this.state.experiences.map((experience, index) => {
                        return <div className="experienceList" key={experience.experienceId}>
                            <div className="position">{experience.position}</div>
                            <div className="company">{experience.company}</div>
                            <div className="expLocation">{experience.location}</div>
                            <div className="dateFromExp">From: {experience.dateFrom}</div>
                            <div className="dateToExp">To: {experience.dateTo}</div>
                            <button className="delExpBtn" onClick={() => this.handleDelete(experience.experienceId)}>Delete</button>

                        </div>
                        
                    })}
                </div>
            </div>

            
        )
    }
         
}


export default Experience