import './App.css';
import Axios from 'axios'
function App() {
  Axios('/data')
    .then((data) => console.log(data.data))
    .catch(console.log)
  return (
    <div className="App">

    </div>
  );
}

export default App;
