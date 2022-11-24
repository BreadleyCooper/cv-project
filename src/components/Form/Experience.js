import React, {Component} from "react";

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experince: {
            position: "",
            company: "",
            location: "",
            dateFrom: "",
            dateTo: "",
            },
            experiences: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        const target = event.target
        const value = target.value;
        const name = target.name
        this.setState({[name]: value})
    }
    

    handleSubmit =(event) => {
        event.preventDefault();
        this.setState({
            experiences: this.state.experiences.concat(this.state.experince),
            position: "",
            company: "",
            location: "",
            dateFrom: "",
            dateTo: "",
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" value={this.state.position} onChange={this.handleChange}  id="position" placeholder="Position"></input>

                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" value={this.state.company} onChange={this.handleChange}  id="company" placeholder="Company"></input>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange}  id="location" placeholder="Location"></input>
                
                    <label htmlFor="dateFrom">From</label>
                    <input type="date" name="dateFrom" value={this.state.dateFrom} onChange={this.handleChange}  id="dateFrom" placeholder="From"></input>
                
                    <label htmlFor="dateTo">To</label>
                    <input type="date" name="dateTo" value={this.state.dateTo} onChange={this.handleChange}  id="dateTo" placeholder="To"></input>
                    <button type="submit">Add</button>
                </form>
            </div>

            
        )
    }
}

export default Experience