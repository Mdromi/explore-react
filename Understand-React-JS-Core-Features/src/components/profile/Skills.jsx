import Button from "react-bootstrap/Button";

function Skills(props) {
  return (
    <>
      {props.skills.map((value, i) => (
        <Button key={i} variant="secondary" size="sm" style={{ marginLeft: '.5rem' }}>
          {value}
        </Button>
      ))}
    </>
  );
}
export default Skills;
