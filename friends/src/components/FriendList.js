import React from "react";
import axios from "axios";
import Friend from "./Friend";
import NewFriendForm from "./NewFriendForm";
import "./FriendList.scss";

export default class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friendsArray: []
        };
    }

    /**Link the axios call to the 
         * Server port you're listening on
         * - (In this case, port 5000)
         * Within the server.js file, find the .get() function,
         * and add that string to the end of the local host url.
         * In this case, we have
         * http://localhost:5000
         * WITH
         * /friends
         * This way, our API call will return successful
         */
    componentDidMount() { 
        axios
            .get("http://localhost:5000/friends")
            .then(res => {
                console.log(res);
                this.setState({ friendsArray:res.data })
            })
            .catch(err => {
                console.error("It didn't work!", err);
            })
    }

    addFriend = friend => {
        console.log(friend);
    }


    render() {
        return (
            <div className="main-container">
                <h1>The Friend Database</h1>
                <div className="friend-container">
                    {this.state.friendsArray.map(friendObj => {
                        return <Friend friend={friendObj} key={friendObj.id} />
                    })}
                </div>
                <h2>Add Friend to Database</h2>
                <NewFriendForm submit={this.addFriend}/>
            </div>
        );
    }
}