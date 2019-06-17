import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Uncrypted
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                My Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/markets">
                Markets
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/currencies">
                Currencies
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
