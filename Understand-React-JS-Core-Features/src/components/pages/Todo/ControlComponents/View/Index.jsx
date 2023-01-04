import { Component } from "react";
import { Modal } from "react-bootstrap";
import shortid from "shortid";

import Controller from "../controllers/index";
import CreateTodoFrom from "../create-todo-form/index";
import ListView from "./ListView";
import TableView from "./TableView";

// Main view Component
class MainView extends Component {
  state = {
    todos: [
      {
        id: "dsada34",
        text: "main todo text",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "dsadd3a34",
        text: "Learning Nodejs",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "dsadd3aw34",
        text: "Learning React js",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoFrom: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoFrom: !this.state.isOpenTodoFrom,
    });
  };

  handleSearch = (value) => {
    this.setState({
      searchTerm: value,
    });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      isOpenTodoFrom: false,
      searchTerm: "",
      view: "list",
      filter: "all",
    });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;

    if (filter === "completed") return todos.filter((todo) => todo.isComplete);
    if (filter === "running") return todos.filter((todo) => !todo.isComplete);
    else return todos;
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <Controller
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          view={this.state.view}
          handleFilter={this.handleFilter}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
          changeView={this.changeView}
        />

        {this.getView()}
        <div>
          <Modal show={this.state.isOpenTodoFrom} onHide={this.toggleForm}>
            <Modal.Header closeButton>
              <Modal.Title>Create New TODO Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreateTodoFrom createTodo={this.createTodo} />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
export default MainView;
