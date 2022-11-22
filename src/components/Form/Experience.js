import React, {Component} from "react";

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: "",
            company: "",
            location: "",
            dateFrom: "",
            dateTo: "",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({...this.state, [event.target.name]: value})
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form>
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
                </form>
            </div>

            
        )
    }
}

export default Experience