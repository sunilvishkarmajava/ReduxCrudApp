import { ADD_USER, EDIT_USER, DELETE_USER } from './types';
  
export function addUser(data) {  
    return dispatch => {  
        return dispatch({  
            type: ADD_USER,  
            payload: data  
        });  
    }  
};  
  
export function editUser(data) {  
    return dispatch => {  
        return dispatch({  
            type: EDIT_USER,  
            payload: data  
        });  
    }  
};  
  
export function deleteUser(employeeId) {  
    return dispatch => {  
        return dispatch({  
            type: DELETE_USER,  
            payload: employeeId  
        });  
    }  
}; 