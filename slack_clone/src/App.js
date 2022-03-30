import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import MessageContainer from './components/messagecontainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MessageContainer></MessageContainer>
    </div>
  );
}

export default App;
