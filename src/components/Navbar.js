import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  state = {
    isOpen: false,
  };

  handleMobileMenuClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
        <nav className="navbar">
            <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <img src="images/ifg-logo-1.svg" alt='' />
              </a>
              <span
                className={this.state.isOpen ?
                  "navbar-burger burger is-active" :
                  "navbar-burger burger" }
                data-target="navbarMenu"
                onClick={this.handleMobileMenuClick}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu"
              className={this.state.isOpen ?
                "navbar-menu is-active" :
                "navbar-menu" }
            >
              <div className="navbar-end">
                <Link className="navbar-item" to='/'>
                  Home
                </Link>
                <Link className="navbar-item" to='/shop'>
                  Shop
                </Link>
                <Link className="navbar-item" to='/checkout'>
                  Checkout
                  <span className="icon">
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                  (0)
                </Link>
                <span className="navbar-item">
                  <a className="button is-white is-outlined is-small">
                    <span className="icon">
                      <i className="fa fa-github"></i>
                    </span>
                    <span>View Source</span>
                  </a>
                </span>
              </div>
            </div>
            </div>
        </nav>
    );
  }
};

export default Navbar;
