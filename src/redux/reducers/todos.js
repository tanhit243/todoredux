import * as actionTypes from '../actions/actionTypes';

const initialStateTask = {
    allIds: [],
    byIds: {}
}

function todoApp(state = initialStateTask, action) {
    switch (action.type) {
        case actionTypes.ADD_TO:
            const { id, content } = action.payload; 
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            }
        default:
            return state;
    }
}

export default todoApp;