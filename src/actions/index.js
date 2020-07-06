export const updateLeftMessage = (message) => {
    return {
        type: "UPDATE_LEFT_MESSAGE",
        payload: message
    }
}

export const updateRightMessage = (message) => {
    return {
        type: "UPDATE_RIGHT_MESSAGE",
        payload: message
    }
}