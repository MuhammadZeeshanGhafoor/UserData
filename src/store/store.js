import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from './reducers/todosReducers';
const reducer = combineReducers({
        todos:todoReducer
});
  


const initialState = {
   
  };
  const middleWare = [thunk];
  

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
  
  export default store;
  