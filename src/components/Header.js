import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images-and-elements/logo.png";

export const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar-style">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              id="logo"
              alt="MML logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link>
              <Link to="/watchlist">
                <span className="nav-link-style">Watchlist</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/watched">
                <span className="nav-link-style">Watched Movies</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/searchDB">
                <span className="nav-link-style">Search movie DB</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
