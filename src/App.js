import logo from './logo.svg';
import './App.css';
import {Nav,Navbar} from 'react-bootstrap';
import {Link, Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="primary" data-bs-theme="dark">
       
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/About">About</Link></Nav.Link>
            <Nav.Link><Link to="/Users">Users</Link></Nav.Link> 
          </Nav>
       
      </Navbar>
     <Routes>
     <Route Component={About} path="/about"></Route>
      <Route Component={Users} path="/users"></Route>
      <Route Component={Home} path="/"></Route>
     </Routes>
      
      </Router>
    </div>
  );
}

export default App;
