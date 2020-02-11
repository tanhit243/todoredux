import * as actionTypes from '../actions/actionTypes';

const initialStateTask = {
    allIds: [],
    byIds: {}
}

function todoApp(state = initialStateTask, action) {
    switch (action.type) {
        case actionTypes.ADD_TO:
            let { id, content } = action.payload; 
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
        case actionTypes.TOGGLE_TODO:
            let id_tmp = action.payload.id;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id_tmp]: {
                        ...state.byIds[id_tmp],
                        completed: !state.byIds[id_tmp].completed
                    }
                }
            }
        default:
            return state;
    }
}

export default todoApp;
//Bằng một cách nào đó khi phát ra một dispatch - action mà preState,action  được truyền vào func reducer và tạo ra một state mình muốn vào store.
// Để các component sử dụng được store thì bao quanh các component đó bằng <Provider />