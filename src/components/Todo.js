import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions/actions';

class Todo extends React.Component {
    handleClick = (id) => {
        console.log(id);
        this.props.toggleTodo(id);
    }

    render() {
        let props = this.props;
        return(
            <List.Item>
                <List.Icon name={props.todo.completed ? 'check' : 'exclamation'} verticalAlign='middle' />
                <List.Content>
                    <List.Description as='a' onClick={this.handleClick(props.todo.id)} className={props.todo.completed ? 'text-underline' : ''} >{props.todo.content}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

export default connect(
    null,
    { toggleTodo }
)(Todo);