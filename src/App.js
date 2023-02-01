import TopBar from './components/topbar/TopBar';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <TopBar />
        <Routes>
          <Route path='/' exact element={<Homepage />} /> 
          <Route path='/post/:postId' element={<Single />} /> 
        </Routes>
      </Router>
  );
}

export default App;