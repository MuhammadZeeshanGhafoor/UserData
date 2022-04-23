import axios from "axios"
export const fetchTodos =  ()=> async(dispatch)=> {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
    dispatch({
        type: "GET_TODOS",
        payload: data
    })
}