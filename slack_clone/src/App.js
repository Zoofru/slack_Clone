import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from './userContext'
import {useState} from 'react'
import HomePage from './pages/homepage';
import HangoutPage from './pages/hangoutpage';
import AnnouncmentsPage from './pages/announcementspage';
import FeedbackPage from './pages/feedbackpage';
import SocialMediaPage from './pages/socialmediapage';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path='/home'
              element={
                <HomePage></HomePage>
              }
            />

            <Route
              exact
              path='/announcement'
              element={
                <AnnouncmentsPage></AnnouncmentsPage>
              }
            />

            <Route
              exact
              path='/hangout'
              element={
                <HangoutPage></HangoutPage>
              }
            />

            <Route
              exact
              path='/feedback'
              element={
                <FeedbackPage></FeedbackPage>
              }
            />

            <Route
              exact
              path='/social-media'
              element={
                <SocialMediaPage></SocialMediaPage>
              }
            />
            
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
