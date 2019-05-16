import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Wrapper from "./components/Wrapper";
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import axios from 'axios'
import "./style.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <Router>
        <div>
        <Wrapper>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
            {/* greet user if logged in: */}
            {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>
            }
            <Route path="/signup" render={() => <Signup />} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}



export default App;
