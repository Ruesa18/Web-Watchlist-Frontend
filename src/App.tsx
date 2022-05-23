import logo from './logo.svg';
import './css/App.css';
import { NavBar } from './component/NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dashboard } from './component/Dashboard';
import { Login } from './component/Login';
import registerServiceWorker from "./serviceWorker";
import { MovieOverview } from './component/MovieOverview';
import { CreateMovie } from './component/CreateMovie';
import { FavoritesOverview } from './component/FavoritesOverview';

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
              <Route path='/MovieOverview' element={< MovieOverview />}></Route>
              <Route path='/Login' element={< Login />}></Route>
              <Route path='/create-movie' element={<CreateMovie />}></Route>
              <Route path='/Favorites' element={<FavoritesOverview/>}></Route>
          </Routes>
        </main>
        
        <footer>
          <a href="https://github.com/Ruesa18" target="_blank" rel="noreferrer">&copy; Sandro Rüfenacht</a>
        </footer>
      </Router>
  );
}

registerServiceWorker();

export default App;
