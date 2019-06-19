import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {!localStorage.token
            ? `Uncrypted`
            : `Uncrypted - ${props.userData.name}`}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                My Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/markets">
                Markets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/currencies">
                Buy Currencies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-portfolios">
                My Portfolios
              </Link>
            </li>
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/my-profile">
                My Profile
              </Link>
            </li> */}
            {!localStorage.getItem("token") ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => props.logout()}
                  to="/login">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
