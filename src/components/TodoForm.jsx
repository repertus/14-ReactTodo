import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             task: '',
             priority: '',
             type: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
        console.log(event);
        this.setState({[event.target.name]: event.target.value});
   }

   handleSubmit(event) {
        alert('A task was submitted: ' + this.state.task);
        event.preventDefault();
   }

    render() {
        return (
                <Row className="show-grid">
                    <Col sm={6} smOffset={1}>
                        <form onSubmit={this.handleSubmit}>
                            <legend>Add Todo Items</legend>
                            <FormGroup>
                                <ControlLabel>Task</ControlLabel>
                                <FormControl
                                     type="text"
                                     name="task"
                                     value={this.state.task}
                                     onChange={this.handleChange}
                                     placeholder="Enter new task"
                              />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Priority</ControlLabel>
                                <FormControl
                                     componentClass="select"
                                     name="priority"
                                     value={this.state.priority}
                                     onChange={this.handleChange}
                                     placeholder="select"
                                     >
                                    <option value="select">-- Select --</option>
                                    <option value="a_high">A high priority item</option>
                                    <option value="b_medium">A medium priority item</option>
                                    <option value="c_low">A low priority item</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Type</ControlLabel>
                                <FormControl
                                     componentClass="select"
                                     name="type"
                                     value={this.state.type}
                                     onChange={this.handleChange}
                                     placeholder="select">
                                    <option value="select">-- Select --</option>
                                    <option value={1}>Home</option>
                                    <option value={2}>Work</option>
                                    <option value={3}>Personal</option>
                                    <option value={4}>School</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={1}>
                                    <Button type="submit" bsStyle="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
        );
    }

}

export default TodoForm;
