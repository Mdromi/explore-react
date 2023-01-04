import { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import PollForm from "../poll-form/index";
import PollList from "./poll_list";

class Sidebar extends Component {
  state = {
    openModal: false,
  };

  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  render() {
    return (
      <div style={{ background: "#efefef", padding: "10px" }}>
        <div className="d-flex mb-5">
          <Form.Control
            type="search"
            value={this.props.searchTerm}
            placeholder={"Search.."}
            onChange={(e) => this.props.handleSearch(e.target.value)}
          />
          <Button variant="success" className="ml-2" onClick={this.toggleModal}>
            New
          </Button>
        </div>
        <h3>List of Polls</h3>
        <hr />
        <PollList polls={this.props.polls} selectPoll={this.props.selectPoll} />

        <Modal show={this.state.openModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create A New Poll</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PollForm submit={this.props.addNewPoll} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Sidebar;
