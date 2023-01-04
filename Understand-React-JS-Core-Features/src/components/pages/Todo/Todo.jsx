import { Container } from "react-bootstrap";
import MainTodo from './ControlComponents/index'

function Todo() {
  return (
    <Container>
      <div>
        <h1 className="display-4 text-center mb-5"> Stack Todos</h1>
      </div>
      <MainTodo />
    </Container>
  );
}
export default Todo;
