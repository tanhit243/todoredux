import React from "react";
import { Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/actions';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        // dispatches actions to add todo
        this.props.addTodo(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return (
            <div>
                <Input placeholder="add task" name="task" value={this.state.task} onChange={this.handleChange} />
                <Button primary onClick={this.handleClick} >Add Todo</Button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);

// export default AddTodo;