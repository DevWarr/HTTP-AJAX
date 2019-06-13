import React from 'react';
import FriendList from './components/FriendList/FriendList';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import {Route} from 'react-router-dom';
import NewFriendForm from './components/NewFriendForm/NewFriendForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={FriendList} />
      <Route path="/add" component={NewFriendForm} />
    </div>
  );
}

export default App;
