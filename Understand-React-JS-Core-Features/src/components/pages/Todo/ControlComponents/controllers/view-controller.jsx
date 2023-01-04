import PropTypes from "prop-types";

import {Form} from "react-bootstrap";

const ViewController = ({view, changeView}) => (
    <div className="d-flex">
        <label for="list-view" className="mr-5">
        <Form.Check
            type="radio"
            id="list-view"
            name="view"
            value='list'
            label="List View"
            className="d-inline-block"
            checked={view === 'list'}
            onChange={changeView}
          />
        </label>
        <label for="table-view" className="ml-5">
        <Form.Check
            type="radio"
            id="table-view"
            name="view"
            value='table'
            label="Table View"
            className="d-inline-block"
            checked={view === 'table'}
            onChange={changeView}
          />
        </label>
    </div>

)

ViewController.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}

export default ViewController