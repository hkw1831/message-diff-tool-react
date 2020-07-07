export const updateMessageReducer = (state={left: "", right: "", diff: {}}, action) => {
    switch (action.type) {
        case "UPDATE_LEFT_MESSAGE":
            state = {
                diff: {},
                right: state.right,
                left: action.payload
                
            }
            break;
        case "UPDATE_RIGHT_MESSAGE":
            state = {
                diff: {},
                left: state.left,
                right: action.payload
            }
            break;
    }
    var leftSplit = state.left.split("\|");
    var rightSplit = state.right.split("|");
    for (var leftField of leftSplit) {
        var tagValue = leftField.split("=");
        var tag = tagValue[0];
        var value = tagValue[1];
        state['diff'][tag] = {
            ...state['diff'][tag],
            left: value
        }
    }
    for (var rightField of rightSplit) {
        var tagValue = rightField.split("=");
        var tag = tagValue[0];
        var value = tagValue[1];
        state['diff'][tag] = {
            ...state['diff'][tag],
            right: value
        }
    }
    return state
}