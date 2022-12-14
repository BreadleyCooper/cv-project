import React, { Component } from "react";
import uniqid from "uniqid"

class Education extends Component {
    constructor (props) {
        super(props)

        this.state = {
            education: {
                educationId: uniqid(),
                institution: "",
                location: "",
                qualification: "",
                subject: "",
                dateFrom: "",
                dateTo: "",
                },
            educations: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value;
        const name = target.name
        this.setState({
            education: {
                ...this.state.education,
                [name]: value,
                id: this.state.education.id
            }
        })
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.setState({
            educations: [...this.state.educations, this.state.education],
            education: {
                educationId: uniqid(),
                institution: "",
                location: "",
                qualification: "",
                subject: "",
                dateFrom: "",
                dateTo: "",
            }
        })
    }

    handleDelete = (id) => { //THIS ISNT WORKING
        this.setState({
            educations: this.state.educations.filter((education) => 
                education.educationId !== id
            )
        })
        this.render()
    }


    render() {
        return(
            <div className="educationForm">
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="institution">Institution Name</label>
                    <input type="text" name="institution" value={this.state.education.institution} onChange={this.handleChange}  id="institution" placeholder="Institution Name"></input>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" value={this.state.education.location} onChange={this.handleChange}  id="location" placeholder="Location"></input>

                    <label htmlFor="qualification">Qualification</label>
                    <input type="text" name="qualification" value={this.state.education.qualification} onChange={this.handleChange}  id="qualification" placeholder="Qualification"></input>
                
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" value={this.state.education.subject} onChange={this.handleChange}  id="subject" placeholder="Subject"></input>
                    
                    <div className="dateContainer">
                        <label htmlFor="dateFrom">From</label>
                        <input type="date" name="dateFrom" value={this.state.education.dateFrom} onChange={this.handleChange}  id="dateFrom" placeholder="From"></input>

                        <label htmlFor="dateTo">To</label>
                        <input type="date" name="dateTo" value={this.state.education.dateTo} onChange={this.handleChange}  id="dateTo" placeholder="To"></input>
                    </div>
                    <button id="eButton" type="submit">Add</button>
                </form>
                <div>
                    {this.state.educations.map((education, index) => {
                        return <div className="educationContainer" key={education.educationId}>
                            <div className="institution">{education.institution}</div>
                            <div className="eduLocation">{education.location}</div>
                            <div className="qualification">{education.qualification}</div>
                            <div className="dateFrom">From: {education.dateFrom}</div>
                            <div className="dateTo">To: {education.dateTo}</div>
                            <button id="delEduBtn" onClick={() => this.handleDelete(education.educationId)}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}


export default Education
