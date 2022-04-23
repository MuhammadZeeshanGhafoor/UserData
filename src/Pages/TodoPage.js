import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTodos } from "../store/actions/todo-actions";
import { todoReducer } from "../store/reducers/todosReducers";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useHistory,  } from 'react-router-dom'
// import { Route, useParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const TodoPage = () => {
  const { id } = useParams();
  // console.log(id)
  const [post, setPost] = useState({});
  // console.log(post.data)
  useEffect(() => {
    const fetchFromId = async () => {
      try {
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFromId();
  }, []);

  return (
    <div className="w-full bg-slate-700 flex justify-center h-96">
      <div className="w-1/4 bg-red-200 rounded-md">
      <ul className="mt-20 text-left p-5 flex flex-col justify-around">

        <li className="w-full rounded-md bg-green-200 font-semibold">Id: {post?.data?.id}</li>
        <li className="w-full rounded-md bg-green-200 font-semibold mt-5">Title: {post?.data?.title}</li>
        <li className="w-full rounded-md bg-green-200 font-semibold mt-5">User Id: {post?.data?.userId}</li>
      </ul>
      <p className="font-extrabold underline hover:decoration-transparent text-neutral-800"><Link to='/'>Back to Home </Link></p>
      </div>
      {/* <Route path="/:id" render={(props) => <TodoPage {...props} />} /> */}
    </div>
  );
};

export default TodoPage;
