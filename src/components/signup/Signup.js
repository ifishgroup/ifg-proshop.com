import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <img src="images/ifg-logo-2.svg" alt='' />
            <h1 className="title">
              Coming Soon
            </h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </h2>
            <div className="box">

              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Enter your email" />
                </p>
                <p className="control">
                  <a className="button is-info">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
