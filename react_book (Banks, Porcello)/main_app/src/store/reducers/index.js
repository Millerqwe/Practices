export const color = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_COLOR':
            return {
                color: action.color,
                timestamp: action.timestamp
            }
        default: return state;
    }
}

export const colors = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COLOR':
            return [
                ...state,
                color(action)
            ]
    }
}

