import React from 'react';
import {Row, Col, Table, Button, Checkbox} from 'react-bootstrap';

class TodoTable extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               todos: [
                    {key: 1, task: 'Wash the car', priority: "c_low", groupRefId: 1},
                    {key: 2, task: 'Move to new home', priority: "a_high", groupRefId: 1}
                    ]
          };
     }

     render() {
          var todoRows = this.state.todos.map(function (todo) {
               return(
                    <tr key={todo.key}>
                         <td>
                              <Button bsStyle="success">
                                   <span className="glyphicon glyphicon-pencil"></span>
                              </Button>
                              <Button bsStyle="danger">
                                   <span className="glyphicon glyphicon-remove"></span>
                              </Button>
                         </td>
                         <td>{todo.groupRefId}</td>
                         <td>{todo.task}</td>
                         <td>
                              <Checkbox>Task Completed</Checkbox>
                         </td>
                    </tr>
               );
          });

          return (
               <Row className="show-grid">
                    <Col sm={10} smOffset={1}>
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
                                   {todoRows}
                              </tbody>
                         </Table>
                    </Col>
               </Row>
          );
     }

}



export default TodoTable;
