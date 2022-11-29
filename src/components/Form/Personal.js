import React, {Component} from "react";

class Personal extends Component {
    constructor (props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            jobTitle: "",
            phone: "",
            email: "",
            address: "",
            personalDescription: "",
            editMode: true,
            };
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value})
    }

    handleTextareaChange = (event) => {
        this.setState({
            personalDescription: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.editMode === true){
        this.setState ({
            editMode: false 
        })
        } else {
            this.setState ({
                editMode: true
            })
        }
    }

    render() {

        if (this.state.editMode) {
        return (
            <div className="personalForm">
                <h2>{this.props.title}</h2>
                <form>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}  id="first_name" placeholder="First Name"></input>

                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  id="last_name" placeholder="Last Name"></input>

                    <label htmlFor="job_title">Job Title</label>
                    <input type="text" name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange}  id="job_title" placeholder="Job Title"></input>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} id="phone" pattern="[0-9]" placeholder="Phone Number"></input>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  id="first_name" placeholder="Email"></input>

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange}  id="address" placeholder="Address"></input>

                    <label htmlFor="description">Personal Description</label>
                    <textarea type="text" name="description" value={this.state.personalDescription} onChange={this.handleTextareaChange}  id="description" placeholder="Describe yourself here"></textarea>
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        )
        }
        else {
            return(
                <div className="personalSaved">
                    <div className="nameContainer">
                        <p>{this.state.firstName}</p>
                        <p>{this.state.lastName}</p>
                    </div>
                    <p className="address">{this.state.address}</p>
                    <p className="jobTitle">{this.state.jobTitle}</p>
                    <p className="phone">{this.state.phone}</p>
                    <p className="email">{this.state.email}</p>
                    <p className="personalDesc">{this.state.personalDescription}</p>
                    <button id="editBtn" onClick={this.handleSubmit}>Edit</button>
                </div>
            )
        }
    }
}

export default Personal