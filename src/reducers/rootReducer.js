import { ADD_USER, EDIT_USER, DELETE_USER } from '../actions/types';
const initialstate = {
    users: [    
        { id: 1, name: "User 1", age: 24 },    
        { id: 2, name: "User 2", age: 56 },    
        { id: 3, name: "User 3", age: 21 }    
    ]  
}

const reducer = (state = initialstate, action) => {    
    switch (action.type) {    
        case ADD_USER:    
            return {    
                ...state,    
                users: state.users.concat(action.payload)    
            };    
        case EDIT_USER:    
            return {    
                ...state,    
                users: state.users.map(    
                    (content, i) => content.id === action.payload.id ? {...content, name : action.payload.name ,  age : action.payload.age }    
                                            : content)    
            };    
        case DELETE_USER:    
            return {    
                ...state,    
                users: state.users.filter(item => item.id !== action.payload)    
            };    
        default:    
            return state;    
    }    
};    
    
export default reducer;  
