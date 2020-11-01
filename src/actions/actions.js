import { ADD_USER, EDIT_USER, DELETE_USER } from './types';
  
// add user
export const addUser = (data) => {  
    return dispatch => {  
        return dispatch({  
            type: ADD_USER,  
            payload: data  
        });  
    }  
};  


// edit user
export const editUser = (data) => {  
    return dispatch => {  
        return dispatch({  
            type: EDIT_USER,  
            payload: data  
        });  
    }  
};  
  
// delete user
export const deleteUser = (employeeId) => {  
    return dispatch => {  
        return dispatch({  
            type: DELETE_USER,  
            payload: employeeId  
        });  
    }  
}; 