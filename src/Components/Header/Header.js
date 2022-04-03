import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="myNavbar">
            <nav className="navbar navbar-expand-lg  container">
                <div className="container-fluid ">
                    <Link className="logo" to="/">
                        FurnitureCorner
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto myNav">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "white"
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/reviews"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    REVIEWS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "white"
                                    }
                                >
                                    DASHBOARD
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "white"
                                    }
                                >
                                    BLOGS
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
