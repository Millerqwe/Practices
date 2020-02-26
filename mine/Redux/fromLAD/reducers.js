const initialState = {   
    user: {       
        name: "Max",       
        age: 34   
    } 
};

export default function(state = initialState, action) {   
    switch (action.type) {       
        case 'SET_USER_NAME':           
        return {               
            ...state,               
            user: {                   
                ...state.user,                   
                name: action.data               
            }           
        }   
    }   
    return state; 
}