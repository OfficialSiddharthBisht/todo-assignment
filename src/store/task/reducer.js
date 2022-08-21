import { ADD_TASK_ERR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE_TASK_ERR, DELETE_TASK_LOADING, DELETE_TASK_SUCCESS, GET_TASK_ERR, GET_TASK_LOADING, GET_TASK_SUCCESS, PATCH_TASK_ERR, PATCH_TASK_LOADING, PATCH_TASK_SUCCESS } from "./actionTypes"

const initialState = {
    loading : false,
    error : false,
    tasks : [],
}

export const reducer = (state = initialState , {type , payload})=>{
    switch(type){
        case GET_TASK_LOADING:
            return{
                ...state,
                loading : true
            }
        case GET_TASK_SUCCESS:
            return{
                ...state,
                loading: false,
                tasks: payload,
                error: false
            }
        case GET_TASK_ERR:
            return{
                ...state,
                loading : false,
                error :true
            }
        case ADD_TASK_LOADING:
            return{
                ...state,
                loading : true
            }
        case ADD_TASK_SUCCESS:
            return{
                ...state,
                loading : false,
                error : false,
            }
        case ADD_TASK_ERR:
            return{
                ...state,
                error : true,
                loading : false
            }
        case PATCH_TASK_LOADING:
            return{
                ...state,
                loading : true
            }
        case PATCH_TASK_SUCCESS:
            return{
                ...state,
                loading :false,
                error : false
            }
        case PATCH_TASK_ERR:
            return{
                ...state,
                error : true,
                loading : false
            }
        case DELETE_TASK_LOADING:
            return{
                ...state,
                loading: true
            }
        case DELETE_TASK_SUCCESS:
            return{
                ...state,
                loading :false,
                error : false
            }
        case DELETE_TASK_ERR:
            return{
                ...state,
                loading: false,
                error : true
            }
        default : return{
            ...state
        }
    }
}