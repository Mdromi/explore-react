import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputHandler from "./InputHandler";
import TextInput from "./TextInput";

function FromControl({
  name,
  bio,
  dob,
  skill,
  checkbox,
  skills,
  handleChange,
  handleSubmit
}) {

  return (
    <Container>
      <Card style={{ width: "40rem", margin: "0 auto", marginTop: "3rem" }}>
        <Card.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <fieldset>
              <h4>{name && `Welcome, ${name}`}</h4>
              {console.log(skills)}
              <TextInput
                key={"name"}
                name="name"
                type="text"
                label="Enter Name"
                placeholder="your name"
                value={name}
                onChange={handleChange}
              />
              <div>
                <fieldset>
                  <Form.Group className="mb-3  mt-3">
                    <Form.Label htmlFor="disabledTextInput">Bio</Form.Label>
                    <textarea
                      className="form-control"
                      id="disabledTextInput"
                      placeholder="Tell me about your self"
                      name="bio"
                      value={bio}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <TextInput
                    key={"dob"}
                    name="dob"
                    type="date"
                    label="Your Date of Birth"
                    value={dob}
                    onChange={handleChange}
                  />
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">
                      select menu
                    </Form.Label>

                    <Form.Select
                      id="disabledSelect"
                      name="skill"
                      value={skill}
                      onChange={handleChange}
                    >
                      <option>select</option>
                      <option>C</option>
                      <option>PHP</option>
                      <option>Node Js</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="">Your Skills</Form.Label>
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="Java"
                      name="skills"
                      value={"Java"}
                      checked={skills.includes("Java")}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="Python"
                      name="skills"
                      value={"Python"}
                      checked={skills.includes("Python")}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="JavaScript"
                      name="skills"
                      value={"JavaScript"}
                      checked={skills.includes("JavaScript")}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="NodeJs"
                      name="skills"
                      value={"NodeJs"}
                      checked={skills.includes("NodeJs")}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="radio"
                      id="disabledFieldsetCheck"
                      label="Male"
                      name="gender"
                      value={"Male"}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      id="disabledFieldsetCheck"
                      label="Female"
                      name="gender"
                      value={"Female"}
                      onChange={(e) => handleChange(e)}
                    />
                    <Form.Check
                      type="radio"
                      id="disabledFieldsetCheck"
                      label="Other"
                      name="gender"
                      value={"Other"}
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group>


                  <TextInput
                    key="checkbox"
                    name="checkbox"
                    type="radio"
                    label="Privacy & Policy"
                    value={checkbox}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    onClick={() =>
                      console.log(name, bio, dob, skills, checkbox)
                    }
                  >
                    Submit
                  </Button>
                </fieldset>
              </div>
            </fieldset>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default FromControl;
