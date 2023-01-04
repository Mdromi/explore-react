import PropTypes from "prop-types";
import { Button, Form, ListGroup } from "react-bootstrap";

// List Item Component
function ListItem({ todo, toggleSelect, toggleComplete }) {
  return (
    <ListGroup.Item as="li">
      {console.log(`value- ${todo.id}`)}
      <Form.Group className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-between align-items-center ">
          <Form.Check
            inline
            type="checkbox"
            id={todo.id}
            checked={todo.isSelect}
            onChange={() => toggleSelect(todo.id)}
          />
          <div className="">
            <h4>{todo.text}</h4>
            <p>{todo.time.toDateString()}</p>
          </div>
        </div>
        <Button
          className="ml-auto"
          variant={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </Form.Group>
    </ListGroup.Item>
  );
}

ListItem.protoTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup as="ul">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.protoTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
