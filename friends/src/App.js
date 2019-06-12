import React from 'react';
import FriendList from './components/FriendList';
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FriendList} />
    </div>
  );
}

export default App;
