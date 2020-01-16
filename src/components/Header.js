import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import './Header/Header.css'

export default class Header extends Component {
    handleLogoutClick = () => {

    }

    handleLoginClick = () => {

    }


    render() {
        return (
            <div>
                <nav className = 'Header'>
                    <Link to='/'>
                        <h1>
                        Blogful Client
                        </h1>
                    </Link>
                </nav>

                <nav className='Header__logout'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
                </nav>

                <nav className='Header__register'>
                <Link
                  to='/register'>
                  Register
                </Link>
                </nav>

                <nav className='Header__login'>            
                <Link
                    onClick={this.handleLogInClick}
                  to='/login'>
                  Log in
                </Link>
                </nav>
            </div>
        )
    }
}

