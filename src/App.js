import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Referrals from "./screens/referrals";
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
  <Router>
    <BottomNavigation />
    <Routes>
    <Route path='/' element = {<Home />}/>
    <Route path='/shares' element = {<Referrals />}/>
    </Routes>
  </Router>
  );
}

export default App;
