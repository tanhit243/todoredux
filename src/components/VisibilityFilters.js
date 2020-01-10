import React from 'react';
import { Button, Container } from 'semantic-ui-react';

class VisibilityFilters extends React.Component {
    render() {
        return(
            <Container>
                <Button>All</Button>
                <Button>Completed</Button>
                <Button>Incomplete</Button>
            </Container>
        );
    }
}

export default VisibilityFilters;