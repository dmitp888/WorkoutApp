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
            <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route  path="/" exact component={About} />
            <Route  path="/about" exact component={About} />
            <Route  path="/home" exact component={Home} />
            <Route  path="/workout" exact component={Workout} />
            <Route   path="/chest" exact component={Chest} />
            <Route  path="/biceps" exact component={Biceps} />
            <Route  path="/shoulders"exact component={Shoulders} />
            <Route  path="/abs"exact component={Abs} />
            <Route  path="/quads" exact component={Quads} />
            
          </Wrapper>
          <Footer />
      </Router>
    );
  }
}



export default App;
