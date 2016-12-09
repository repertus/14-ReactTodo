import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class TodoSorting extends React.Component {

     render() {
          return (
                    <Row className="show-grid">
                         <Col sm={2} smOffset={2}>
                              <Button bsStyle="primary">Order by highest priority</Button>
                         </Col>
                         <Col sm={2} smOffset={1}>
                              <Button bsStyle="primary">Order by lowest priority</Button>
                         </Col>
                         <Col sm={2} smOffset={1}>
                              <Button bsStyle="primary">Order Alphabetically</Button>
                         </Col>
                    </Row>
          );
     }

}

export default TodoSorting;
