import React from 'react';
import {Row, Table} from 'react-bootstrap';

class TodoTable extends React.Component {

     render() {
          return (
               <Row className="show-grid">
                    <Table>
                         <thead>
                              <tr>
                                   <th>Edit / Delete</th>
                                   <th>Type</th>
                                   <th>Task</th>
                                   <th>Complete</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>

                              </tr>
                         </tbody>
                    </Table>
               </Row>               
          );
     }

}

export default TodoTable;
