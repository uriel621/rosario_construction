import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    nav_menu(link){
        link.target.parentNode.parentNode.parentNode.className = 'collapse navbar-collapse';
        window.scrollTo(0, 0)  
    }

    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <Link style={{ 'fontSize':'18px'}} className="navbar-brand" to="/" onClick={ window.scrollTo(0, 0) } replace>Strong Construction & Service</Link>
                    
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={ this.nav_menu } replace>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={ this.nav_menu } replace>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery" onClick={ this.nav_menu } replace>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={ this.nav_menu } replace>Contact</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/login" replace='true'>Login</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;