import { useState } from 'react';
import './App.css';
import { fakeUserData } from './api';
import { useDispatch } from 'react-redux';
import { addUser, deleteUsers, removeUser } from './store/slice/UserSlice';
import { useSelector } from 'react-redux';
// import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
// import { useDispatch, useSelector } from 'react-redux';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch(); //action creator ko call kiya
  const data = useSelector((state) => { //access the state 
    return state.users
  })
  // const dispatch = useDispatch();

  //access our state
  // const Todo = useSelector((state) => state.Todo);
  // const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(AddTodoAction(todo))

  }
  const clearAll = () => {
    dispatch(deleteUsers())
  }
  const removeHandler = (t, id) => {
    // dispatch(RemoveTodoAction(t));
    dispatch(removeUser(id))
  }
  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  }
  return (

    <div className="App">
      <header className="App-header">
        <h2>Enter a Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a todo"
            style={{
              width: 200,
              padding: 20,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 20,
              borderRadius: 25,
              fontSize: 20,
              marginLeft: 20,
            }}
          >
            GO
          </button>
          <ul>
            {data &&
              data.map((t, id) => (
                <li key={t}>
                  <span key={t}>{t}</span>
                  <button
                    type="button"
                    style={{
                      borderRadius: 25,
                      fontSize: 20,
                      marginLeft: 20,
                      color: "white",
                      backgroundColor: "orange",
                    }}
                    onClick={() => removeHandler(t, id)}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
        <button
          onClick={() => addNewUser(fakeUserData())}
          type="submit"
          style={{
            padding: 20,
            borderRadius: 25,
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          Add User
        </button>
        <button
          onClick={() => clearAll()}
          type="submit"
          style={{
            padding: 20,
            borderRadius: 25,
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          Clear All
        </button>
      </header>
    </div>
  );
}

export default App;
