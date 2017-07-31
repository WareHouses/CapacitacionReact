import { ADD_TASK } from "../actions"

const todoUni = (state ={},action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        key: action.id,
        text: action.text
      }
    default:
      return {}
  }
}

const todo = ( state = [] , action ) =>{
  switch (action.type) {
    case ADD_TASK:
      return[
        ...state,
        todoUni(undefined,action)
      ]
    default:
    return state;
  }
}

export default todo;
