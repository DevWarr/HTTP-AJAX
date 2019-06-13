import React from "react";
import "./NewFriendForm.scss";

export default class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name:   "",
            age:    "",
            email:  ""
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

    submit = e => {
        e.preventDefault();
        if (this.state.name === "" || this.state.age === "" || this.state.email === "") {return}
        const friend = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
        }
        this.props.submit(friend);
    }

    render() {
        return (
            <form className="new-friend-form" onSubmit={this.submit}>
                <input
                    type=          "text"
                    name=          "name"
                    value=         {this.state.name}
                    placeholder=   "New Friend's name"
                    onChange=      {this.handleChanges}
                />
                <input
                    type=          "number"
                    name=          "age"
                    value=         {this.state.age}
                    min=           "0" 
                    max=           "120"
                    placeholder=   "New Friend's age"
                    onChange=      {this.handleChanges}
                />
                <input
                    type=          "email"
                    name=          "email"
                    value=         {this.state.email}
                    placeholder=   "New Friend's email"
                    onChange=      {this.handleChanges}
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}