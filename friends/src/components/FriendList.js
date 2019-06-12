import React from "react";
import axios from 'axios';

export default class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friendData: []
        };
    }

    componentDidMount() {
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
        axios
            .get("http://localhost:5000/friends")
            .then(res => {
                console.log("It worked!");
            })
            .catch(err => {
                console.error("It didn't work!", err);
            })
    }


    render() {
        return (
            <div>Empty space</div>
        );
    }
}