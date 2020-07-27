export const color = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_COLOR':
            return {
                color: action.color,
                title: action.title || 'unnamed',
                timestamp: action.timestamp
            };
        default: return state;
    }
}

export const colors = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COLOR':
            return [
                ...state,
                {   
                    id: '12345',
                    color: action.color,
                    title: action.title || 'unnamed',
                    timestamp: action.timestamp
                }
            ];
        default: return state;
    }
}

