import React from "react";
import "./FriendUpdateable";

export default class FriendUpdateable extends React.Component {
    /**Props:
     * .friend
     * .delete
     * .submit
     */
    constructor(props) {
        super(props);
        this.state = {
            leftText:    "UPDATE",
            leftFunc:    this.update,

            rightText:   "DELETE",
            rightFunc:   this.delete,

            name:        this.props.friend.name,
            age:         this.props.friend.age,
            email:       this.props.friend.email,
            readOnly:    true
        }
    }

    /**Initially, each card is read-only.
     * Once we click "UPDATE", then functionality opens up.
     * Our text changes from UPDATE and DELETE
     * to CANCEL and SUBMIT.
     * Their corresponding functions change as well.
     */
    update = () => {
        this.setState({
            leftText:  "CANCEL",
            leftFunc:  this.cancel,

            rightText:  "SUBMIT",
            rightFunc:  this.submit,

            readOnly:   false
        })
    }

    delete = () => {
        this.props.delete(this.props.friend.id)
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

    /**Don't want to save your changes?
     * Hit cancel!
     * Everything is then reset back to normal.
     */
    cancel = () => {
        this.setState({
            leftText:   "UPDATE",
            leftFunc:   this.update,

            rightText:  "DELETE",
            rightFunc:  this.delete,

            name:       this.props.friend.name,
            age:        this.props.friend.age,
            email:      this.props.friend.email,
            readOnly:   true
        })
    }

    /**Much like adding a friend,
     * this form creates the friend obj
     * and sends it to FriendList.js to be PUT into the server.
     * This friend obj, however, includes the id.
     * This is so the server knows WHICH friend to update properly.
     */
    submit = e => {
        e.preventDefault();
        if (this.state.name === "" || this.state.age === "" || this.state.email === "") {return}

        // Create a new friend obj with updated info
        const friend = {
            id:      this.props.id,
            name:    this.state.name,
            age:     Number(this.state.age),
            email:   this.state.email
        }

        // Reset our buttons and what they do
        this.setState({
            leftText:   "UPDATE",
            leftFunc:   this.update,

            rightText:  "DELETE",
            rightFunc:  this.delete,

            readOnly:   true
        })

        // Submit our changes to FriendList.js
        this.props.submit(friend);
    }


    render() {
        return (
            <form className="friend-card">
                
                <div className="top-row">

                    <span 
                        className="hover" 
                        onClick={this.state.leftFunc}
                    >{this.state.leftText}</span>

                    <input
                        type=          "text"
                        name=          "name"
                        value=         {this.state.name}
                        placeholder=   "New Friend's name"
                        onChange=      {this.handleChanges}
                        readOnly=      {this.state.readOnly}
                    />

                    <span 
                        className="hover" 
                        onClick={this.state.rightFunc}
                    >{this.state.rightText}</span>

                </div> {/* top-row */}

                <ul>

                    <li>
                        <span>AGE: </span>
                        <input
                            type=          "number"
                            name=          "age"
                            value=         {this.state.age}
                            min=           "0" 
                            max=           "120"
                            placeholder=   "New Friend's age"
                            onChange=      {this.handleChanges}
                            readOnly=      {this.state.readOnly}
                        />
                    </li>

                    <li>
                        <span>EMAIL: </span>
                        <input
                            type=          "email"
                            name=          "email"
                            value=         {this.state.email}
                            placeholder=   "New Friend's email"
                            onChange=      {this.handleChanges}
                            readOnly=      {this.state.readOnly}
                        />
                    </li>
                    
                </ul>
            </form>
        );
    }
}
