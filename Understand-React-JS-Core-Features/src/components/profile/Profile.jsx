import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Bio from "./Bio";
import Links from "./Links";
import Skills from "./Skills";

function Profile() {
  const me = {
    name: "Md Romi",
    title: "Lerner | Programmer | Developer",
    desc: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    social: [
      { item: "Facebook", link: "#" },
      { item: "Linkedin", link: "#" },
      { item: "Twitter", link: "#" },
    ],
    skills: ["C", "JavaScript", "Python"],
  };
  return (
    <Card style={{ width: "30rem", margin: "0 auto", marginTop: "3rem" }}>
      <Card.Body>
        <Bio name={me.name} title={me.title} />
        <Card.Text>{me.desc}</Card.Text>
        <>
          Skills:
          <Skills skills={me.skills} />
          <br />
          <br />
        </>
        <Links social={me.social} />
      </Card.Body>
    </Card>
  );
}
export default Profile;
