import React from "react";
import axios from "axios";
import Friend from "../Friend/Friend";
import FriendUpdateable from "../FriendUpdateable/FriendUpdateable";
import NewFriendForm from "../NewFriendForm/NewFriendForm";
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
     * This way, our API call will return successful!
     */
    componentDidMount() { 
        axios
            .get("http://localhost:5000/friends")
            .then(res => {
                this.setState({ friendsArray: res.data })
            })
            .catch(err => {
                console.error("It didn't work!", err);
            })
    }

    /**Take the friend obj created in NewFriendForm.js
     * and post it to our server data.
     * If successful, also update state.
     * If unsuccessful, console.error.
     */
    addFriend = friend => {
        axios.post("http://localhost:5000/friends", friend)
            .then(res => {
                this.setState({ friendsArray: res.data });
            })
            .catch(err => {
                console.error("It didn't work!", err);
            })
    }

    /**Take the friend ID of the card we wish to delete,
     * and remove it from our server data.
     * If successful, also update state.
     * If unsuccessful, console.error.
     */
    deleteFriend = friendId => {
        console.log(friendId);
        axios.delete(`http://localhost:5000/friends/${friendId}`)
            .then(res => {
                this.setState({ friendsArray: res.data })
            })
            .catch(err => console.error("Oh noes!", err));
    }

    /**Take the updated friend obj from Friendupdateable.js
     * and PUT it to our server data. 
     * This should update the already existing friend data
     * with our edited info.
     * If successful, also update state.
     *  - server.js has a res.status(404),
     *  - so this function may return an error inside the 
     *  - .then() statement.
     *  - If this happens, there will be no console.log() .
     * If unsuccessful, console.error.
     */
    updateFriend = friend => {
        console.log(friend);
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => {
                this.setState({ friendsArray: res.data })
            })
            .catch(err => console.error("Oh noes!", err));
    }


    render() {
        return (
            <div className="main-container">
                <h1>The Friend Database</h1>

                <div className="friend-container">
                    {this.state.friendsArray.map(friendObj => {
                        return  <FriendUpdateable
                                    friend=   {friendObj} 
                                    key=      {friendObj.id} 
                                    delete=   {this.deleteFriend}
                                    submit=   {this.updateFriend}
                                />
                    })}
                </div> {/* friend-container */}

                <h2>Add Friend to Database</h2>
                <NewFriendForm submit={this.addFriend}/>

            </div>  /* main-container */
        );
    }
}