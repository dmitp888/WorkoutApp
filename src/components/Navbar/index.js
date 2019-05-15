import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import "./style.css";
import axios from 'axios'

//  Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class Navbar extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (

      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Fitness app
       </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/home"
                  className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                >
                  Home
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/workout"
                  className={window.location.pathname === "/workout" ? "nav-link active" : "nav-link"}
                >
                  Workout
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                >
                  Login
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                >
                  Signup
            </Link>
              </li>
            </ul>
          </div>
        </nav> */}
        {/* <header className="navbar App-header" id="nav-container"> */}
          <div className="col-4" >
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary">logout</span></Link>
              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/home" className="btn btn-link text-secondary">
                    <span className="text-secondary">home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">sign up</span>
                  </Link>
                  <Link to="/about" className="btn btn-link text-secondary">
                    <span className="text-secondary">about</span>
                  </Link>
                  <Link to="/workout" className="btn btn-link text-secondary">
                    <span className="text-secondary">workout</span>
                  </Link>
                </section>
              )}
          </div>
        {/* </header> */}
      </div>

    );

  }
}











//  return (
//    <nav className="navbar navbar-expand-lg navbar-light bg-light">
//      <Link className="navbar-brand" to="/">
//        Fitness app
//      </Link>
//      <div>
//        <ul className="navbar-nav">
//          <li className="nav-item">
//            <Link
//              to="/"
//              className={
//                window.location.pathname === "/" || window.location.pathname === "/about"
//                  ? "nav-link active"
//                  : "nav-link"
//              }
//            >
//              About
//            </Link>
//          </li>
//          <li className="nav-item">
//            <Link
//              to="/home"
//              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
//            >
//              Home
//            </Link>
//          </li>
//          <li className="nav-item">
//            <Link
//              to="/workout"
//              className={window.location.pathname === "/workout" ? "nav-link active" : "nav-link"}
//            >
//              Workout
//            </Link>
//          </li>
//        </ul>
//      </div>
//    </nav>
//  );


export default Navbar;
