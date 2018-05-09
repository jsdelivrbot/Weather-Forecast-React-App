import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''}

        //Bind the context of this.
        //Take the existing function and bind it to this, then replace it.
        //Eliminates the need for a fat arrow function
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five day forecast for your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}