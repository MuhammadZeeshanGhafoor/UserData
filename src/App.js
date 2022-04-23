import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { fetchTodos } from './store/actions/todo-actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Link, } from "react-router-dom";
import TodoPage from './Pages/TodoPage';
// import { useParams } from 'react-router-dom';
 
// const { id } = useParams()

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, []);
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/:id" element={<TodoPage />} />
        {/* <Route path="/project/:id" render={(props) => <TodoPage {...props} />} /> */}
        
        
      </Routes>
    </div>
  );
}

export default App;
