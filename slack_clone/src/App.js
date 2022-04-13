import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { UserContext } from './userContext'
import {useState} from 'react'
import HomePage from './pages/homepage';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <HomePage></HomePage>
      </UserContext.Provider>
    </div>
  );
}

export default App;
