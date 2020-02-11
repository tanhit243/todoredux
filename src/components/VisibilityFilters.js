import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/actions';
import { VISIBILITY_FILTERS  } from '../redux/constants';

class VisibilityFilters extends React.Component {
    render() {
        let props = this.props;
        return(
            <Container>
                {
                    Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                        let currentFilter = VISIBILITY_FILTERS[filterKey];
                        return (
                            <Button 
                                onClick={() => props.setFilter(currentFilter)} 
                                disabled={currentFilter === props.activeFilter ? true : false} key={`key-${currentFilter}`} 
                            >
                                {currentFilter}
                            </Button>
                        );
                    })
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {
            activeFilter: state.visibilityFilter
        }
    );
}

export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);