import PropTypes from "prop-types";
import { Button, Form, Table } from "react-bootstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th>
      <Form.Check
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </th>
    <th>{todo.time.toDateString()}</th>
    <th>{todo.text}</th>
    <th>
      <Button
        className="ml-end"
        variant={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </th>
  </tr>
);

RowItem.protoTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

function TableView({ todos, toggleSelect, toggleComplete }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Todo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </Table>
  );
}

TableView.protoTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};
export default TableView;
