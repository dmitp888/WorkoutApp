import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/workout" component={Workout} />
      </Wrapper> 
       <Footer />
    </div>
  </Router>

  );
}

export default App;
