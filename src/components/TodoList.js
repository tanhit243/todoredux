import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import * as selector from '../redux/selectors';

class TodoList extends React.Component {
    
    render() {
        let todos = this.props.todos;
        return (    
            <List>
                {
                    todos && todos.length 
                    ?
                        todos.map((todo) => {
                            return <Todo todo={todo} key={`todo-${todo.id}`} />;
                        })  
                    :
                        "No todos, yay!"
                }

            </List>
        );
    }
}
/*
    We recommend encapsulating any complex lookups or computations of data in selector functions.
    In addition, you can further optimize the performance by using Reselect to write “memoized” selectors that can skip unnecessary work
*/
const mapStateToProps = state => {
    let { visibilityFilter } = state;
    let todos = selector.getTodosByVisibilityFilter(state,visibilityFilter);

    return {todos};
};

export default connect(mapStateToProps)(TodoList);