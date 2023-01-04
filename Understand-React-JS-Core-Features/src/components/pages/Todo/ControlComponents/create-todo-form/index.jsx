import { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import PropTypes from "prop-types";

class CreateTodoForm extends Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <div>
            <Form onSubmit={this.handleSubmit}>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="text">Enter Task</Form.Label>
                  <Form.Control
                    id="text"
                    type="text"
                    name="text"
                    value={this.state.text}
                    placeholder="Enter Your task"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="desc">Describe Task</Form.Label>
                  <Form.Control
                    id="desc"
                    as="textarea"
                    name="description"
                    value={this.state.description}
                    placeholder="Write some short description about your task"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button type="submit" >
                  Create Task
                </Button>
              </fieldset>
            </Form>
      </div>
    );
  }
}

CreateTodoForm.protoTypes = {
    createTodo: PropTypes.func.isRequired
}

export default CreateTodoForm;
