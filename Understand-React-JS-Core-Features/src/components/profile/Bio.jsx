import Card from "react-bootstrap/Card";

function Bio({name, title}) {
    return(
        <>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        </>
    )
}
export default Bio