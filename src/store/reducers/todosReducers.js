const initialState = {}
export const todoReducer =(state=initialState, action)=> {
    switch (action.type) {
        case "GET_TODOS":
            return{
                ...state,
                todos:action.payload
            }
            break;
    
        default:
            return state
            break;
    }    
} 