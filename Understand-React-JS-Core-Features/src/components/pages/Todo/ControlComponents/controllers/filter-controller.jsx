import PropTypes from "prop-types";

import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";

const FilterController = ({handleFilter}) => (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button onClick={() => handleFilter('all')}>All</Button>
        <Button onClick={() => handleFilter('running')}>Running</Button>
        <Button onClick={() => handleFilter('completed')}>Completed</Button>
      </ButtonGroup>
    </ButtonToolbar>
)

FilterController.propTypes = {
    handleFilter: PropTypes.func.isRequired
}

export default FilterController