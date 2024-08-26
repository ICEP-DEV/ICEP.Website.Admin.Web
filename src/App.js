import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/Register';
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import Applicants from './screens/Applicants';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} /> */}
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/applicants' element={<Applicants />} />
        
      </Routes>
    </Router>
  );
}
export default App;
