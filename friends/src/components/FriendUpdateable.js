import React from "react";

export default class FriendUpdateable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftText: "UPDATE",
            leftFunc: this.update,
            
            rightText: "DELETE",
            rightFunc: this.delete,

            name: this.props.name,
            age: this.props.age,
            email: this.props.email,
        }
    }

    update = () => {

    }

    delete = () => {
        this.props.delete(props.friend.id)
    }


    render() {
        return (
            <div className="friend-card">
                <h3>
                <span className="hover" onClick={props.update}>UPDATE</span>
                    {props.friend.name}
                <span className="hover" onClick={() => props.delete(props.friend.id)}>DELETE</span>
                </h3>
                <ul>
                    <li>AGE:   {props.friend.age}</li>
                    <li>EMAIL: {props.friend.email}</li>
                </ul>
            </div>
        );
    }
}
