import { ListGroup } from "react-bootstrap";

const PollList = (props) => {
  if (props.polls.length === 0) return <p>There is no poll</p>;

  return (
    <ListGroup as="ul">
      {props.polls.map((poll) => (
        <ListGroup.Item
        as="li"
        key={poll.id}
        onClick={() => props.selectPoll(poll.id)}
        style={{ cursor: "pointer" }}
        className="mb-1"
      >
        {poll.title.length > 30
          ? poll.title.substr(0, 30) + "..."
          : poll.title}
      </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PollList;
