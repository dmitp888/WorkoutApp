import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Wrapper from "./components/Wrapper";
import Signup from './components/sign-up';
import Footer from "./components/Footer";
import LoginForm from './components/login-form';
import axios from 'axios';
import Chest from './pages/Chest';
import Biceps from './pages/Biceps';
import Shoulders from './pages/Shoulders';
import Abs from './pages/Abs';
import Quads from './pages/Quads';
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
          <Wrapper>
            {/* greet user if logged in: */}
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {this.state.loggedIn && <p>Welcome, {this.state.username}!</p>}
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route  path="/chest" component={Chest} />
            <Route exact path="/biceps" component={Biceps} />
            <Route exact path="/shoulders" component={Shoulders} />
            <Route exact path="/abs" component={Abs} />
            <Route exact path="/quads" component={Quads} />
          </Wrapper>
          <Footer />
      </Router>
    );
  }
}



export default App;
