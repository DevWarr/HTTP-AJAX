import React from "react";

export default class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: "",
            age: "",
            email: ""
        }
    }

    handleChanges = e => {

        this.setState({
            [e.target.name]: e.target.value
        });
    } 


    render() {
        return (
            <form onSubmit={() => this.props.submit(this.state)}>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="New Friend's name"
                    onChange={this.handleChanges}
                />
                <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    min="0" max="120"
                    placeholder="New Friend's age"
                    onChange={this.handleChanges}
                />
                <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="New Friend's email"
                    onChange={this.handleChanges}
                />
                <button type="submit">Add New Friend</button>
            </form>
        );
    }
}