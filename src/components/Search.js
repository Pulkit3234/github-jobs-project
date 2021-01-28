import React from "react";
import {Form, Col,Row} from "react-bootstrap";




const Search = ({params, onParamsChange}) => {
return (
    <Form className="mb-4">
  <Row>
    <Col>
    <Form.Label>Description</Form.Label>
      <Form.Control onChange={onParamsChange}  value={params.description} name="description" />
    </Col>
    <Col>
    <Form.Label>Location</Form.Label>
      <Form.Control onChange={onParamsChange}  value={params.location} name="location" />
    </Col>
   
  </Row>
</Form>
);

};

/*<Form.Group><Form.Check type="checkbox" label="Full Time Only" onChange={onParamsChange}  value={params.description} name="full_time" className="my-2" />
      </Form.Group> */

export default Search;