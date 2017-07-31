export const ADD_TASK = "ADD_TASK";
let nextTodo = 0 ;
export const addTask = (text) => {
  return{
    type : ADD_TASK,
    id: nextTodo++,
    text
  }
}
