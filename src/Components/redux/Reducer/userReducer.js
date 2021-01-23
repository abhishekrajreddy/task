
const initialState={
    user:null,
    error_msg:null,
    success_msg:null,
    delete_success_msg:null,
    dataState:'NOT_INITIALIZED',
}

export default function(state=initialState,action){
    switch (action.type) {
        case 'SUCCESS_ADDING':
            return{
                ...state,
                success_msg:action.payload
            }
        case 'FETCHING':
            return{
            ...state,
            dataState:'INITIALIZING'
        }
        case 'FETCHING_SUCCESS':
            return{
            ...state,
            dataState:'SUCCESS',
            user:action.payload
        }
        case 'SUCCESS_DELETE':
            return{
                ...state,
                delete_success_msg:action.payload
            }
        default:return state;
    }
}