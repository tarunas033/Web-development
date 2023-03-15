import { GET_TODOS, ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "./actionType";

let initialState = {
  task: [],
};

export const reducerFunc = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS: {
      return {
        ...state,
        task: payload,
      };
    }
    case ADD_TODOS: {
      return {
        ...state,
        task: [...state.task, payload],
      };
    }
    case DELETE_TODOS: {
      const filteredTodo = state.task.filter((el) => el.id !== payload);
      return {
        ...state,
        task: filteredTodo,
      };
    }
    case UPDATE_TODOS: {
      return {
        task: state.task.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              ...payload.changes,
            };
          }
          return el;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
//!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
