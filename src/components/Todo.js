import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions/actions';

class Todo extends React.Component {
    render() {
        let props = this.props;
        return(
            <List.Item>
                <List.Icon name={props.todo.completed ? 'check' : 'exclamation'} verticalAlign='middle' />
                <List.Content className={props.todo.completed ? 'text-underline' : ''}>
                    <List.Description as='a' onClick={() => props.toggleTodo(props.todo.id)} >{props.todo.content}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

export default connect(
    null,
    { toggleTodo }
)(Todo);