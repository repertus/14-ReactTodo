import React from 'react';
import {Table} from 'react-bootstrap';

class TodoTable extends React.Component {

     render() {
          return (
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
          );
     }

}

export default TodoTable;
