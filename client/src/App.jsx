import './App.css';
import Axios from 'axios';
import React from 'react';
import SignIn from './components/Navbar/Signin';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
