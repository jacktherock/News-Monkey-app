import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    let location = useLocation();

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Monkey</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/business"> Business</Link> */}
                                <Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} aria-current="page" to="/business">Business</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/entertainment"> Entertainment</Link> */}
                                <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/health"> Health</Link> */}
                                <Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} aria-current="page" to="/health">Health</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/science"> Science</Link> */}
                                <Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} aria-current="page" to="/science">Science</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/sports"> Sports</Link> */}
                                <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} aria-current="page" to="/sports">Sports</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/technology"> Technology</Link> */}
                                <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
