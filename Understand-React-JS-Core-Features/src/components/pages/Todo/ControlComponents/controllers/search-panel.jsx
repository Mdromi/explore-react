import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchPanel = ({ term, handleSearch, toggleForm }) => (
  <div className="d-flex">
    <Form.Control
      className="mr-3"
      type="text"
      name="search"
      value={term}
      placeholder="Enter Search Term"
      onChange={(e) => handleSearch(e.target.value)}
    />
    <Button type="submit" onClick={toggleForm} variant="success">
      New
    </Button>
  </div>
);

SearchPanel.prototypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel