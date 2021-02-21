import './App.css';
import Home from './Views/Home'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router to="/">
         <Home/>
      </Router>
    </div>
  );
}

export default App;
