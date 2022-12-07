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
  user: UserModel|null
}

class App extends React.Component<{}, UserState> {

  constructor(props: Readonly<Object> | Object) {
    super(props);

    this.state = {
      user: null
    }
  }

  render() {
    return (
        <Router>
          <header>
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <NavBar />
            <div>{this.state.user?.email}</div>
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

  loginHandler = (user: UserModel) => {
    console.log(user);
    //TODO save user data
    console.log(this.state);
    this.setState({user} as UserState);
    console.log("Success", this.state);
  }
}

registerServiceWorker();

export default App;
