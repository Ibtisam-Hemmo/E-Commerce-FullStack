import './App.css';
// import Axios from 'axios';
import React from 'react';
import SignIn from './components/Navbar/Signin';
import Signup from './components/Navbar/Signup';
import Cart from './components/Cart/Cart';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <Signup />
      <SignIn />
      <Cart/>
    </div>
  );
}

export default App;
