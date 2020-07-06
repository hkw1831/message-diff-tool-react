export const updateMessageReducer = (state={left: "", right: "", diff: []}, action) => {
    switch (action.type) {
        case "UPDATE_LEFT_MESSAGE":
            state = {
                right: state.right,
                left: action.payload
            }
            break;
        case "UPDATE_RIGHT_MESSAGE":
            state = {
                left: state.left,
                right: action.payload
            }
            break;
    }
    return state
}