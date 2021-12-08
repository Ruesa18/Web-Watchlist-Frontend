import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dashboard } from './Dashboard';
import { Login } from './Login';

function App() {
  return (
      <Router>
        <header>
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <NavBar />
        </header>
        
        <main>
          <Routes>
              <Route path='/' element={< Dashboard />}></Route>
              <Route path='/Dashboard' element={< Dashboard />}></Route>
              <Route path='/Login' element={< Login />}></Route>
          </Routes>
        </main>
        
        <footer>
          <a href="https://github.com/Ruesa18" target="_blank" rel="noreferrer">&copy; Sandro Rüfenacht</a>
        </footer>
      </Router>
  );
}

export default App;
