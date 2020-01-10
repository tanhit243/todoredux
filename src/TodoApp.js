import React from 'react';
import { Container } from 'semantic-ui-react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import VisibilityFilters from './components/VisibilityFilters';

class TodoApp extends React.Component {
    render() {
        return(
            <Container>
                <h1>Todos with redux</h1>
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </Container>
        );
    }
}

export default TodoApp;