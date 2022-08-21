import { ADD_TASK_ERR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE_TASK_ERR, DELETE_TASK_LOADING, DELETE_TASK_SUCCESS, GET_TASK_ERR, GET_TASK_LOADING, GET_TASK_SUCCESS, PATCH_TASK_ERR, PATCH_TASK_LOADING, PATCH_TASK_SUCCESS } from "./actionType"

export const getTaskLoading = () =>{
    return{
        type : GET_TASK_LOADING
    }
}

export const getTaskSuccess = (payload)=>{
    return{
        type: GET_TASK_SUCCESS,
        payload
    }
}

export const getTaskError = () =>{
    return{
        type : GET_TASK_ERR
    }
}

export const addTaskLoading = ()=>{
    return{
        type : ADD_TASK_LOADING
    }
}

export const addTaskSuccess = () =>{
    return{
        type : ADD_TASK_SUCCESS
    }
}

export const addTaskError = ()=>{
    return{
        type : ADD_TASK_ERR
    }
}

export const patchTaskLoading = () =>{
    return{
        type : PATCH_TASK_LOADING
    }
}
export const patchTaskSuccess = ()=>{
    return{
        type : PATCH_TASK_SUCCESS
    }
}
export const patchTaskError = ()=>{
    return{
        type : PATCH_TASK_ERR
    }
}

export const deleteTaskLoading = ()=>{
    return{
        type : DELETE_TASK_LOADING
    }
}

export const deleteTaskSuccess = ()=>{
    return{
        type : DELETE_TASK_SUCCESS
    }
}
export const deleteTaskError = ()=>{
    return{
        type : DELETE_TASK_ERR
    }
}