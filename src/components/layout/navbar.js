import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">React User</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {/* <li classNameName="nav-item">
                                <a classNameName="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light" to="/users/add">Add user</Link>
                </div>
            </nav>


        </>
    )
}

export default Navbar
