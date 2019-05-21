import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Workout extends Component {
  state = {
    exersizes: [],
    musclegroup:""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ exersizes: res.data, musclegroup:""}))
      .catch(err => console.log(err));
  };
  render() {
    return (
     <div>
{this.state.exersizes.map(exersize=>
<h1>{exersize.musclegroup}</h1>



)}      
       
     </div>
    );
  }
}


export default Workout;
