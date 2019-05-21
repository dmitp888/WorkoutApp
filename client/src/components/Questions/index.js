import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form"

function Questions() {
  return (
    <div className="form">
      Thank you for signing up! Please take a minute to answer the following questions:
<Form>
        <Form.Group controlId="age">
          <Form.Label>What is your age?</Form.Label>
          <Form.Control type="number" placeholder="age" />
        </Form.Group>
        <Form.Group controlId="height">
          <Form.Label>What is your height?(cm)</Form.Label>
          <Form.Control type="number" placeholder="height" />
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>What is your weight?(kg)</Form.Label>
          <Form.Control type="number" placeholder="weight" />
        </Form.Group>
        <Form.Group controlId="activity">
          <Form.Label>How often  do you work out? </Form.Label>
          <Form.Control as="select">
            <option>Often (5-7 days per week) </option>
            <option>Sometimes(3-4 days per week)</option>
            <option>Rarely or I'm new to this</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="improve">
          <Form.Label>What muscle group would you like to improve? </Form.Label>
          <Form.Control as="select">
            <option>Chest</option>
            <option>Shoulders</option>
            <option>Biceps</option>
            <option>Triceps</option>
            <option>Legs</option>
            <option>Back</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Questions;
