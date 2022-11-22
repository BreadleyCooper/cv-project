import React, { Component } from "react";

class Education extends Component {
    constructor (props) {
        super(props)

        this.state = {
            institution: "",
            location: "",
            qualification: "",
            subject: "",
            dateFrom: "",
            dateTo: "",
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value})
    }

    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <form>
                    <label htmlFor="institution">Institution Name</label>
                    <input type="text" name="institution" value={this.state.institution} onChange={this.handleChange}  id="institution" placeholder="Institution Name"></input>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange}  id="location" placeholder="Location"></input>

                    <label htmlFor="qualification">Qualification</label>
                    <input type="text" name="qualification" value={this.state.qualification} onChange={this.handleChange}  id="qualification" placeholder="Qualification"></input>
                
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange}  id="subject" placeholder="Subject"></input>

                    <label htmlFor="dateFrom">Location</label>
                    <input type="date" name="dateFrom" value={this.state.dateFrom} onChange={this.handleChange}  id="dateFrom" placeholder="From"></input>

                    <label htmlFor="dateTo">Location</label>
                    <input type="date" name="dateTo" value={this.state.dateTo} onChange={this.handleChange}  id="dateTo" placeholder="To"></input>

                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}


export default Education
