import React from "react";

export default class FriendUpdateable extends React.Component {
    /**Props:
     * .friend
     * .delete
     * .submit
     */
    constructor(props) {
        super(props);
        this.state = {
            leftText: "UPDATE",
            leftFunc: this.update,

            rightText: "DELETE",
            rightFunc: this.delete,

            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email,
            readOnly: true
        }
    }

    update = () => {
        this.setState({
            leftText: "CANCEL",
            leftFunc: this.cancel,

            rightText: "SUBMIT",
            rightFunc: this.submit,

            readOnly: false
        })
    }

    delete = () => {
        this.props.delete(props.friend.id)
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
            id: this.props.id,
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
        }

        // Reset our buttons and what they do
        this.setState({
            leftText: "UPDATE",
            leftFunc: this.update,

            rightText: "DELETE",
            rightFunc: this.delete,

            readOnly: true
        })

        // Submit our changes to FreindList.js
        this.props.submit(friend);
    }


    render() {
        return (
            <form className="friend-card">
                
                <div>

                    <span 
                        className="hover" 
                        onClick={this.state.leftFunc}
                    >UPDATE</span>

                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="New Friend's name"
                        onChange={this.handleChanges}
                        readOnly={this.state.readOnly}
                    />

                    <span 
                        className="hover" 
                        onClick={this.state.rightFunc}
                    >DELETE</span>

                </div>

                <ul>

                    <li>
                        <span>AGE: </span>
                        <input
                            type="number"
                            name="age"
                            value={this.state.age}
                            min="0" max="120"
                            placeholder="New Friend's age"
                            onChange={this.handleChanges}
                            readOnly={this.state.readOnly}
                        />
                    </li>

                    <li>
                        <span>EMAIL: </span>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="New Friend's email"
                            onChange={this.handleChanges}
                            readOnly={this.state.readOnly}
                        />
                    </li>
                    
                </ul>
            </form>
        );
    }
}
