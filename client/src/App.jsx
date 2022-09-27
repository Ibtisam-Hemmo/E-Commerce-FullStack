import './App.css';
// import Axios from 'axios';
import React from 'react';
import SignIn from './components/Navbar/Signin';
import Signup from './components/Navbar/Signup';
import FilterBar from './components/Products/Sidebar';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <Signup />
      <SignIn />
      <FilterBar />
    </div>
  );
}

export default App;
