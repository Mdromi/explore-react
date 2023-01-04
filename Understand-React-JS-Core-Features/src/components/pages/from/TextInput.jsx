import PropTypes from "prop-types";
import { useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function TextInput({name, label, type, value, placeholder, onChange}) {
  function TextInputBox () {}
  
  TextInputBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  TextInputBox.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
  };

  return (
    <Form.Group className="mb-3">
    <Form.Label htmlFor={name}>{label}</Form.Label>
    <Form.Control
        // autoFocus="autoFocus"
      id={name}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e)=>onChange(e)}
    />
  </Form.Group>
    )

}




export default TextInput
