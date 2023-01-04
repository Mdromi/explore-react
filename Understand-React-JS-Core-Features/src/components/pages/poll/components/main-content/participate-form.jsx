import { Component } from "react";

import { Button, Form } from "react-bootstrap";

class ParticipationForm extends Component {
  state = {
    name: "",
    selectedOption: "",
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors, isValid } = this.validate();

    if (isValid) {
      console.log('Check', this.props.poll.id);
      this.props.getOpinion({
        pollId: this.props.poll.id,
        name: this.state.name,
        selectedOption: this.state.selectedOption,
      });
      event.target.reset();
      this.setState({
        name: "",
        selectedOption: "",
        errors: {},
      });
    } else this.setState({ errors });
  };

  validate = () => {
    const errors = {};

    if (!this.state.name) errors.name = "Please Provide a name";
    else if (this.state.name.length > 20) errors.name = "Name Too Long";

    if (!this.state.selectedOption && this.state.selectedOption.length < 0)
      errors.selectedOption = "Please select a option";

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="d-flex mb-4" style={{ justifyContent: "space-between" }}>
          <h4>Options</h4>
          <div>
            <Button
              variant="warning"
              type="button"
              className="ml-2"
              onClick={this.props.toggleModal}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              type="button"
              className="mr-2"
              onClick={() => this.props.deletePoll(this.props.poll.id)}
            >
              Delete
            </Button>
          </div>
        </div>

        {this.props.poll.options.map((opt) => (
            <Form.Group
              className="my-2 d-flex"
              key={opt.id}
              style={{ justifyContent: "space-between" }}
            >
              <Form.Check
                name="selectedOption"
                id={opt.id}
                type="radio"
                value={opt.id}
                label={opt.value}
                onChange={this.handleChange}
                isInvalid={this.state.errors.selectedOption ? true : false}
              />
              {this.state.errors.selectedOption && (
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.selectedOption}
                </Form.Control.Feedback>
              )}
              <div>
                <span
                  style={{
                    background: "green",
                    color: "white",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className="ml-auto"
                >
                  {opt.vote}
                </span>
                <span
                  style={{
                    background: "orange",
                    color: "white",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className="ml-2"
                >
                  {this.props.poll.totalVote > 0
                    ? ((100 * opt.vote) / this.props.poll.totalVote).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
            </Form.Group>
        ))}
        <Form.Group className="my-3">
          <Form.Label htmlFor="name">Enter Your name</Form.Label>
          <Form.Control
            name="name"
            id={"name"}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            isInvalid={this.state.errors.name ? true : false}
          />
          {this.state.errors.name && (
            <Form.Control.Feedback type="invalid">
              {this.state.errors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit">Submit Your Option</Button>
      </Form>
    );
  }
}

export default ParticipationForm;
