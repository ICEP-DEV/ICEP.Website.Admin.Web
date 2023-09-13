import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login/Login';
import SanitaryInpection from './screens/SanitaryInpection/SanitaryInpection';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/sanitaryInpection' element={<SanitaryInpection />} />
        
      </Routes>
    </Router> 
  );
}
export default App;
