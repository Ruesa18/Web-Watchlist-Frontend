import React from "react";
import { Link } from 'react-router-dom'

export class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/MovieOverview">Movies</Link>
                    </li>
                    <li>
                        <Link to="/Favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}