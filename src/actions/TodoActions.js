//Redux thunk its help us to create nested arrow functions
//getState access the app state
export const AddTodoAction = (todo) => (dispatch) => {

    dispatch({
        type: "ADD_TODO", // calling the reducer
        payload: todo, // this will be passed from our react app
    });
};



export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },

    } = getState();
    dispatch({
        type: 'REMOVE_TODO',
        payload: todos.filter(t => t.id !== todo.id),
    })
};