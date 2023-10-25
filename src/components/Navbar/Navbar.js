import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            News
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://shivam-gupta-portfolio.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Me
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  // value={value}
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link class="dropdown-item" to="/">
                      general
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/business">
                      business
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/technology">
                      technology
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/science">
                      science
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/sports">
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/health">
                      health
                    </Link>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/entertainment">
                      entertainment
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
