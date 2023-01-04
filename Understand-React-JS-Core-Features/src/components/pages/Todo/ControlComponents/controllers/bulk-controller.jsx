import PropTypes from "prop-types";

import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";

const BulkController = ({clearSelected, clearCompleted, reset}) => (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button variant="danger" onClick={clearSelected}>Clear Selected</Button>
        <Button variant="danger" onClick={clearCompleted}>Clear Completed</Button>
        <Button variant="danger" onClick={reset}>Reset</Button>
      </ButtonGroup>
    </ButtonToolbar>
)

BulkController.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default BulkController