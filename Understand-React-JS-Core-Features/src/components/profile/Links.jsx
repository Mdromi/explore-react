import Card from "react-bootstrap/Card";

function Links(props) {
  return (
    <>
    {props.social.map((value, i) => (
        <Card.Link key={i} href={value.link}>{value.item}</Card.Link>
    ))}
    </>
  );
}
export default Links;
