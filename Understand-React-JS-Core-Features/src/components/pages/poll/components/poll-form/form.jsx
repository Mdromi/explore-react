import { Button, Form } from "react-bootstrap";

const MyForm = ({
  title,
  description,
  options,
  errors,
  buttonValue,
  handleChange,
  handleOptionChange,
  createOption,
  deleteOption,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label htmlFor="title">Title</Form.Label>
      <Form.Control
        name="title"
        id="title"
        type="text"
        placeholder="A Dummy Title"
        value={title}
        onChange={handleChange}
        isInvalid={errors.title ? true : false}
      />
      {errors.title && (
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      )}
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="description">Title</Form.Label>
      <Form.Control
        name="description"
        id="description"
        as="textarea"
        placeholder="Describe your poll.."
        value={description}
        onChange={handleChange}
        isInvalid={errors.description ? true : false}
      />
      {errors.description && (
        <Form.Control.Feedback type="invalid">
          {errors.description}
        </Form.Control.Feedback>
      )}
    </Form.Group>
    <Form.Group>
      <Form.Label className="mt-5 mb-3">
        Enter Option
        <span
          style={{
            marginLeft: "30px",
            background: "green",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => createOption()}
        >
          Add Option
        </span>
      </Form.Label>

      {options.map((opt, index) => (
        <div key={opt.id} className="d-flex my-2">
          <Form.Control
            value={opt.value}
            type="text"
            onChange={(e) => handleOptionChange(e, index)}
            isInvalid={errors.options && errors.options[index] ? true : false}
          />
          <Button
            variant="danger"
            disabled={options.length <= 2}
            className="ml-2"
            onClick={() => deleteOption(index)}
          >
            Delete
          </Button>
        </div>
      ))}
    </Form.Group>
    <Button variant="primary" type="submit">
      {buttonValue}
    </Button>
  </Form>
);

export default MyForm;
