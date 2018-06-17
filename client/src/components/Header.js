import React from "react";
// import { Dropdown } from "react-bootstrap";
// import { smoothlyMenu } from "../layouts/Helpers";

class Header extends React.Component {
  toggleNavigation(e) {
    e.preventDefault();
    // $("body").toggleClass("mini-navbar");
    // smoothlyMenu();
  }

  render() {
    return (
      <div className="row border-bottom">
        <nav
          className="navbar navbar-static-top white-bg"
          role="navigation"
          style={{ marginBottom: 0, width: "100%" }}
        >
          <div className="navbar-header">
            <a
              className="navbar-minimalize minimalize-styl-2 btn btn-primary "
              onClick={this.toggleNavigation}
              href="#"
            >
              <i className="fa fa-bars" />{" "}
            </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <a href="#">
                <i className="fa fa-sign-out" /> Log out
                <faSignout />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
