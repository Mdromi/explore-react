import { Component } from "react";
import { Modal } from "react-bootstrap";

import PollForm from "../poll-form/index";
import ParticipationForm from "./participate-form";
import ParticipatedUser from "./participate-user";

class MainContent extends Component {
  state = {
    openModal: false,
    filter: "all",
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  performFilter = (props) => {
    const { filter } = this.state;

    let options = props.options
    let opinions = props.opinions

    let found = options.find((opt) => {
      return filter === opt.value
    });

    let poll=[]
    if(found) {
      poll = opinions.filter(opn => {
        return found.id === opn.selectedOption
      })
      return poll
    }
   
    return options;
  };

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  userView = () => {
    let opinions = this.performFilter(this.props.poll);
    // console.log('Filter-opt ', opinions);
    return (
      <ParticipatedUser
        poll={this.props.poll}
        options={this.props.poll.options}
        opinions={(this.state.filter === 'all') ? this.props.poll.opinions : opinions}
        handleFilter={this.handleFilter}
      />
    );
  };

  render() {
    if (Object.keys(this.props.poll).length === 0) {
      return (
        <div>
          <h3>Welcome to my application</h3>
          <p>You Can create as many poll as you want</p>
        </div>
      );
    }

    return (
      <div>
        <h3>{this.props.poll.title}</h3>
        <p>{this.props.poll.description}</p>
        <br />
        <ParticipationForm
          poll={this.props.poll}
          getOpinion={this.props.getOpinion}
          toggleModal={this.toggleModal}
          deletePoll={this.props.deletePoll}
        />
        {this.userView()}
        <Modal show={this.state.openModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Poll</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PollForm
              poll={this.props.poll}
              isUpdate={true}
              submit={this.props.updatePoll}
              buttonValue="Update All"
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default MainContent;
