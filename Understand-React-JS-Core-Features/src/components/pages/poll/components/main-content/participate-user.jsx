import { Button, ButtonGroup, ButtonToolbar, Table } from "react-bootstrap";

const FilterController = ({ options, handleFilter }) => (
  <ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="success" onClick={() => handleFilter("all")}>
        All
      </Button>
      {options.map((o) => (
        <Button
          variant="success"
          key={o.id}
          onClick={() => handleFilter(o.value)}
        >
          {o.value}
        </Button>
      ))}
    </ButtonGroup>
  </ButtonToolbar>
);

const RowItem = ({ opi, index, options, opinions }) => {

    console.log("options", options, opi);
  let value = options.find((opt) => opt.id === opi.selectedOption);

 

  if (!opinions) {
    return <p>There is no Participator</p>;
  } else {
    return (
        <tr>
          <th>{index + 1}</th>
          <th>{opi.name}</th>
          <th>{value.value}</th>
        </tr>
      );
  }
};

const RenderTable = (props) => (
  <>
    <thead>
      <tr>
        <th>#</th>
        <th>Participator</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      {console.log("options, opinions - ", props.opinions)}
      {props.opinions.map((opi, index) => (
        <RowItem
          key={opi.id}
          index={index}
          opi={opi}
          options={props.poll.options}
          opinions={props.opinions}
        />
      ))}
    </tbody>
  </>
);

function ParticipatedUser(props) {
    // {console.log("props - ", props.poll.totalVote)}
    if(props.poll.totalVote >=0) {
        return (
            <div className="my-5 mb-3">
              <FilterController
                options={props.options}
                handleFilter={props.handleFilter}
              />
              <Table>
              <RenderTable opinions={props.opinions} poll={props.poll} />
              </Table>
            </div>
          )
    } 
    else return (<h4 className="mt-5">There is no Participator</h4>)
}

export default ParticipatedUser;
