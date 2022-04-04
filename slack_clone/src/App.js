import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import MessageContainer from './components/messagecontainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { UserContext } from './userContext'
import {useState} from 'react'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <NavBar></NavBar>
        <MessageContainer></MessageContainer>
      </UserContext.Provider>
    </div>
  );
}

export default App;
