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
import React from 'react';
import { UserModel } from './model/UserModel';

type UserState = {
  user: string
}

class App extends React.Component<{}, UserState> {

  constructor(props: Readonly<Object> | Object) {
    super(props);

    this.state = {
      user: ""
    }
  }

  render() {
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
                <Route path='/Login' element={< Login loginHandler={this.loginHandler} />}></Route>
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

  loginHandler(user: UserModel) {
    console.log(user);
  }
}

registerServiceWorker();

export default App;
