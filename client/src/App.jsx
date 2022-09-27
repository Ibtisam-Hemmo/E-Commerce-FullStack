import './App.css';
// import Axios from 'axios';
import React from 'react';
import SignIn from './components/Navbar/Signin';
import Signup from './components/Navbar/Signup';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <Signup />
      <SignIn />
    </div>
  );
}

export default App;
