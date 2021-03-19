import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component=
        {Search} />
        <Route path='/Saved' exact component=
        {Saved} />
      </Switch>
    </Router>
    
  );
}

export default App;
