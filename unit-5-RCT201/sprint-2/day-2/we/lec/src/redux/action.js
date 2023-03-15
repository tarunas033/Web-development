import { GET_TODOS } from "./actionType";
import { getTodosAPI } from "./api.ts";

export const getTodos = async (dispatch) => {
  const data = await getTodosAPI();

  dispatch({
    type: GET_TODOS,
    payload: data,
  });
};
export const addTodos = (value) => {
  return {
    type: GET_TODOS,
    payload: {
      id: Date.now(),
      value,
    },
  };
};
export const updateTodos = (id, changes) => {
  return {
    type: GET_TODOS,
    payload: {
      id,
      changes,
    },
  };
};
export const deleteTodos = (id) => {
  return {
    type: GET_TODOS,
    payload: id,
  };
};
