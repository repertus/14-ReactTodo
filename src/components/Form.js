import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Form extends React.Component {

    render() {
        return (
             <Grid>
                  <Row className="show-grid">
                       <Col sm={6} smOffset={2}>
                            Hello
                       </Col>
                       <Col sm={1}>
                            You
                       </Col>
                  </Row>
             </Grid>
        );
    }

}

export default Form;
