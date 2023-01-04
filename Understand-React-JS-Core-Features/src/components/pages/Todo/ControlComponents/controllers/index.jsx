import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

import BulkController from "./bulk-controller";
import FilterController from "./filter-controller";
import SearchPanel from "./search-panel";
import ViewController from "./view-controller";

function Controller({
  term,
  view,
  changeView,
  handleSearch,
  toggleForm,
  handleFilter,
  clearSelected,
  clearCompleted,
  reset,
}) {
  return (
    <div>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />

      <Row className="mb-3 mt-3">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} changeView={changeView} />
        </Col>
        <Col md={{ size: 4 }} className="d-flex">
          <div className="ml-auto">
            <BulkController
              clearSelected={clearSelected}
              clearCompleted={clearCompleted}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

Controller.prototypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
