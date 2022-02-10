// const ADD_TODO = "ADD_TODO";
export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime.toString(),
            data: data,
        }
    }
}







// const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id,
});





