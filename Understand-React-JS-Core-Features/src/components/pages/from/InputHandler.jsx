import { useState } from "react";
import FromControl from "./FromControl";

 function InputHandler () {
    let [name, setName] = useState("");
    let [bio, setBio] = useState("");
    let [dob, setDob] = useState("");
    let [skill, setSkill] = useState("");
    let [checkbox, setCheckbox] = useState(false);
    let [skills, setSkills] = useState([]);
  
    function handleChange (event) {
      console.log(event.target.name);
      event.preventDefault();
      event.target.name === "name" && setName(event.target.value);
      event.target.name === "bio" && setBio(event.target.value);
      event.target.name === "dob" && setDob(event.target.value);
      event.target.name === "skill" && setSkill(event.target.value);
      event.target.name === "checkbox" && setCheckbox(!checkbox);
      if (event.target.name === "skills" && event.target.checked) {
        setSkills([...skills, event.target.value]);
      } else if (skills.length > 0) {
        const skill = skills.filter((skill) => skill !== event.target.value);
        setSkills(skill);
      }
    }
    function handleSubmit(event) {
      event.preventDefault();
      const data = {};
      data.name = name;
      data.bio = bio;
      data.dob = dob;
      data.skill = skill;
      data.checkbox = checkbox;
      data.skills = skills;
      console.log(`data:`, data);
      event.target.reset();
    }
    const data =  {name, bio, dob, skill, checkbox, skills, handleChange, handleSubmit}
    console.log('data', data);
    return (
      <FromControl {...data}/>
    )
}
  export default InputHandler