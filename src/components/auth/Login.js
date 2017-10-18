import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                      <h3 className="title has-text-grey">Login</h3>
                      <p className="subtitle has-text-grey">Please login to proceed.</p>
                      <div className="box">
                        <figure className="avatar">
                          <img src="https://placehold.it/128x128" alt='' />
                        </figure>
                        <form>
                          <div className="field">
                            <div className="control">
                              <input className="input is-large" type="email" placeholder="Your Email" autofocus="" />
                            </div>
                          </div>

                          <div className="field">
                            <div className="control">
                              <input className="input is-large" type="password" placeholder="Your Password" />
                            </div>
                          </div>
                          <div className="field">
                            <label className="checkbox">
                              <input type="checkbox" />
                              Remember me
                            </label>
                          </div>
                          <a className="button is-block is-info is-large">Login</a>
                        </form>
                      </div>
                      <p className="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                      </p>
                    </div>
                  </div>
                </div>
          </section>
        )
    }
}

export default Login;
